import { API_URL } from "./config";
import axios from "axios";

const api = axios.create({
    baseURL: API_URL
})


export async function inserirJogo(nome, valor, descricao, estoque, requisitos, disponivel, maisvendido, generos, plataformas) {
    const r = await api.post('/jogo', {nome, valor, descricao, estoque, requisitos, disponivel, maisvendido, generos, plataformas})
    return r.data
}


export async function alterarJogo(id, nome, valor, descricao, estoque, requisitos, disponivel, maisvendido, generos, plataformas) {
     await api.put(`/admin/cadastro/${id}`, { nome, valor, descricao, estoque, requisitos, disponivel, maisvendido, generos, plataformas})
}

export async function enviarImagemJogo(id, imagem){

    const formData = new FormData();
    formData.append('capa', imagem);

    const resposta = await api.put(`/jogo/${id}/capa`, formData,{
        headers: {
            "Content-type": "multipart/form-data" 
        },
    });

    return resposta.status;
}

export function buscarImg(imagem) {

    return `${api.getUri()}/${imagem}`
}