import { API_URL } from "./config";
import axios from "axios";

const api = axios.create({
    baseURL: API_URL
})


export async function inserirJogo(nome, valor, descricao, estoque, imagem, requisitos, disponivel, destaque, generos, plataformas) {
    const r = api.post('/jogo', {nome, valor, descricao, estoque, imagem, requisitos, disponivel, destaque, generos, plataformas})
    return r.data
}


export async function enviarImagemJogo(id, imagem){

    const formData = new FormData();
    formData.append('capa', imagem);

    const resposta = await api.put(`/jogo/${id}/capa`, formData,{
        headers: {
            "Content-type": "multipart/form-data" 
        }
    });

    return resposta.status;
}