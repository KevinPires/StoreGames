import { API_URL } from './config';

import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})

export async function inserirNovoPedido(idUsuario, novoPedido){
    const r = await api.post('/pedido/' + idUsuario, novoPedido );
    return r.data;
}

export async function alterarStatus(status, id){
    const r = await api.put('/admin/status', {
        status: status,
        id: id
    });

    return r.data;
}

export async function visualizarPedidos(){
    const r = await api.get('admin/pedidos');
    return r.data;
}

// Visualizar pedidos parte usuario 

export async function pedidosUsuario(id){
    const r = await api.get(`/pedido/usuario/${id}`)
    return r.data
}

export async function pedidosUsuarioConcluidos(id){
    const r = await api.get(`/pedido/usuario/concluido/${id}`)
    return r.data
}

export async function pesquisarPedidoNome(nome){
    const r = await api.get(`/pedido/nome?nome=${nome}`)
    return r.data
}







