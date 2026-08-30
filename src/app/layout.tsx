import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'

import "./globals.css"
import { ThemeProvider } from "@/src/components/theme-provider"
import { GridOverlay } from "@/src/components/(layout)/grid-overlay";
import CoordinatesOverlay from "../components/(layout)/coordinates-overlay";
import ScrollProgress from "../components/(layout)/scroll-progress";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Alexandra Tsimentarova | Portfolio",
    template: "%s | Alexandra Tsimentarova",
  },
  description:
    "Portfolio website showcasing projects, experience, and creative digital work.",
  applicationName: "Alexandra Tsimentarova Portfolio",
  authors: [{ name: "Alexandra Tsimentarova" }],
  keywords: [
    "portfolio",
    "designer",
    "developer",
    "creative",
    "web design",
    "frontend",
  ],
  openGraph: {
    title: "Alexandra Tsimentarova | Portfolio",
    description:
      "Portfolio website showcasing projects, experience, and creative digital work.",
    url: "https://example.com",
    siteName: "Alexandra Tsimentarova",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandra Tsimentarova | Portfolio",
    description:
      "Portfolio website showcasing projects, experience, and creative digital work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={GeistSans.className}
    >
      <body>
        <GridOverlay />
        <CoordinatesOverlay />
        <ScrollProgress />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
