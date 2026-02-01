# PowerShell script to generate all product pages from JSON data

$jsonData = Get-Content "products-data.json" -Raw | ConvertFrom-Json

Write-Host "Generating product pages..." -ForegroundColor Green

foreach ($product in $jsonData.products) {
    Write-Host "Creating $($product.file)..." -ForegroundColor Cyan
    
    # Generate gallery images HTML
    $galleryImages = ""
    $thumbnails = ""
    $imageCount = $product.images.Count
    
    for ($i = 0; $i -lt $imageCount; $i++) {
        $img = $product.images[$i]
        $galleryImages += "                <img src=`"$img`" alt=`"$($product.title.en)`" class=`"gallery-main-image`" data-index=`"$i`">`n"
        $activeClass = if ($i -eq 0) { " active" } else { "" }
        $thumbnails += "            <img src=`"$img`" alt=`"$($product.title.en)`" class=`"thumbnail$activeClass`" data-index=`"$i`">`n"
    }
    
    # Generate specs HTML
    $specsHtml = ""
    foreach ($spec in $product.specs.PSObject.Properties) {
        $label = $spec.Name -replace '([A-Z])', ' $1'
        $label = (Get-Culture).TextInfo.ToTitleCase($label.Trim())
        $specsHtml += @"
                    <div class="spec-item">
                        <span class="spec-label" data-en="$label" data-fa="$label">$label</span>
                        <span class="spec-value" data-en="$($spec.Value.en)" data-fa="$($spec.Value.fa)">$($spec.Value.en)</span>
                    </div>

"@
    }
    
    # Generate similar products HTML
    $similarHtml = ""
    foreach ($similar in $product.similarProducts) {
        $similarProduct = $jsonData.products | Where-Object { $_.file -eq $similar }
        if ($similarProduct) {
            $similarImg = $similarProduct.images[0]
            $similarHtml += @"
                <a href="$similar" class="product-card" style="flex: 0 0 350px; text-decoration: none; color: inherit;">
                    <div class="product-card-img" style="aspect-ratio: 1; overflow: hidden; background: white; border-radius: 8px;">
                        <img src="$similarImg" alt="$($similarProduct.title.en)" style="width: 100%; height: 100%; object-fit: contain;">
                    </div>
                    <div class="product-card-content" style="padding: 1rem 0;">
                        <h3 style="font-size: 1.25rem; font-weight: 400; margin-bottom: 0.5rem; font-family: 'Inter', sans-serif;" data-en="$($similarProduct.title.en)" data-fa="$($similarProduct.title.fa)">$($similarProduct.title.en)</h3>
                        <p style="color: #666; font-size: 0.875rem; font-family: 'Inter', sans-serif;" data-en="$($similarProduct.description.en)" data-fa="$($similarProduct.description.fa)">$($similarProduct.description.en)</p>
                    </div>
                </a>

"@
        }
    }
