import './globals.css'

export const metadata = {
  title: 'Messenger',
  description: 'Messenger app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
