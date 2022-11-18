import { API_URL } from "./config";

import axios from "axios";


const api =axios.create({
    baseURL: API_URL
});

export async function loginUsuario(email, senha){
    const r = await api.post('/user/login',{
        email : email,
        senha : senha
    });
    return r.data
}

export async function cadastrarUsuario(nome, email, senha, cep, nascimento, cpf){
    const r = await api.post('/user/cadastro',{
        nome : nome,
        email : email,
        senha : senha,
        cep : cep,
        nascimento : nascimento,
        cpf : cpf

    })
    return r.data
}

export async function carregarUsuario(id) {
    const r = await api.get(`/user/${id}`)
    return r.data
}


export async function adicionarFavorito(id, idJogo){
    const r = await api.post('/user/favorito/adicionar',{
        id: id,
        idJogo: idJogo
    })

    return r.data
}

export async function verificarFavorito(id,idJogo){
    const r = await api.post('/user/verificar/favorito', {
        id: id,
        idJogo: idJogo
    })
    console.log(r)
    return r.data
}

export async function removerFavorito(id,idJogo){
    const r = await api.delete('user/remover/favorito',{
        id:id,
        idJogo: idJogo
    })

    return r.data
}

export async function exibirFavorito(id){
    const r = await api.get(`user/favorito/exibir/${id}`)
    return r.data
}


export async function alterarSenhaUsuario(id, senha){
    const r = await api.put(`/user/alterar/senha/${id}`,{
        senha: senha
    })
    return r.data
}


export async function alterarInformacoes(id,usuario,cep){
    const r = await api.put(`/user/alterar/informacoes/${id}`,{
        usuario: usuario,
        cep: cep
    })
    return r.data
}


export async function consultarStatus(id){
    const r = await api.get(`/user/pedido/${id}`)
    return r.data;
}