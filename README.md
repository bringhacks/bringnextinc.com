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

### Railway

1. Vào [railway.app](https://railway.app), đăng nhập, tạo project mới.
2. **New → GitHub Repo** → chọn repo `bringnextinc.com` (đã push code HTML).
3. Railway dùng **Nixpacks**: có `package.json` với script `start` (chạy `serve . -l $PORT`) nên sẽ cài dependency và chạy serve thư mục gốc. Không cần chỉnh Build/Start command.
4. Sau khi deploy xong: **Settings → Networking → Generate Domain** để lấy URL (hoặc gắn domain riêng như `bringnextinc.com`).
5. `/app-ads.txt` sẽ trả đúng file với `Content-Type: text/plain` (do `serve` tự nhận `.txt`).

**Lưu ý:** Repo có sẵn file `Staticfile` để nếu bỏ `package.json`, Nixpacks có thể nhận static site bằng NGINX. Hiện tại dùng `package.json` + `serve` cho đơn giản và ổn định.

### Static host khác

Upload toàn bộ thư mục gốc lên static host (Coolify static site, Nginx, Cloudflare Pages, …). Document root trỏ vào thư mục này. Đảm bảo `/app-ads.txt` trả file `app-ads.txt` với `Content-Type: text/plain`.

## Cấu trúc

- `index.html`, `about.html`, `projects.html`, `contact.html` – các trang  
- `css/site.css` – style chung  
- `static/` – favicons, ảnh, logo app  
