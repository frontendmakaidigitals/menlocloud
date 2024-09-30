"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Router from 'next/router';
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import JOS from "jos-animation";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.css";
import "../styles/vendors/menu.css";


const DMSans = localFont({
  src: "../fonts/DMSans-Bold.woff2",
  variable: "--font-DMSans",
});

const ClashDisplay = localFont({
  src: "../fonts/ClashDisplay-Medium.woff2",
  variable: "--font-clash-display",
});

const Raleway = localFont({
  src: "../fonts/Raleway-Bold.woff2",
  variable: "--font-raleway",
});

const SpaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Bold.woff2",
  variable: "--font-space-grotesk",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const jos_options = {
    passive: false,
    once: true,
    animation: "fade-up",
    timingFunction: "ease",
    threshold: 0,
    delay: 0.5,
    duration: 0.7,
    scrollDirection: "down",
    rootMargin: "0% 0% 15% 0%",
  };
  useEffect(() => {
    JOS.init(jos_options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    JOS.refresh();
  }, [pathname]);


  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleStop);
    Router.events.on('routeChangeError', handleStop);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleStop);
      Router.events.off('routeChangeError', handleStop);
    };
  }, []);


  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=telma@300,400,500&f[]=clash-grotesk@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/img_placeholder/logo-icon.png"
        ></link>
      </head>
      <body
        className={`${DMSans.variable} ${ClashDisplay.variable} ${Raleway.variable} ${SpaceGrotesk.variable} ${inter.variable}`}
      >
         
        {children}
      </body>
    </html>
  );
}
