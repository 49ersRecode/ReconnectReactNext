import React from 'react'

export default function FormServico() {
    return (
        <section className="container my-4">
            <h1 className="display-4 font-weight-normal text-center">
                Busque os serviços!
            </h1>
            <form>
                <div className="mb-3 botao-pesquisa">
                    <input type="text" className="form-control" id="exampleInputEmail1" />
                    <a href="servicos.html" className="btn btn-primary">
                        <i className="bi bi-search" />
                    </a>
                </div>
            </form>
        </section>

    )
}
