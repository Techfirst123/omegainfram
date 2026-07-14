// Build-time static prerendering: renders every route listed in
// public/sitemap.xml to real HTML (with route-specific <title>/meta) so
// crawlers and social scrapers get real content without executing JS.
// The client app still boots normally over the prerendered markup.
import { build } from 'vite'
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(fileURLToPath(import.meta.url), '..', '..')
const distDir = path.resolve(root, 'dist')
const ssrOutDir = path.resolve(root, 'dist-ssr')

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    console.warn(`  ! pattern not found, skipped: ${pattern}`)
    return html
  }
  return html.replace(pattern, replacement)
}

async function main() {
  console.log('Building SSR bundle for prerendering...')
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: 'dist-ssr',
      emptyOutDir: true,
      rollupOptions: {
        output: { format: 'es', entryFileNames: 'entry-server.js' },
      },
    },
  })

  const serverEntryUrl = pathToFileURL(path.resolve(ssrOutDir, 'entry-server.js')).href
  const { renderApp, getSeoForPath, SITE_URL } = await import(serverEntryUrl)

  const sitemapXml = readFileSync(path.resolve(root, 'public/sitemap.xml'), 'utf8')
  const routes = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname)

  const template = readFileSync(path.resolve(distDir, 'index.html'), 'utf8')

  let successCount = 0
  for (const route of routes) {
    try {
      const appHtml = await renderApp(route)
      const seo = getSeoForPath(route)
      const canonical = `${SITE_URL}${route === '/' ? '/' : route}`

      let html = template
      html = replaceTag(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`)
      html = replaceTag(html, /<title>.*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
      html = replaceTag(html, /(<meta\s+name="description"\s+content=")(.*?)(")/, `$1${escapeHtml(seo.description)}$3`)
      html = replaceTag(html, /(<meta name="keywords" content=")(.*?)(")/, `$1${escapeHtml(seo.keywords)}$3`)
      html = replaceTag(html, /(<link rel="canonical" href=")(.*?)(")/, `$1${canonical}$3`)
      html = replaceTag(html, /(<meta property="og:title" content=")(.*?)(")/, `$1${escapeHtml(seo.title)}$3`)
      html = replaceTag(html, /(<meta property="og:description" content=")(.*?)(")/, `$1${escapeHtml(seo.description)}$3`)
      html = replaceTag(html, /(<meta property="og:url" content=")(.*?)(")/, `$1${canonical}$3`)
      html = replaceTag(html, /(<meta name="twitter:title" content=")(.*?)(")/, `$1${escapeHtml(seo.title)}$3`)
      html = replaceTag(html, /(<meta name="twitter:description" content=")(.*?)(")/, `$1${escapeHtml(seo.description)}$3`)

      const outPath =
        route === '/' ? path.resolve(distDir, 'index.html') : path.resolve(distDir, route.replace(/^\//, ''), 'index.html')
      mkdirSync(path.dirname(outPath), { recursive: true })
      writeFileSync(outPath, html)
      successCount += 1
      console.log(`  ok  ${route}`)
    } catch (err) {
      console.warn(`  skip ${route}: ${err instanceof Error ? err.message : err}`)
    }
  }

  rmSync(ssrOutDir, { recursive: true, force: true })
  console.log(`Prerendered ${successCount}/${routes.length} routes.`)
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  rmSync(ssrOutDir, { recursive: true, force: true })
  process.exit(1)
})
