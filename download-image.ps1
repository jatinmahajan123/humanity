try {
    $url = "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1655f8ac-4156-44c7-a9d3-5a79f0c44ac9.__CR0,0,300,300_PT0_SX300_V1___.png"
    $outputPath = "public/images/ai-education-image.png"
    
    Write-Host "Downloading AI education image..."
    Invoke-WebRequest -Uri $url -OutFile $outputPath
    Write-Host "Image downloaded successfully to $outputPath"
}
catch {
    Write-Host "Error downloading image: $($_.Exception.Message)"
} 