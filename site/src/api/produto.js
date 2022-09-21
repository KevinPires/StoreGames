import { API_URL } from "./config";
import axios from "axios";

const api = axios.create({
    baseURL: API_URL
})


export async function inserirJogo(nome, valor, descricao, estoque, imagem, requisitos, disponivel, destaque, generos, plataformas) {
    const r = api.post('/jogo', {nome, valor, descricao, estoque, imagem, requisitos, disponivel, destaque, generos, plataformas})
    return r.data
}

