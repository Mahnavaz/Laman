# Vercel Deployment Script for Laman City Website
# Run this script to deploy your website to Vercel

Write-Host "🚀 Deploying Laman City Website to Vercel..." -ForegroundColor Green
Write-Host ""

# Change to the correct directory
Set-Location "C:\Users\m.rahimi\Desktop\diba-standalone"

Write-Host "📁 Current directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""

# Check if vercel is installed
$vercelVersion = vercel --version 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Vercel CLI is installed: $vercelVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Vercel CLI is not installed!" -ForegroundColor Red
    Write-Host "Install it with: npm install -g vercel" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "🔄 Starting deployment..." -ForegroundColor Yellow
Write-Host ""

# Deploy to production
vercel --prod --yes

Write-Host ""
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Your website is now live! 🎉" -ForegroundColor Cyan
Write-Host ""
