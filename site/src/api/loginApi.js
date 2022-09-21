import { API_URL } from './config';

import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})

export async function login(logar, senha){
    const r = await api.post('/admin/login', {
        logar: logar,
        senha: senha
    });
    return r.data;

}

