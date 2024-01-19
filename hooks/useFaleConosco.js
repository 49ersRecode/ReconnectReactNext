import { useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";

export const useFaleConosco = () => {
    const router = useRouter();
    const URL = "https://localhost:7092/api/FaleConosco"
    const [mensagem, setMensagem] = useState({ id: 0, nome: "", descricao: "", usuarioId: "" });
    const [mensagens, setMensagens] = useState([]);

    const handleInputChange = (e) => {
        setMensagem({ ...mensagem, [e.target.name]: e.target.value });
    };

    const listarMensagens = () => {
            axios
                .get(URL)
                .then((response) => {
                    setMensagens(response.data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar a lista de mensagens: ", error);
                });
        };

    const criarMensagem = () => {
        axios
            .post(URL, mensagem)
            .then((response) => {
                router.push("/faleConosco");
            })
            .catch((error) => {
                alert("Erro ao inserir mensagem: " + error);
            });
    }

    const buscarMensagem = (codigo) => {
        axios
            .get(`${URL}/${codigo}`)
            .then((response) => {
                setMensagem(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do mensagem: ", error);
            });
    }

    const atualizarMensagem = () => {
        axios
            .put(`${URL}/${mensagem.id}`, mensagem)
            .then((response) => {
                router.push('/faleConosco');

            })
            .catch((error) => {
                console.error("Erro ao atualizar mensagem: ", error);
            });
    };

    const deleteMensagem = (codigo) => {
        axios
          .delete(`${URL}/${codigo}`)
          .then(() => {
            listarMensagens()
          })
          .catch((error) => {
            alert("Erro ao excluir mensagem: " + error);
          });
      };

    return {
        mensagem,
        mensagens,
        handleInputChange,
        listarMensagens,
        criarMensagem,
        buscarMensagem,
        atualizarMensagem,
        deleteMensagem
    }
}
