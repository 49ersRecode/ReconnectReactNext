import React from 'react'

export default function Footer() {
    return (
        <footer>
            <img
                src="images/reconnect-footer.png"
                alt="Imagem da Logo da Reconnect"
            />
            <div className="compra-segura">
                <strong>SERVIÇOS</strong>
                <a href="profissionais.html">Profissionais</a>
                <a href="servicos.html">Moda e Beleza</a>
                <a href="servicos.html">Serviços Domésticos</a>
            </div>
            <div className="contato">
                <strong>CONTATO</strong>
                <span>
                    <i className="ph ph-phone" /> 85 3232-3232
                </span>
                <span>
                    <i className="ph ph-at" />
                    contato@reconnect.com
                </span>
                <span>
                    <i className="ph ph-map-pin" /> Rua Servidor Público, s/n
                </span>
            </div>
            <div className="redes-sociais">
                <strong>REDES SOCIAIS</strong>
                <div>
                    <span>
                        <a href="https://github.com/PatsFerrer/49ers" target="_blank">
                            <i className="ph ph-instagram-logo" />
                        </a>
                    </span>
                    <span>
                        <a href="https://github.com/PatsFerrer/49ers" target="_blank">
                            <i className="ph ph-twitter-logo" />
                        </a>
                    </span>
                    <span>
                        <a href="https://github.com/PatsFerrer/49ers" target="_blank">
                            <i className="ph ph-github-logo" />
                        </a>
                    </span>
                </div>
            </div>
        </footer>

    )
}
