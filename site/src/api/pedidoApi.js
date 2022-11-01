import { API_URL } from './config';

import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})

export async function inserirNovoPedido(idUsuario, novoPedido){
    const r = await api.post('/pedido/' + idUsuario, novoPedido );
    return r.data;
}

export async function alterarStatus(idPedido, info){
    const r = await api.put('/admin/status', {
        idPedido: idPedido,
        info : info
    });
    return r.data;

}

export async function visualizarPedidos(){
    const r = await api.get('admin/pedidos');
    return r.data;
}


