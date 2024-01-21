import { useEffect, useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import { useUsuario } from './useUsuario';

export const useServico = () => {
    const {usuarios, listarUsuarios} = useUsuario()

    const router = useRouter();
    const URL = "https://localhost:7092/api/Servico"

    const [usuario, setUsuario] = useState({id: {...usuarios[0]}.id});

    const [servico, setServico] = useState({ id: 0, usuario: {...usuario}, nome: "", descricao: "" });
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        listarUsuarios()
    }, [])

    useEffect(() => {
        servico.usuario = usuarios[0]
    }, [usuarios])

    useEffect(() => {
        servico.usuario = usuario
    }, [usuario])

    const handleInputChange = (e) => {
        setServico({ ...servico, [e.target.name]: e.target.value });
    };

    const handleInputChangeUsuario = (e) => {
        setUsuario({id: Number.parseInt(e.target.value)})
    }

    const listarServicos = () => {
            axios
                .get(URL)
                .then((response) => {
                    setServicos(response.data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar a lista de serviços: ", error);
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
        usuario,
        handleInputChangeUsuario,
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
