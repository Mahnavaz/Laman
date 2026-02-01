// Node.js script to generate all product pages
const fs = require('fs');
const path = require('path');

// Read products data
const productsData = JSON.parse(fs.readFileSync('products-data.json', 'utf8'));

// Read template (use product-tar-bench.html as base)
const templatePath = 'product-tar-bench.html';
let template = fs.readFileSync(templatePath, 'utf8');

console.log('Generating product pages...\n');

productsData.products.forEach(product => {
    console.log(`Creating ${product.file}...`);
    
    let html = template;
    
    // Replace title
    html = html.replace(/<title>.*?<\/title>/, `<title>${product.title.en} - Laman City</title>`);
    
    // Replace product title
    html = html.replace(
        /<h1 class="product-title".*?<\/h1>/s,
        `<h1 class="product-title" data-en="${product.title.en}" data-fa="${product.title.fa}">${product.title.en}</h1>`
    );
    
    // Replace description
    html = html.replace(
        /<div class="product-description">[\s\S]*?<button class="read-more-btn"/,
        `<div class="product-description">
                <p data-en="${product.description.en}" data-fa="${product.description.fa}">
                    ${product.description.en}
                </p>
                
                <button class="read-more-btn"`
    );
    
    // Replace gallery images
    const galleryImages = product.images.map((img, i) => 
        `                <img src="${img}" alt="${product.title.en}" class="gallery-main-image" data-index="${i}">`
    ).join('\n');
    
    html = html.replace(
        /<div class="gallery-slider"[\s\S]*?<\/div>\s*<button class="gallery-nav-btn gallery-prev"/,
        `<div class="gallery-slider" id="gallerySlider">
${galleryImages}
            </div>
            <button class="gallery-nav-btn gallery-prev"`
    );
    
    // Replace thumbnails
    const thumbnails = product.images.map((img, i) => 
        `            <img src="${img}" alt="${product.title.en}" class="thumbnail${i === 0 ? ' active' : ''}" data-index="${i}">`
    ).join('\n');
    
    html = html.replace(
        /<div class="product-thumbnails">[\s\S]*?<\/div>\s*<\/div>\s*<!-- Right Column/,
        `<div class="product-thumbnails">
${thumbnails}
        </div>
        </div>
        
        <!-- Right Column`
    );
    
    // Replace specs
    const specsItems = Object.entries(product.specs).map(([key, value]) => {
        const label = key.replace(/([A-Z])/g, ' $1').trim();
        const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
        return `                    <div class="spec-item">
                        <span class="spec-label" data-en="${capitalizedLabel}" data-fa="${capitalizedLabel}">${capitalizedLabel}</span>
                        <span class="spec-value" data-en="${value.en}" data-fa="${value.fa}">${value.en}</span>
                    </div>`;
    }).join('\n');
    
    html = html.replace(
        /<div class="specs-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- Similar Products/,
        `<div class="specs-grid">
${specsItems}
                </div>
            </div>
        </div>
    </div>

    <!-- Similar Products`
    );
    
    // Replace lightbox counter
    html = html.replace(
        /<div class="lightbox-counter".*?>.*?<\/div>/,
        `<div class="lightbox-counter" id="lightboxCounter">1 / ${product.images.length}</div>`
    );
    
    // Write file
    fs.writeFileSync(product.file, html, 'utf8');
});

console.log('\n✓ All product pages generated successfully!');
