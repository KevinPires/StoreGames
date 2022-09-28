import { API_URL } from "./config";

import axios from "axios";

const api =axios.create({
    baseURL: API_URL
});

export async function loginUsuario(email, senha){
    const r = await api.post('/login/usuario',{
        email : email,
        senha : senha
    });
    return r.data
}

export async function cadastrarUsuario(nome, email, senha, cep, nascimento, cpf){
    const r = await api.post('/cadastro/usuario',{
        nome : nome,
        email : email,
        senha : senha,
        cep : cep,
        nascimento : nascimento,
        cpf : cpf

    })
    return r.data
}