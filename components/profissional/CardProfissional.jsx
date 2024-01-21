import React from 'react'
import Link from 'next/link';

export default function CardProfissional({usuario}) {

    const { nome, profissao, bio, foto } = usuario

    return (


        <div className="card-pessoa efeito" id="motorista">
            <div className="body-card">
                <h6 className="text-center">{profissao}</h6>
                <div className="header-card">
                    <img 
                        style={{height: 100}}
                        className="foto-perfil"
                        // fill={true}
                        objectFit='cover'
                        sizes='100%'  
                        title={nome}
                        src={foto}
                        alt={nome}
                    />
                    <div className="stars-p">
                        <div className="stars">
                            <i className="star bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                        </div>
                        <div>
                            <strong>{nome}</strong>
                        </div>
                    </div>
                </div>
                <div className="footer-card">
                    <p className="text-center">
                        {bio}
                    </p>
                    <div className="botoes-card">
                        <div className="btn-group">
                            <Link className="btn btn-primary" href={`/perfil-usuario/${usuario.id}`}>
                                Ver perfil
                            </Link>

                        </div>
                        {/* <div className="btn-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Solicitar orçamento
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>


    )
}
