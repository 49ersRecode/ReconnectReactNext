import Carousel from '@/components/Carousel'
import CardProfissional from '@/components/profissional/CardProfissional'
import FormServico from '@/components/servico/FormServico'
import Servico from '@/components/servico/Servico'
import axios from "axios";
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7092/api/Usuario")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Usuários: ", error);
      });
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="src/styles/style.css" />
        <link rel="stylesheet" href="src/styles/mediaquery.css" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>Reconnect - Home</title>
      </Head>

      <Carousel />

      <main>
        <FormServico />
        <Servico />
        <section className="sessao-profissionais container mb-3">
          {usuarios.map((usuario, i) => (

            <CardProfissional key={i} usuario={usuario} />

          ))}
        </section>
      </main >
    </>
  )
}
