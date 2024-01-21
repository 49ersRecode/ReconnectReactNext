import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import '@/styles/globals.css'
import '@/styles/header.css'
import '@/styles/footer.css'
import '@/styles/carousel.css'
import '@/styles/profissional.css'
import '@/styles/mediaquery.css'
import '@/styles/perfil.css'
import '@/styles/perfilmediaquery.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
