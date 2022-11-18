import { alterarInfo, alterarSenha, cadastrarUsuario, exibirFavorito, inserirFavorito, loginUsuario, removerFavorito, statusPedido, verificarCpf, verificarEmail, verificarFavorito, VisualizarInfoLogin, VisualizarInfoUser } from '../repository/userRepository.js'
import { Router } from "express";
import multer from 'multer';
import { buscarGeneroPorId, buscarGeneroProduto } from '../repository/generoRepository.js';
import { buscarJogoPorId } from '../repository/adminRepository.js';
import { buscarPlataformaProduto } from '../repository/plataformaRepository.js';

const server = Router();


server.post('/cadastro', async (req, resp) => {
    try {
        const usuario = req.body;

        let temError = false;
        let erros = [];

        if (!usuario.email) {
            erros.push({
                Erro: "Email não pode estar vazio"
            })
            temError = true
        }
        if (await verificarEmail(usuario.email) >= 1) {
            erros.push({
                Erro: "Email ja esta sendo utilizado"
            })
            temError = true
        }
        if (!usuario.senha) {
            erros.push({
                Erro: "Senha obrigatoria"
            })
            temError = true
        }
        if (!usuario.nome) {
            erros.push({
                Erro: " Nome obrigatorio "
            })
            temError = true
        }
        if (!usuario.cpf) {
            erros.push({
                Erro: " Campo de cpf é obrigatorio "
            })
            temError = true
        }
        if (await verificarCpf(usuario.cpf) >= 1) {
            erros.push({
                Erro: " Cpf já cadastrado "
            })
            temError = true
        }
        if (!usuario.nascimento) {
            erros.push({
                Erro: "Data de nascimento Obrigatorio"
            })
            temError = true
        }
        if (temError) {
            return resp.status(401).send({ erro: erros })
        }
        const resposta = await cadastrarUsuario(usuario);

        resp.status(200).send({
            idInserido: resposta,
            usuario,
            msg: 'Usuario Cadastrado'
        })
    } catch (err) {

        resp.status(404).send({
            erro: err.message
        })
    }
})


server.post('/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await loginUsuario(email, senha)

        if (!resposta) {
            throw new Error("Credenciais invalidas")
        }
        resp.send(resposta)

    } catch (err) {
        console.log(err)
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/:id', async (req, resp) => {
    try {
        const { id } = req.params

        if (!id)
            throw new Error("Obrigatorio passar o id do user")

        const chamadaApi = await VisualizarInfoUser(id)
        const infoUserLogin = await VisualizarInfoLogin(id)
        resp.send({

            info: chamadaApi,
            infoLogin: infoUserLogin

        })

    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/favorito/adicionar', async (req, resp) => {
    try {
        const { id } = req.body;
        const { idJogo } = req.body;
        console.log(id, idJogo)

        let resposta = null;

        if( await verificarFavorito(id,idJogo) >= 1){
            const r = await removerFavorito(id,idJogo)
            resposta = r
        }else{
            const r = await inserirFavorito(id, idJogo)
            resposta = r
        }
        
        resp.status(200).send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.delete('/remover/favorito', async (req,resp)=>{
    try {
        const { id } = req.body;
        const { idJogo } = req.body;
        
        const r = await removerFavorito(id, idJogo)
        if(!r){
            throw new Error('jogo ja removido')
        }
        resp.status(204).send()
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/verificar/favorito', async (req,resp) =>{
    try {
        const { id } = req.body;
        const { idJogo } = req.body;
        let resposta = false

        const r = await verificarFavorito(id,idJogo)
        if(!r){
            resposta = false
        }else{
            resposta = true
        }

        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/favorito/exibir/:id', async (req, resp) => {
    try {
        const { id } = req.params
        const r = await exibirFavorito(id);
        let jogos = []
        
        for(let item of r){
            const x =  await buscarJogoPorId(item.id_jogo)
            const plat = await buscarPlataformaProduto(item.id_jogo)
            const gen = await buscarGeneroProduto(item.id_jogo)
            
            jogos.push({
                info: x,
                generos: gen,
                plataformas: plat
            })
        }

        resp.send(jogos)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.put('/alterar/senha/:id', async (req, resp) => {
    try {

        const { senha } = req.body
        const { id } = req.params
        console.log(id, senha)
        const r = await alterarSenha(senha, id)

        resp.send(r)
    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})


server.put('/alterar/informacoes/:id', async (req, resp) => {
    try {
        const { id } = req.params
        const { usuario, cep } = req.body

        const r = await alterarInfo(id, usuario, cep)

        resp.status(204).send()
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/pedido/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const resposta = await statusPedido(id);
        if (!resposta)
            resp.status(400).send([])
        else
            resp.send(resposta);
    } catch (err) {
        console.log(err.message)
        resp.status(400).send({
            erro: err.message
        })        
    }
})


export default server;