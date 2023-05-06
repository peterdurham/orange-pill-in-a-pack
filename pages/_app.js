import { useState } from "react";
import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [cardView, setCardView] = useState("images");
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NH504KGWSJ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NH504KGWSJ', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} cardView={cardView} setCardView={setCardView} />
    </>
  );
}
