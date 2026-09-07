// pages/_app.tsx
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

export type NextPageWithOptions<P = Record<string, unknown>, IP = P> =
  NextPage<P, IP> & { noGradient?: boolean };

type AppPropsWithOptions = AppProps & {
  Component: NextPageWithOptions;
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext", "cyrillic-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://kdportfolio-ecru.vercel.app";
const DEFAULT_DESCRIPTION =
  "Kristina Dunajeva — Frontend Developer and UI/UX Designer. Portfolio of responsive websites, interfaces, Figma case studies, and practical web projects.";

const PAGE_META = {
  "/": {
    title: "Kristina Dunajeva — Frontend Developer & UI/UX Designer",
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: "About — Kristina Dunajeva",
    description:
      "About Kristina Dunajeva, a Frontend Developer with UI/UX design skills and experience connecting design with implementation.",
  },
  "/projects": {
    title: "Projects — Kristina Dunajeva",
    description:
      "Selected web, UI/UX, Figma, Android, and visual design projects by Kristina Dunajeva.",
  },
  "/websites": {
    title: "Websites — Kristina Dunajeva",
    description:
      "Frontend website projects including Stock Tracker, CleanseTeam, and university web projects.",
  },
  "/figma": {
    title: "Figma Projects — Kristina Dunajeva",
    description:
      "UI/UX and Figma case studies covering research, user flows, wireframes, visual design, and prototyping.",
  },
  "/android_studio": {
    title: "Android Projects — Kristina Dunajeva",
    description:
      "Android Studio projects built during web and mobile development studies.",
  },
  "/uiux": {
    title: "UI/UX Case Studies — Kristina Dunajeva",
    description:
      "UI/UX case studies covering research, information architecture, visual design, and practical implementation.",
  },
  "/illustrator": {
    title: "Visual Design — Kristina Dunajeva",
    description:
      "Visual design work including posters, branding materials, illustration, and digital compositions.",
  },
  "/contacts": {
    title: "Contact — Kristina Dunajeva",
    description:
      "Get in touch with Kristina Dunajeva about frontend, UI/UX, and hybrid design-development opportunities.",
  },
  "/projects/stock-tracker": {
    title: "Stock Tracker — Kristina Dunajeva",
    description:
      "Frontend inventory management project built around a real store workflow.",
  },
  "/uiux/travel-app": {
    title: "Travel Planning App — UI/UX Case Study",
    description:
      "Research-driven Figma concept for planning trips with friends.",
  },
  "/uiux/shop-redesign": {
    title: "Like store Redesign — UI/UX Case Study",
    description:
      "Visual identity and in-store experience redesign for Likefon.",
  },
  "/uiux/cleaning-website": {
    title: "Cleaning Website — UI/UX Case Study",
    description:
      "UX/UI case study for a cleaning service website and booking flow.",
  },
  "/uiux/gift-helper": {
    title: "Gift Helper — UI/UX Case Study",
    description:
      "Figma case study for a calmer, more accessible gift selection experience.",
  },
  "/uiux/likefon-prototype": {
    title: "Likefon Website Prototype — UI/UX Case Study",
    description:
      "Commercial Figma prototype for the Likefon website redesign.",
  },
  "/android/translator": {
    title: "Translator — Android App",
    description: "Android translator app project built with Java and Material Design.",
  },
  "/android/calculator": {
    title: "Calculator — Android App",
    description: "Android calculator app project built with Kotlin and Material components.",
  },
  "/android/currency-converter": {
    title: "Currency Converter — Android App",
    description: "Android currency converter project with validation and locale-aware formatting.",
  },
};

function getMeta(pathname: string) {
  return (
    PAGE_META[pathname as keyof typeof PAGE_META] ?? {
      title: "Kristina Dunajeva — Portfolio",
      description: DEFAULT_DESCRIPTION,
    }
  );
}

function Footer() {
  return (
    <footer
      style={{
        width: "min(1120px, calc(100% - 32px))",
        margin: "0 auto",
        padding: "34px 0 44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap",
        color: "#6b7280",
        fontSize: 13,
      }}
    >
      <div>
        <strong style={{ color: "#111827" }}>Kristina Dunajeva</strong>
        <span style={{ marginLeft: 8 }}>Frontend Developer &amp; UI/UX Designer</span>
      </div>
      <nav aria-label="Footer links" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <a href="mailto:kdunaeva04@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/kristina-dunajeva-kd/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/kyrlyama?tab=repositories" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="/contacts">Contact</a>
      </nav>
    </footer>
  );
}

export default function MyApp({ Component, pageProps }: AppPropsWithOptions) {
  const router = useRouter();
  const pathname = router.asPath.split("?")[0].split("#")[0] || "/";
  const meta = getMeta(pathname);
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const ogImage = `${SITE_URL}/og-cover.png`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kristina Dunajeva Portfolio" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      {process.env.NODE_ENV === "production" && (
        <Script
          src="https://va.vercel-scripts.com/v1/script.js"
          strategy="afterInteractive"
        />
      )}

      <div id="app-root" className={jakarta.className}>
        <a href="#main" className="skipLink">Skip to content</a>

        <NavBar />

        <div className="site-bg" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        <main id="main" role="main" className="pageContainer">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </>
  );
}
