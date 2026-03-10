# Bring Next LLC – Static HTML site

Site HTML tĩnh: trang chủ, giới thiệu, danh sách app, liên hệ. Không dùng framework, chỉ HTML/CSS.

## Trang

- **index.html** – Trang chủ  
- **about.html** – Giới thiệu  
- **projects.html** – Danh sách app  
- **contact.html** – Liên hệ (form gửi qua Formspree)  
- **app-ads.txt** – Google AdSense

## Chạy local

```bash
python3 -m http.server 8080
# Mở http://localhost:8080
```

Hoặc: `npx serve .`

## Deploy

Upload toàn bộ thư mục gốc lên static host (Coolify static site, Nginx, Cloudflare Pages, …). Document root trỏ vào thư mục này. Đảm bảo `/app-ads.txt` trả file `app-ads.txt` với `Content-Type: text/plain`.

## Cấu trúc

- `index.html`, `about.html`, `projects.html`, `contact.html` – các trang  
- `css/site.css` – style chung  
- `static/` – favicons, ảnh, logo app  
