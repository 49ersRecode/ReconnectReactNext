import { useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";

export const useServico = () => {
    const router = useRouter();
    const URL = "https://localhost:7092/api/Servico"
    const [servico, setServico] = useState({ id: 0, nome: "", descricao: "", usuarioId: "" });
    const [servicos, setServicos] = useState([]);

    const handleInputChange = (e) => {
        setServico({ ...servico, [e.target.name]: e.target.value });
    };

    const listarServicos = () => {
            axios
                .get(URL)
                .then((response) => {
                    setServicos(response.data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar a lista de servicos: ", error);
                });
        };

    const criarServico = () => {
        axios
            .post(URL, servico)
            .then((response) => {
                router.push("/servico");
            })
            .catch((error) => {
                alert("Erro ao inserir servico: " + error);
            });
    }

    const buscarServico = (codigo) => {
        axios
            .get(`${URL}/${codigo}`)
            .then((response) => {
                setServico(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do servico: ", error);
            });
    }

    const atualizarServico = () => {
        axios
            .put(`${URL}/${servico.id}`, servico)
            .then((response) => {
                router.push('/servico');

            })
            .catch((error) => {
                console.error("Erro ao atualizar servico: ", error);
            });
    };

    const deleteServico = (codigo) => {
        axios
          .delete(`${URL}/${codigo}`)
          .then(() => {
            listarServicos()
          })
          .catch((error) => {
            alert("Erro ao excluir servico: " + error);
          });
      };

    return {
        servico,
        servicos,
        handleInputChange,
        listarServicos,
        criarServico,
        buscarServico,
        atualizarServico,
        deleteServico
    }
}
