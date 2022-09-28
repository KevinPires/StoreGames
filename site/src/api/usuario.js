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