import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
      <link rel="shortcut icon" href="/icons/logoMaxIconClaro.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/*ROBOTO*/}
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&family=Roboto:wght@500;700&display=swap" rel="stylesheet" />

        {/*INTER*/}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}