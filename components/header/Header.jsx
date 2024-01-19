import React from 'react'
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img src="images/reconnect-header.png" alt="Imagem da Logo Reconnect" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    href="/"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-house"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>

                        </ul>

                        <hr className="group-divider" />
                        <div className="dropdown ms-2">
                            <button
                                className="btn btn-outline-light btn-fundo dropdown-toggle "
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Admin
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" >
                                <li>
                                    <Link className="dropdown-item dropdown-link" href="/usuarios">
                                        Usuários
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item dropdown-link" href="/servico">
                                        Serviços
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item dropdown-link" href="/contrato">
                                        Contratos
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item dropdown-link" href="/contato">
                                        Contato
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item dropdown-link" href="/faleConosco">
                                        Fale Conosco
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}
