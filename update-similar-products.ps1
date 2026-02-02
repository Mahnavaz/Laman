# Script to update Similar Products section in all product pages

$similarProductsHTML = @'
    <!-- Similar Products -->
    <section class="similar-products-section">
        <div class="similar-products-container">
            <h2 class="similar-products-title" data-en="Similar products" data-fa="محصولات مشابه">Similar products</h2>
            <div class="similar-products-grid">
                <a href="product-tar-bench.html" class="similar-product-card">
                    <div class="similar-product-img">
                        <img src="3-1.png" alt="Tar Bench">
                    </div>
                    <div class="similar-product-info">
                        <h3 data-en="Tar Bench" data-fa="نیمکت تار">Tar Bench</h3>
                        <p data-en="Modern bench inspired by musical strings design" data-fa="نیمکت مدرن با الهام از طراحی سیم‌های موسیقی">Modern bench inspired by musical strings design</p>
                        <span class="similar-product-link" data-en="View Details" data-fa="مشاهده جزئیات">View Details</span>
                    </div>
                </a>
                <a href="product-tar-bench-backrest.html" class="similar-product-card">
                    <div class="similar-product-img">
                        <img src="4-1.png" alt="Tar Bench with Backrest">
                    </div>
                    <div class="similar-product-info">
                        <h3 data-en="Tar Bench with Backrest" data-fa="نیمکت تار با پشتی">Tar Bench with Backrest</h3>
                        <p data-en="Ergonomic bench with comfortable backrest" data-fa="نیمکت ارگونومیک با پشتی راحت">Ergonomic bench with comfortable backrest</p>
                        <span class="similar-product-link" data-en="View Details" data-fa="مشاهده جزئیات">View Details</span>
                    </div>
                </a>
                <a href="product-chaft-bench.html" class="similar-product-card">
                    <div class="similar-product-img">
                        <img src="5-1.png" alt="Chaft Bench">
                    </div>
                    <div class="similar-product-info">
                        <h3 data-en="Chaft Bench" data-fa="نیمکت چفت">Chaft Bench</h3>
                        <p data-en="Bench with unique connection system" data-fa="نیمکت با سیستم اتصال منحصربه‌فرد">Bench with unique connection system</p>
                        <span class="similar-product-link" data-en="View Details" data-fa="مشاهده جزئیات">View Details</span>
                    </div>
                </a>
                <a href="product-pood-bench.html" class="similar-product-card">
                    <div class="similar-product-img">
                        <img src="Pictures/6-1.png" alt="Pood Bench">
                    </div>
                    <div class="similar-product-info">
                        <h3 data-en="Pood Bench" data-fa="نیمکت پود">Pood Bench</h3>
                        <p data-en="Contemporary design inspired by traditional weaving" data-fa="طراحی معاصر با الهام از بافت سنتی">Contemporary design inspired by traditional weaving</p>
                        <span class="similar-product-link" data-en="View Details" data-fa="مشاهده جزئیات">View Details</span>
                    </div>
                </a>
                <a href="product-kalaf-bench.html" class="similar-product-card">
                    <div class="similar-product-img">
                        <img src="Pictures/7-1.png" alt="Kalaf Bench">
                    </div>
                    <div class="similar-product-info">
                        <h3 data-en="Kalaf Bench" data-fa="نیمکت کلاف">Kalaf Bench</h3>
                        <p data-en="Bench with organic form and flowing lines" data-fa="نیمکت با فرم ارگانیک و خطوط روان">Bench with organic form and flowing lines</p>
                        <span class="similar-product-link" data-en="View Details" data-fa="مشاهده جزئیات">View Details</span>
                    </div>
                </a>
                <a href="product-bast-bench.html" class="similar-product-card">
                    <div class="similar-product-img">
                        <img src="Pictures/8-1.png" alt="Bast Bench">
                    </div>
                    <div class="similar-product-info">
                        <h3 data-en="Bast Bench" data-fa="نیمکت بست">Bast Bench</h3>
                        <p data-en="Easy installation with high stability" data-fa="نصب آسان با پایداری بالا">Easy installation with high stability</p>
                        <span class="similar-product-link" data-en="View Details" data-fa="مشاهده جزئیات">View Details</span>
                    </div>
                </a>
            </div>
        </div>
    </section>
'@

# List of product files to update (excluding bast-bench and tar-bench-backrest which are already done)
$files = @(
    "product-tar-bench.html",
    "product-chaft-bench.html",
    "product-pood-bench.html",
    "product-kalaf-bench.html"
)

foreach ($file in $files) {
    Write-Host "Updating $file..."
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Find and replace the Similar Products section
    $pattern = '(?s)<!-- Similar Products -->.*?</section>'
    $content = $content -replace $pattern, $similarProductsHTML
    
    # Save the file
    $content | Set-Content $file -Encoding UTF8 -NoNewline
    Write-Host "Updated $file successfully"
}

Write-Host "All files updated!"
