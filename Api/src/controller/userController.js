import { alterarSenha, cadastrarUsuario, exibirFavorito, inserirFavorito, loginUsuario, verificarCpf, verificarEmail,  VisualizarInfoLogin, VisualizarInfoUser } from '../repository/userRepository.js'
import { Router } from "express";
import multer from 'multer';
import { buscarGeneroPorId } from '../repository/generoRepository.js';
import { buscarJogoPorId } from '../repository/adminRepository.js';

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
            msg: 'Usuario Cadastrado'
        })
    } catch (err) {

        resp.status(401).send({
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

        const r = await inserirFavorito(id, idJogo)

        resp.send(r)
    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})


// server.get('/favorito/exibir/:id', async (req, resp)=>{
//     try {
//         const { id } = req.params
//         const r = await exibirFavorito(id);


//         for (idJogo of r.idJogos){
//             const resposta = await buscarJogoPorId(idJogo)
//         }
//         resp.send(r)
//     } catch (err) {
//         resp.send({
//             erro: err.message
//         })
//     }
// })


server.put('/alterar/senha/:id', async(req, resp)=>{
    try {
    
        const { senha } = req.body
        const { id } = req.params
        console.log(id , senha)
        const r = await alterarSenha( senha, id)
        
        resp.send(r)
    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})


// server.post('/verificar/senha/:id', async( req, resp)=>{
//     try {
//         const { id } = req.params
//         const { senha } = req.body

//         const r = await verificarSenha(id, senha)
//         if(!r){
//             throw new Error('Senha invalida ')
//         }
//         resp.status(204).send(r)
//     } catch (err) {
//         resp.status(401).send({
//             erro: err.message
//         })
//     }
// })



export default server;