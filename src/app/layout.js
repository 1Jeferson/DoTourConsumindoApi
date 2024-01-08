import './globals.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header'
import Footer from './components/Footer'



export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Do Tour</title>
        <link rel="icon" href="/img/DT LOGO.png" />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
