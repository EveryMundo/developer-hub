import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="https://everymundo.github.io/registry/docs/favicon-32x32.png" />
          <meta name="theme-color" content="#f38020" />
          <link
            rel="apple-touch-icon"
            sizes="48x48"
            href="https://everymundo.github.io/registry/docs/icons/icon-48x48.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://everymundo.github.io/registry/docs/icons/icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="https://everymundo.github.io/registry/docs/icons/icon-96x96.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://everymundo.github.io/registry/docs/icons/icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="https://everymundo.github.io/registry/docs/icons/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="https://everymundo.github.io/registry/docs/icons/icon-256x256.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="https://everymundo.github.io/registry/docs/icons/icon-384x384.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="https://everymundo.github.io/registry/docs/icons/icon-512x512.png"
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
