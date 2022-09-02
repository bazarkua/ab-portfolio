import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet"></link>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.waves.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}