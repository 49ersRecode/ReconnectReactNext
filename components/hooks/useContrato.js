import { useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";

export const useContrato = () => {
    const router = useRouter();
    const URL = "https://localhost:7092/api/Contrato"
    const [contrato, setContrato] = useState({ id: 0, endereco: "", dataHora: "", usuarioId:"", servicoId: "" });
    const [contratos, setContratos] = useState([]);

    const handleInputChange = (e) => {
        setContrato({ ...contrato, [e.target.name]: e.target.value });
    };

    const listarContratos = () => {
            axios
                .get(URL)
                .then((response) => {
                    setContratos(response.data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar a lista de contratos: ", error);
                });
        };

    const criarContrato = () => {
        axios
            .post(URL, contrato)
            .then((response) => {
                router.push("/contrato");
            })
            .catch((error) => {
                alert("Erro ao inserir contrato: " + error);
            });
    }

    const buscarContrato = (codigo) => {
        axios
            .get(`${URL}/${codigo}`)
            .then((response) => {
                setContrato(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do contrato: ", error);
            });
    }

    const atualizarContrato = () => {
        axios
            .put(`${URL}/${contrato.id}`, contrato)
            .then((response) => {
                router.push('/contrato');

            })
            .catch((error) => {
                console.error("Erro ao atualizar contrato: ", error);
            });
    };

    const deleteContrato = (codigo) => {
        axios
          .delete(`${URL}/${codigo}`)
          .then(() => {
            listarContratos()
          })
          .catch((error) => {
            alert("Erro ao excluir contrato: " + error);
          });
      };

    return {
        contrato,
        contratos,
        handleInputChange,
        listarContratos,
        criarContrato,
        buscarContrato,
        atualizarContrato,
        deleteContrato
    }
}
