export const metadata = {
  title: 'Tool Hire',
  description: '',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <nav>
  <ul>
    <li><a href = "dashboard">All products</a></li>
    <li><a href = "/">Login</a></li>
    <li><a href = "cart">Basket</a></li>
  </ul>
</nav>

      {children}</body>
    </html>
  )
}