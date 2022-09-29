import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function  listarPlataforma(){
    const r = await api.get('/plataforma/consultar');
    return r.data;
}
