@echo off
cd /d c:\Users\m.rahimi\Desktop\diba-standalone
git add -A
git commit -m "Fix vercel config to include all files"
git push origin main
vercel --prod --yes
