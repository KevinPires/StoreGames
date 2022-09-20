import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function  listarGenero(){
    const r = await api.get('/jogo/genero');
    return r.data;
}