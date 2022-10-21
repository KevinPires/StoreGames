import  { cadastroJogo, inserirGeneroJogo, inserirPlataformaJogo, alterarImagem, listarTodosJogos, buscarPorNome, removerGeneroJogo, removerPlataformaJogo, removerJogo, alterarJogo, filtroGeneroJogo, filtroPlataformaJogo } from "../repository/jogoRepository.js";
import { response, Router } from "express";
import multer from "multer";
import { buscarGeneroPorId, buscarGeneroProduto } from "../repository/generoRepository.js";
import { buscarPlataformaporID, buscarPlataformaProduto } from "../repository/plataformaRepository.js";
import { ValidarJogo } from "../services/validarProduto.js";
import { buscarJogoPorId } from "../repository/adminRepository.js";


const server = Router()
const upload = multer({dest: 'storage/capasJogos' })
server.post('/', async (req,resp) => {
    try{
        console.log(req.body)
        const infoJogo = req.body

            if (!infoJogo.nome)
            throw new Error('Nome do jogo é obrigatório')
           
            if (!infoJogo.valor)
            throw new Error('Valor do jogo é obrigatório')
           
            if (!infoJogo.descricao)
            throw new Error('Descrição do jogo é obrigatório')
            
            if (!infoJogo.estoque)
            throw new Error('Estoque do jogo é obrigatório')
           
            if (!infoJogo.requisitos)
            throw new Error('Requisitos do jogo é obrigatório')
            
            if (!infoJogo.generos || infoJogo.generos.length <= 0)
            throw new Error('Genero do jogo é obrigatório')
           
            if (!infoJogo.plataformas|| infoJogo.plataformas.length <= 0)
            throw new Error('Plataforma do jogo é obrigatório')
        
        
        const jogoID = await cadastroJogo(infoJogo)

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
        
        resp.status(400).send({
            erro: err.message
        })

    }

})

server.put('/:id/capa', upload.single('capa'), async (req, resp) => {
    try {
        if (!req.file)
            throw new Error('Escolha a capa do filme.'); 
            
        const { id } = req.params;
        const imagem = req.file.path;

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

server.get('/consultar', async (req, resp) => {
    try {
        const resposta = await listarTodosJogos();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/busca', async (req, resp) => {
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


server.delete('/:id', async (req, resp )=> {
    try {
        const { id } = req.params;
         await removerGeneroJogo(id);
      
         await removerPlataformaJogo(id);

         await removerJogo(id);

        return resp.status(200).send({
            msg: "Jogo deletado"
        })
    } catch (err) {
    
        return resp.status(400).send({ 
            erro: err.message
            
        })
           
    }
})



server.put('/:id' , async (req, resp) => {
    try {
        const {id} = req.params;
        const jogo = req.body;

        const resposta = await alterarJogo(id, jogo);
        if (resposta != 1)
        throw new Error ('jogo não pode ser alterado');
        else
        resp.status(204).send();

    }  catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const r = await buscarJogoPorId(id);
        const infoGenero = await buscarGeneroProduto(id)
        const infoPlataforma = await buscarPlataformaProduto(id)

        resp.send({
            info: r,
            generos: infoGenero,
            plataformas: infoPlataforma
        });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// Filtra jogo

server.get('/filtro/genero', async (req, resp) => {
    try {
        const { filtro } = req.body;
        const resposta = await filtroGeneroJogo(filtro);
        resp.status(200).send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


// filtra plataforma

server.get('/filtro/plataforma', async (req, resp )=>{
    try {
        const { filtro } = req.body;
        const resposta  = await filtroPlataformaJogo(filtro)
        resp.status(200).send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;