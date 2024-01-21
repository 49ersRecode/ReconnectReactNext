import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUsuario } from '@/hooks'
import Head from 'next/head'
import Link from 'next/link'

const Perfil = () => {

    const { usuario, buscarUsuario } = useUsuario()

    const router = useRouter();
    const { codigo } = router.query;

    useEffect(() => {
        buscarUsuario(codigo)
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
                <link rel="stylesheet" href="src/styles/style.css" />
                <link rel="stylesheet" href="src/styles/mediaquery.css" />
                
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

                <script src="https://unpkg.com/@phosphor-icons/web"></script>
                <title>Reconnect - Perfil de {usuario.nome}</title>


            </Head>
            {/* Capa perfil começa aqui */}
            <section className="perfil-usuario">
                <div className="container-perfil">
                    <div className="capa-perfil">
                        <div className="container-capa">
                            <img className="img-capa" src="../images/reconnect-capa1.jpg" alt="img" />
                        </div>
                        <div className="sombra" />
                        <div className="avatar-perfil">
                            <img className="perfil-usuario-img" src={usuario.foto} alt="img" />
                            <a href="" className="trocar-foto">
                                <i className="fas fa-camera" />
                                <span>Trocar foto</span>
                            </a>
                        </div>
                        <div className="dados-perfil">
                            <h4 className="titulo-usuario">{usuario.nome}</h4>
                            <ul
                                style={{ textShadow: "1px 1px 10px black" }}
                                className="lista-perfil"
                            >
                                <li>35 Seguidores</li>
                                <li>7 Seguindo</li>
                                <li>32 Publicações</li>
                            </ul>
                        </div>
                        <div className="opcoes-perfil">
                            <a href="">
                                <i className="fas fa-wrench" />
                            </a>
                        </div>
                    </div>
                    <div className="menu-perfil">
                        <ul>
                            <li>
                                <a href="#publicacoes" title="">
                                    <i className="icone-perfil fas fa-bullhorn" /> Publicações
                                </a>
                            </li>
                            <li>
                                <a
                                    href=''
                                    title=""
                                >
                                    <i className="icone-perfil fas fa-info-circle" /> Contato
                                </a>
                            </li>
                            <li>
                                <a
                                    href=''
                                    title=""
                                >
                                    <i className="icone-perfil fas fa-grin" /> Contratar
                                </a>
                            </li>
                            <li>
                                <a href="#comentarios" title="">
                                    <i className="icone-perfil fas fa-camera" /> Avaliações
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>{" "}
            {/* fim Capa perfil */}

            {/*	Feed perfil*/}
            <div className="container">
                <div
                    className="container-perfil"
                    style={{ margin: "auto" }}
                    id="publicacoes"
                >
                    <h5>Sobre mim</h5>
                    <p>
                        Profissão:{" "}
                        <span>
                            {usuario.profissao}
                        </span>
                    </p>
                    <p style={{ marginLeft: 20 }} className="bio-usuario">  {usuario.bio}
                    </p>
                    <p>Faço serviços! Me mande mensagem e vamos fechar contrato!</p>
                    <img
                        className="img-capa"
                        src="../images/reconnect-capa.jpg"
                        alt="img-capa"
                        style={{ borderRadius: 0 }}
                    />
                    <p className="mt-2">
                        Clique no botão 'Contratar' aí em cima ☝️ e me chame pra te ajudar com
                        os meus serviços!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore earum
                        harum et quis, dolorum, nobis vero alias sit cumque, quos aliquid
                        facilis ipsum? Repudiandae maiores corporis accusantium corrupti
                        assumenda quam.
                    </p>
                </div>
                {/* Comentários */}
                <section className="container-perfil card p-4 mb-3" id="comentarios">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>
                            Comentários sobre{" "}
                            <strong>
                                {usuario.nome}
                            </strong>
                        </h4>
                        <div className="stars">
                            <i className="star bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4 mb-3">
                        <div className="col">
                            <div className="card" style={{ minHeight: 200 }}>
                                <div className="card-body">
                                    <h5 className="card-title">Usuário</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Ótimo serviço!
                                    </h6>
                                    <p className="card-text">
                                        Profissional dedicado! Chegou no horário e cumpriu o prometido.
                                        Com certeza irei contratar mais vezes!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ minHeight: 200 }}>
                                <div className="card-body">
                                    <h5 className="card-title">Usuário</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Serviço maravilhoso!
                                    </h6>
                                    <p className="card-text">
                                        Caramba! Eu não imaginava o quanto esse aplicativo de serviços
                                        iria me ajudar a encontrar um serviço tão incrível como o seu.
                                        Obrigado, Reconnect.. por me ajudar a achar esse serviço
                                        diferenciado!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Fim Comentários */}
            </div>
            {/*	Fim Feed perfil*/}
        </>


    )
}

export default Perfil