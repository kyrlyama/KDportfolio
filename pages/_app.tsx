// pages/_app.tsx
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/bubbles.css";
import NavBar from "@/components/NavBar";

export type NextPageWithOptions<P = Record<string, unknown>, IP = P> =
  NextPage<P, IP> & { noGradient?: boolean };

type AppPropsWithOptions = AppProps & {
  Component: NextPageWithOptions;
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext", "cyrillic-ext", "vietnamese"],
  weight: ["300","400","500","600","700","800"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppPropsWithOptions) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
        <title>KD Portfolio</title>
      </Head>

      <div className={jakarta.className}>
        <NavBar />

        {/* Глобальный фон, как на About (фиксированный ниже всего контента) */}
        <div className="site-bg" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        <main className="pageContainer">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
