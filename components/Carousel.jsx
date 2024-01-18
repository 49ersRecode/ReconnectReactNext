import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="images/capa-cadastro.jpg"
                        className="d-block w-100"
                        alt="Imagem de uma moça pesquisando no celular."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Conectando pessoas!</h5>
                        <p>Economize muito com os serviços mais perto de você.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="images/capa04.jpg"
                        className="d-block w-100"
                        alt="Imagem de várias mãos se tocando. Simbolizando a união e conexão entre as pessoas."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Ache o serviço que você precisa hoje.</h5>
                        <p>
                            Conecte-se com profissionais avaliados por clientes, permitindo você
                            negociar apenas com os melhores.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="images/capa00.jpg"
                        className="d-block w-100"
                        alt="Imagem de duas pessoas cozinhando."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Se cadastre e comece a pegar serviços, ajude a comunidade.</h5>
                        <p>Publique seus trabalhos e habilidades no seu Feed!</p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
