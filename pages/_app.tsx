// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type NextPageWithOptions<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  noGradient?: boolean;
};

type AppPropsWithOptions = AppProps & {
  Component: NextPageWithOptions;
};

const LINKS = [
  { path: "/", label: "Home", icon: true },
  { path: "/about", label: "About me" },
  { path: "/skills", label: "Soft and Hard skills" },
  { path: "/websites", label: "Websites" },
  { path: "/figma", label: "Figma" },
  { path: "/android_studio", label: "Android Studio" },
  { path: "/illustrator", label: "Illustrator" },
  { path: "/contacts", label: "Contacts" },
];

function AppNavBar() {
  const router = useRouter();

  return (
    <nav
      style={{
        backgroundColor: "#111",
        padding: "16px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        {LINKS.map((link) => {
          const active =
            router.pathname === link.path ||
            router.pathname.startsWith(link.path + "/");
          return (
            <li key={link.path}>
              <Link href={link.path} legacyBehavior>
                <a
                  style={{
                    display: "block",
                    color: "white",
                    textDecoration: "none",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    backgroundColor: active ? "#333" : "transparent",
                    transform: active ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.backgroundColor = "#333";
                    a.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.backgroundColor = active ? "#333" : "transparent";
                    a.style.transform = active ? "scale(1.05)" : "scale(1)";
                  }}
                >
                  {link.icon ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ verticalAlign: "middle" }}
                    >
                      <path d="M3 9L12 2l9 7"></path>
                      <path d="M9 22V12h6v10"></path>
                      <path d="M21 22H3"></path>
                    </svg>
                  ) : (
                    link.label
                  )}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function App({ Component, pageProps }: AppPropsWithOptions) {
  const noGradient = Component.noGradient === true; // <-- без any
  // ...
  return (
    <>
      <AppNavBar />
      <div className={noGradient ? "" : "pageGradient"}>
        <div className={noGradient ? "" : "container"}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

