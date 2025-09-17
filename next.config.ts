// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

function buildCSP(prod: boolean) {
  // В prod убираем 'unsafe-eval' и не разрешаем лишние источники.
  // В dev даём ws/wss, http, 'unsafe-eval' и blob для работы HMR и дев-оверлея.
  const parts = [
    "default-src 'self'",
    [
      "script-src 'self'",
      "'unsafe-inline'",            // Next вставляет инлайновые хэши/nonce, но для простоты оставим inline
      prod ? "" : "'unsafe-eval'",  // нужно webpack/HMR в dev
      "blob:",                      // на всякий случай для dev-инструментов
    ].filter(Boolean).join(" "),
    ["style-src 'self' 'unsafe-inline'", "blob:"].join(" "),
    // Картинки: локальные (self), data/blob. В dev можно позволить любые https, чтобы ничего не ломалось.
    ["img-src 'self' data: blob:", prod ? "" : "*"].filter(Boolean).join(" "),
    "font-src 'self' data:",
    [
      "connect-src 'self' https:",
      prod ? "" : "http: ws: wss:", // HMR/overlay в dev
    ].filter(Boolean).join(" "),
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
  ];

  return parts.join("; ");
}

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: buildCSP(isProd) },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Включай HSTS только если проект ВСЕГДА отдается по HTTPS (прод-хостинг):
  // { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Если используешь внешние домены для next/image — добавь сюда:
    // remotePatterns: [{ protocol: "https", hostname: "images.example.com" }],
  },
  async headers() {
    return [{ source: "/(.*)", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
