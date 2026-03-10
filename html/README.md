# Static HTML site (Bring Next LLC)

Toàn bộ trang chính dưới dạng HTML tĩnh, không cần Next.js. Deploy thư mục `html/` lên bất kỳ static host nào (Coolify static, Nginx, Cloudflare Pages, …) để tránh vấn đề cache/round-robin với Next.

## Trang

- `index.html` – Trang chủ
- `about.html` – Giới thiệu
- `projects.html` – Danh sách app
- `contact.html` – Liên hệ (form gửi qua Formspree)
- `app-ads.txt` – Google AdSense (luôn trả đúng, không qua Next)

## Chạy local

```bash
cd html
python3 -m http.server 8080
# Mở http://localhost:8080
```

Hoặc dùng `npx serve html` từ thư mục gốc project.

## Deploy

1. Upload toàn bộ thư mục `html/` lên server (hoặc dùng `html/` làm document root).
2. Cấu hình web server:
   - Document root = `html/`
   - URL `/app-ads.txt` trả file `html/app-ads.txt` (Content-Type: `text/plain`).

Nếu dùng Coolify: tạo **Static Site**, source = thư mục `html/` (hoặc build step copy `html/` ra output).

## Cập nhật assets

Ảnh và favicon nằm trong `html/static/`. Để đồng bộ từ Next:

```bash
cp -R public/static html/
```
