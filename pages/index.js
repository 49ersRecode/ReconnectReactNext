import Carousel from '@/components/Carousel'
import FormServico from '@/components/servico/FormServico'
import Profissional from '@/components/servico/Profissional'
import Servico from '@/components/servico/Servico'
import Head from 'next/head'
// import '@/styles/carousel.css'


export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
        <link rel="stylesheet" href="src/styles/style.css" />
        <link rel="stylesheet" href="src/styles/mediaquery.css" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      <title>Reconnect - Home</title>
      </Head>
      
      <Carousel/>
      <main>
        <FormServico/>
        <Servico/>
        <Profissional/>
      </main>
    </>
  )
}
