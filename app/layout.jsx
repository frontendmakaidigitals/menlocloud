"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Router from "next/router";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import JOS from "jos-animation";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.css";
import "../styles/vendors/menu.css";
import Loader from "./loading";

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
  const [loading, setLoading] = useState(true);
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
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Adjust this time as necessary

    return () => clearTimeout(timer); // Cleanup the timer on unmount
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
        {loading ? <Loader /> : null}
        {children}
      </body>
    </html>
  );
}
