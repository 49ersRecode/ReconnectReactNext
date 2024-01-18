import React from 'react'

export default function Servico() {
    return (
        <>
            {/* servicos */}
            <h6 className="display-6 font-weight-normal text-center">
                Principais Serviços!
            </h6>
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg col-sm-6">
                        <img
                            width={140}
                            height={140}
                            src="images/servicos/limpeza.jpg"
                            alt="imagem de uma mulher limpando a janela"
                            className="rounded-circle"
                            title="Limpeza"
                        />
                        <h2 className="fw-normal">Limpeza</h2>
                        <p>
                            <a className="btn btn-primary" href="profissionais.html">
                                Listar profissionais »
                            </a>
                        </p>
                    </div>
                    <div className="col-lg col-sm-6">
                        <img
                            width={140}
                            height={140}
                            src="images/servicos/reforma.jpg"
                            alt="imagem de um homem reformando uma casa"
                            className="rounded-circle"
                            title="Reforma"
                        />
                        <h2 className="fw-normal">Reforma</h2>
                        <p>
                            <a className="btn btn-primary" href="profissionais.html">
                                Listar profissionais »
                            </a>
                        </p>
                    </div>
                    <div className="col-lg col-sm-6">
                        <img
                            width={140}
                            height={140}
                            src=" images/servicos/professor.jpg"
                            alt="imagem de um professor escrevendo em um  quadro branco"
                            className="rounded-circle"
                            title="Ensino"
                        />
                        <h2 className="fw-normal">Ensino</h2>
                        <p>
                            <a className="btn btn-primary" href="profissionais.html">
                                Listar profissionais »
                            </a>
                        </p>
                    </div>
                    <div className="col-lg col-sm-6">
                        <img
                            width={140}
                            height={140}
                            src="images/servicos/mecanico.jpg"
                            alt="imagem de um mecânico em baixo de um carro"
                            className="rounded-circle"
                            title="Mecânico"
                        />
                        <h2 className="fw-normal">Mecânico</h2>
                        <p>
                            <a className="btn btn-primary" href="profissionais.html">
                                Listar profissionais »
                            </a>
                        </p>
                    </div>
                </div>
                <hr className="my-4" />
            </div>{" "}
            {/* servicos fim */}
        </>

    )
}
