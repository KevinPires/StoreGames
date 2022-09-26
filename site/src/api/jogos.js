import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})


export async  function  listarTodosJogos(){
    const reposta = await api.get('/jogo/consultar');
    return reposta.data;
}

export async function  listarTodosJogosPorNome(nome){
    const reposta = await api.get(`/jogo/busca?nome=${nome}`);
    return reposta.data;
}