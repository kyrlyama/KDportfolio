import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"> {/* если основной язык RU — поставь "ru" */}
      <Head>
        {/* Цвет адресной строки/системной UI на мобилках */}
        <meta name="theme-color" content="#ffffff" />
        {/* Поддерживаем и светлую, и тёмную схему — переключатель в NavBar */}
        <meta name="color-scheme" content="light dark" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
