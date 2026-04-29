Add-Type -AssemblyName System.Windows.Forms
$img = [System.Windows.Forms.Clipboard]::GetImage()
if ($img) {
    $img.Save('f:\omega\public\BESS Image.png', [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "Image saved to BESS Image.png"
} else {
    Write-Output "No image found in clipboard"
}
