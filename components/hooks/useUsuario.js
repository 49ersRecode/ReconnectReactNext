import { useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";

export const useUsuario = () => {
    const router = useRouter();
    const URL = "https://localhost:7092/api/Usuario"
    const [usuario, setUsuario] = useState({ id: 0, nome: "", email: "", cpf: "", dataNascimento: "", telefone: "" });
    const [usuarios, setUsuarios] = useState([]);

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const listarUsuarios = () => {
            axios
                .get(URL)
                .then((response) => {
                    setUsuarios(response.data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar a lista de usuarios: ", error);
                });
        };

    const criarUsuario = () => {
        axios
            .post(URL, usuario)
            .then((response) => {
                router.push("/usuario");
            })
            .catch((error) => {
                alert("Erro ao inserir usuario: " + error);
            });
    }

    const buscarUsuario = (codigo) => {
        axios
            .get(`${URL}/${codigo}`)
            .then((response) => {
                setUsuario(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do usuario: ", error);
            });
    }

    const atualizarUsuario = () => {
        axios
            .put(`${URL}/${usuario.id}`, usuario)
            .then((response) => {
                router.push('/usuario');

            })
            .catch((error) => {
                console.error("Erro ao atualizar usuario: ", error);
            });
    };

    const deleteUsuario = (codigo) => {
        axios
          .delete(`${URL}/${codigo}`)
          .then(() => {
            listarUsuarios()
          })
          .catch((error) => {
            alert("Erro ao excluir usuario: " + error);
          });
      };

    return {
        usuario,
        usuarios,
        handleInputChange,
        listarUsuarios,
        criarUsuario,
        buscarUsuario,
        atualizarUsuario,
        deleteUsuario
    }
}
