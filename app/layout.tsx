import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import StoreProvider from "./StoreProvider";

import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "@/styles/globals.css";
import Resolutions from "@/components/Resolutions";
import Background from "@/components/Background";
import customTheme from "@/styles/theme";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Laboratory App",
  description: "Made with ♡ by Aslı Ayşe Şahin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body className={montserrat.className + " tracking-wide"}>
          <MantineProvider theme={customTheme}>
            <Resolutions name="nav" />
            <Background />
            {children}
            <Resolutions name="hamburger" />
          </MantineProvider>
          <footer>
            <Resolutions name="footer" />
          </footer>
        </body>
      </html>
    </StoreProvider>
  );
}
