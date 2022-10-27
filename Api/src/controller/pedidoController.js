import { Router } from "express";
import { cadastrarEndereco, cadastrarPedido } from "../repository/pedidoRepository.js";
import { criarNovoPedido } from "../services/pedido.js";


const server = Router();


server.post('/:idUsuario', async (req, resp) => {
    try {

        const {idUsuario} = req.params
        const info = req.body
        
        const novoPedido = criarNovoPedido(idUsuario, info)
    
        const idPedidoCriado = await cadastrarPedido(novoPedido);
            await cadastrarEndereco(novoPedido)
        
        
        resp.send(idPedidoCriado)
        
    } catch (err) {
        console.log(err)
        resp.status(401).send({
            erro: err.message
        })
    }



  
})











export default server