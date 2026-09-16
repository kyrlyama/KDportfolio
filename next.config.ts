// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

function buildCSP(prod: boolean) {
  const parts = [
    "default-src 'self'",
    [
      "script-src 'self'",
      "'unsafe-inline'",
      prod ? "" : "'unsafe-eval'",
      "blob:",
      "https://va.vercel-scripts.com",
    ].filter(Boolean).join(" "),
    ["style-src 'self' 'unsafe-inline'", "blob:"].join(" "),
    ["img-src 'self' data: blob:", prod ? "" : "*"].filter(Boolean).join(" "),
    "font-src 'self' data:",
    [
      "connect-src 'self' https:",
      prod ? "" : "http: ws: wss:",
      "https://vitals.vercel-insights.com",
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
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {},

  async headers() {
    return [{ source: "/(.*)", headers: SECURITY_HEADERS }];
  },

  async redirects() {
    return [
      { source: "/project40", destination: "/projects/stock-tracker", permanent: true },
      { source: "/figma1", destination: "/uiux/travel-app", permanent: true },
      { source: "/figma2", destination: "/uiux/gift-helper", permanent: true },
      { source: "/figma3", destination: "/uiux/likefon-prototype", permanent: true },
      { source: "/androidstudio1", destination: "/android/translator", permanent: true },
      { source: "/androidstudio2", destination: "/android/calculator", permanent: true },
      { source: "/androidstudio3", destination: "/android/currency-converter", permanent: true },
    ];
  },
};

export default nextConfig;
