import './globals.css'

export const metadata = {
  title: 'Sales Dashboard',
  description: 'Sales Dashboard with charts and analytics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

