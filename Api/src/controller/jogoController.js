import { cadastroJogo, inserirGeneroJogo, inserirPlataformaJogo, alterarImagem, listarTodosJogos, buscarPorNome } from "../repository/jogoRepository.js";
import { response, Router } from "express";
import multer from "multer";
import { buscarGeneroPorId } from "../repository/generoRepository.js";
import { buscarPlataformaporID } from "../repository/plataformaRepository.js";


const server = Router()
const upload = multer({dest: 'storage/capasJogos' })
server.post('/jogo', async (req,resp) => {
    try{

        const infoJogo = req.body
        const jogoID = await cadastroJogo(infoJogo)


        if(!infoJogo) {
            resp.status(400).send('Insira Informações!')
        }

        for (const idGenero of infoJogo.generos) {
            const cat = await buscarGeneroPorId(idGenero);

            if (cat != undefined)
            await inserirGeneroJogo(jogoID, idGenero)
        }

        for (const idPlataforma of infoJogo.plataformas) {
            const pla = await buscarPlataformaporID(idPlataforma)

            if(pla != undefined) 
            await inserirPlataformaJogo(jogoID, idPlataforma)
        }

        resp.status(200).send(jogoID.toString());
    } catch (err) {
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })

    }


})

server.put('/jogo/:id/capa', upload.single('capa'), async (req, resp) => {
    try {
        if (!req.file)
            throw new Error('Escolha a capa do filme.'); 
        const { id } = req.params;
        const imagem = req.file.path;

        console.log(id)
        console.log(imagem)

        const resposta = await alterarImagem(imagem, id)
        if (resposta != 1 )
                throw new Error('A imagem não foi salva.') 

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/jogo/consultar', async (req, resp) => {
    try {
        const resposta = await listarTodosJogos();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/jogo/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscarPorNome(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;