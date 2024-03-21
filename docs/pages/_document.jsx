import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="theme-color" content="#f38020" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/apple-touch-icon-57x57.png.webp"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/apple-touch-icon-60x60.png.webp"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/apple-touch-icon-72x72.png.webp"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/apple-touch-icon-76x76.png.webp"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/apple-touch-icon-114x114.png.webp"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/apple-touch-icon-120x120.png.webp"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/apple-touch-icon-144x144.png.webp"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/apple-touch-icon-152x152.png.webp"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/apple-touch-icon-180x180.png.webp"
          />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="64x64"
            href="https://s28006.pcdn.co/wp-content/themes/pros/assets/img/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
