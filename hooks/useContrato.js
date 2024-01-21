import { useEffect, useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import { useServico } from './useServico';
import { useUsuario } from './useUsuario';

export const useContrato = () => {

    const {usuarios, listarUsuarios} = useUsuario()
    const {servicos, listarServicos} = useServico()

    const URL = "https://localhost:7092/api/Contrato"
    const router = useRouter();

    const [usuario, setUsuario] = useState({id: {...usuarios[0]}.id});
    const [servico, setServico] = useState({id: {...servicos[0]}.id});

    const [contrato, setContrato] = useState({ id: 0, usuario: {...usuario}, servico: {...servico}, endereco: "", dataHora: "" });

    const [contratos, setContratos] = useState([]);

    useEffect(() => {
        listarUsuarios()
        listarServicos()
    }, [])

    useEffect(() => {
        contrato.usuario = usuarios[0]
        contrato.servico = servicos[0]
    }, [usuarios, servicos])

    useEffect(() => {
        contrato.usuario = usuario
        contrato.servico = servico
    }, [usuario, servico])

    const handleInputChange = (e) => {
        setContrato({ ...contrato, [e.target.name]: e.target.value });
    };

    const handleInputChangeUsuario = (e) => {
        setUsuario({id: Number.parseInt(e.target.value)})
    }

    const handleInputChangeServico = (e) => {
        setServico({id: Number.parseInt(e.target.value)})
    }

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
        usuario,
        handleInputChangeUsuario,
        servico,
        handleInputChangeServico,

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
