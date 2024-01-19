import { useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";

export const useContato = () => {
    const router = useRouter();
    const URL = "https://localhost:7092/api/Contato"
    const [contato, setContato] = useState({ id: 0, nome: "", descricao: "", usuarioId: "" });
    const [contatos, setContatos] = useState([]);

    const handleInputChange = (e) => {
        setContato({ ...contato, [e.target.name]: e.target.value });
    };

    const listarContatos = () => {
            axios
                .get(URL)
                .then((response) => {
                    setContatos(response.data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar a lista de contatos: ", error);
                });
        };

    const criarContato = () => {
        axios
            .post(URL, contato)
            .then((response) => {
                router.push("/contato");
            })
            .catch((error) => {
                alert("Erro ao inserir contato: " + error);
            });
    }

    const buscarContato = (codigo) => {
        axios
            .get(`${URL}/${codigo}`)
            .then((response) => {
                setContato(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do contato: ", error);
            });
    }

    const atualizarContato = () => {
        axios
            .put(`${URL}/${contato.id}`, contato)
            .then((response) => {
                router.push('/contato');

            })
            .catch((error) => {
                console.error("Erro ao atualizar contato: ", error);
            });
    };

    const deleteContato = (codigo) => {
        axios
          .delete(`${URL}/${codigo}`)
          .then(() => {
            listarContatos()
          })
          .catch((error) => {
            alert("Erro ao excluir contato: " + error);
          });
      };

    return {
        contato,
        contatos,
        handleInputChange,
        listarContatos,
        criarContato,
        buscarContato,
        atualizarContato,
        deleteContato
    }
}
