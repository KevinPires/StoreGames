import { Router } from "express";
import { cadastrarEndereco, cadastrarPedido, cadastrarPix } from "../repository/pedidoRepository.js";
import { criarNovoPedido } from "../services/pedido.js";


const server = Router();


server.post('/:idUsuario', async (req, resp) => {
    try {

        const {idUsuario} = req.params
        const info = req.body
        
        const novoPedido = criarNovoPedido(idUsuario, info)
    
        const idPedidoCriado = await cadastrarPedido(novoPedido);
            await cadastrarEndereco(idPedidoCriado, info.endereco)
            await cadastrarPix(idPedidoCriado, info.cartao)
            
        
        resp.status(200).send()
        
    } catch (err) {
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }



  
})











export default server