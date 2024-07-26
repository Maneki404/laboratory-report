import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/styles/globals.css";
import Nav from "@/components/Nav";

import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  Input,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import Background from "@/components/Background";

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
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={montserrat.className + " tracking-wide"}>
        <MantineProvider>
          <Nav />
          <Background />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
