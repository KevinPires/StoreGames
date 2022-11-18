import { Router } from "express";
import { buscarJogoPorId } from "../repository/adminRepository.js";
import { cadastrarEndereco, cadastrarPedido, cadastrarPix, inserirJogoPedido, pedidosConcluidos, pedidosUsuario, pesquisarPedidoNome } from "../repository/pedidoRepository.js";
import { criarNovoPedido } from "../services/pedido.js";
import { ValidarCarrinho } from "../services/validacaoCarrinho.js";


const server = Router();


server.post('/:idUsuario', async (req, resp) => {
    try {

        const {idUsuario} = req.params
        const info = req.body
        
        const validacao = await ValidarCarrinho(info)

        const novoPedido = criarNovoPedido(idUsuario, info)
    
        const idPedidoCriado = await cadastrarPedido(novoPedido);
            await cadastrarEndereco(idPedidoCriado, info.endereco)
            await cadastrarPix(idPedidoCriado, info.cartao)

        for (const item of info.jogos) {
            const prod = await buscarJogoPorId(item.id)
            await inserirJogoPedido(idPedidoCriado, prod.id, item.qtd, prod.valor);
        }
            
        
        resp.status(200).send()
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



// PEDIDOS DO USUARIO 

server.get('/usuario/:id', async(req,resp) =>{
    try {
        const { id } = req.params

        const r = await pedidosUsuario(id)
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/usuario/concluido/:id', async(req,resp) =>{
    try {
        const { id } = req.params

        const r = await pedidosConcluidos(id)
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/nome', async (req, resp) => {
    try {

        const { nome } = req.query

        const InserirNome = await pesquisarPedidoNome(nome)

        resp.send(InserirNome)

    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})






export default server