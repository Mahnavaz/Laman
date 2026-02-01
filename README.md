# Laman City - Urban Furniture Website

سایت رسمی شرکت لمان سیتی، تولیدکننده مبلمان شهری

## 🌐 آدرس‌های سایت

- **دامنه اصلی**: https://lamancity.com
- **با www**: https://www.lamancity.com
- **Vercel**: https://diba-furniture.vercel.app

## 📁 ساختار پروژه

```
diba-standalone/
├── docs/                      # مستندات پروژه
│   ├── DEPLOY.md             # راهنمای دیپلوی
│   ├── DOMAIN-SETUP.md       # راهنمای تنظیم دامنه
│   ├── domain-status.md      # وضعیت دامنه
│   ├── dns-records.txt       # تنظیمات DNS
│   └── vercel-dns-setup.md   # راهنمای DNS در Vercel
├── Pictures/                  # تصاویر محصولات
├── laman-products/           # فایل‌های محصولات لمان
├── *.html                    # صفحات HTML
├── style.css                 # استایل‌های سایت
├── script.js                 # اسکریپت‌های JavaScript
├── vercel.json              # تنظیمات Vercel
└── .vercelignore            # فایل‌های نادیده شده در Vercel

## 🚀 دیپلوی

### دیپلوی خودکار
هر push به branch `main` در GitHub به‌صورت خودکار در Vercel دیپلوی می‌شود.

### دیپلوی دستی
```bash
vercel --prod
```

یا از اسکریپت آماده استفاده کنید:
```bash
.\deploy-vercel.ps1
```

## 🛠️ توسعه محلی

### شروع سرور محلی
```bash
python -m http.server 8000
```

یا:
```bash
.\start-server.bat
```

سپس به آدرس http://localhost:8000 بروید.

## 📝 ویژگی‌ها

- ✅ طراحی Responsive
- ✅ پشتیبانی از چند زبان (فارسی، انگلیسی، عربی)
- ✅ حالت تاریک/روشن
- ✅ جستجوی محصولات
- ✅ گالری تصاویر محصولات
- ✅ فیلتر دسته‌بندی محصولات
- ✅ SSL/HTTPS فعال
- ✅ SEO بهینه

## 🎨 صفحات

### صفحات اصلی
- `index.html` - صفحه اصلی
- `products.html` - لیست محصولات
- `about.html` - درباره ما
- `contact.html` - تماس با ما
- `catalogue.html` - کاتالوگ

### صفحات دسته‌بندی
- `benches.html` - نیمکت‌ها
- `tables.html` - میزها
- `canopies.html` - سایه‌بان‌ها
- `platforms.html` - پلتفرم‌ها
- `details.html` - جزئیات

### صفحات محصولات
- `product-tar-bench.html` - نیمکت تار
- `product-tar-bench-backrest.html` - نیمکت تار با پشتی
- `product-chaft-bench.html` - نیمکت چفت
- `product-pood-bench.html` - نیمکت پود
- `product-kalaf-bench.html` - نیمکت کلاف
- `product-bast-bench.html` - نیمکت بست
- `product-picnic-set.html` - ست پیک‌نیک
- `product-pergola.html` - پرگولا
- `product-baft-canopy.html` - سایه‌بان بافت
- `product-pallet-platform-01.html` - پلتفرم پالت 01
- `product-pallet-platform-02.html` - پلتفرم پالت 02
- `product-tree-guard.html` - محافظ درخت

## 🔧 تنظیمات

### Vercel
تنظیمات Vercel در فایل `vercel.json` قرار دارد.

### Git
فایل‌های نادیده شده در `.gitignore` مشخص شده‌اند.

### DNS
دامنه از nameserverهای Vercel استفاده می‌کند:
- ns1.vercel-dns.com
- ns2.vercel-dns.com

## 📚 مستندات

مستندات کامل در پوشه `docs/` موجود است:
- راهنمای دیپلوی
- راهنمای تنظیم دامنه
- راهنمای DNS
- وضعیت دامنه

## 🔗 لینک‌های مفید

- **GitHub Repository**: https://github.com/Mahnavaz/Laman
- **Vercel Dashboard**: https://vercel.com/rahimimahnavaz-3607s-projects/diba-furniture
- **Domain Settings**: https://vercel.com/rahimimahnavaz-3607s-projects/diba-furniture/settings/domains

## 👥 تیم

- **طراح**: Diba Group
- **توسعه‌دهنده**: Mahnavaz Rahimi

## 📄 مجوز

© 2026 Laman City. All rights reserved.

---

**آخرین به‌روزرسانی**: 1 فوریه 2026
