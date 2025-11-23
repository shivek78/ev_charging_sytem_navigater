import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Add suppressHydrationWarning here */}
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
