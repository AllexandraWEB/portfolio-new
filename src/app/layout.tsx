import { GeistSans } from 'geist/font/sans'

import "./globals.css"
import { ThemeProvider } from "@/src/components/theme-provider"
import { cn } from "@/src/lib/utils";
import { GridOverlay } from "@/src/components/grid-overlay";


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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
