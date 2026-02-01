# راهنمای اتصال دامنه lamancity.com به Vercel

## وضعیت فعلی
✅ دامنه در Vercel اضافه شد
⏳ منتظر تنظیم DNS در Parspack

## مراحل تنظیم در Parspack

### 1. وارد پنل Parspack شوید
- آدرس: https://my.parspack.co
- به بخش "مدیریت دامنه" یا "DNS Management" بروید

### 2. رکوردهای DNS را اضافه کنید

#### رکورد اول - دامنه اصلی (Root Domain)
```
Type: A
Name: @ (یا خالی بگذارید)
Value: 76.76.21.21
TTL: 3600
```

#### رکورد دوم - ساب‌دامین www
```
Type: A
Name: www
Value: 76.76.21.21
TTL: 3600
```

### 3. ذخیره تغییرات
- روی دکمه "ذخیره" یا "Save" کلیک کنید
- منتظر بمانید تا DNS propagate شود (معمولاً 5-30 دقیقه)

## بررسی وضعیت

بعد از تنظیم DNS، می‌توانید وضعیت را بررسی کنید:

### در خط فرمان:
```bash
nslookup lamancity.com
```

باید IP آدرس `76.76.21.21` را نشان دهد.

### در مرورگر:
- http://lamancity.com
- http://www.lamancity.com

## SSL Certificate

Vercel به‌صورت خودکار SSL certificate (HTTPS) را برای دامنه شما صادر می‌کند.
این کار ممکن است تا 24 ساعت طول بکشد.

## لینک‌های مفید

- پنل Vercel: https://vercel.com/rahimimahnavaz-3607s-projects/diba-furniture
- پنل Parspack: https://my.parspack.co
- مستندات Vercel: https://vercel.com/docs/concepts/projects/domains

## پشتیبانی

اگر مشکلی پیش آمد:
1. بررسی کنید که رکوردهای DNS درست وارد شده‌اند
2. صبر کنید تا DNS propagate شود (تا 48 ساعت)
3. با پشتیبانی Parspack تماس بگیرید: support@parspack.com
