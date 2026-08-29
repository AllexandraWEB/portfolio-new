import { GeistSans } from 'geist/font/sans'

import "./globals.css"
import { ThemeProvider } from "@/src/components/theme-provider"
import { GridOverlay } from "@/src/components/(layout)/grid-overlay";


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
