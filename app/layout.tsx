import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";

import "@/styles/globals.css";
import Nav from "@/components/Nav";

import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

//const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={montserrat.className}>
        <MantineProvider>
          <Nav />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
