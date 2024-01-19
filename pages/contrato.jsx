import Head from 'next/head'
import Link from 'next/link';
import { useContrato } from '@/hooks/useContrato';
import { useEffect } from 'react';
import moment from 'moment';

const Contrato = () => {

  const { contratos, listarContratos, deleteContrato } = useContrato();

  useEffect(() => {
    listarContratos()
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />

        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>Destino Certo - Contratos</title>
      </Head>

      <main className="container mb-2 mt-2">

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5
          }}
        >
          <i style={{ fontSize: 30 }} className="bi bi-file-earmark-text" />
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <h1>Lista de Contratos</h1>
            <Link href="/add-client" className="btn btn-primary">
              Cadastrar
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 overflow-x-auto">

            <table className="table container tabela">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Endereço</th>
                  <th>Data/Hora</th>
                  <th>UserId</th>
                  <th>ServiçoId</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {contratos.map(({ id, endereco, dataHora, usuarioId, servicoId }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{endereco}</td>
                    <td>{moment(dataHora).format('DD/MM/yyyy')}</td>
                    <td>{usuarioId}</td>
                    <td>{servicoId}</td>

                    <td>
                      <Link href={`/update-client/${id}`} className="btn btn-primary btn-edit m-1">Editar</Link>
                      <button onClick={() => deleteContrato(id)} className="btn btn-danger btn-edit m-1">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </>
  );
};

export default Contrato;