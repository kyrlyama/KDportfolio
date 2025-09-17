import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"> {/* если основной язык RU — поставь "ru" */}
      <Head>
        {/* Цвет адресной строки/системной UI на мобилках */}
        <meta name="theme-color" content="#ffffff" />
        {/* Явно фиксируем светлую схему, чтобы не инвертировало цвета */}
        <meta name="color-scheme" content="light" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
