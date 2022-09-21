import { cadastroJogo, inserirGeneroJogo, inserirPlataformaJogo } from "../repository/jogoRepository.js";
import { response, Router } from "express";
import multer from "multer";

const server = Router()

server.post('/jogo', async (req,resp) => {
    try{

        const infoJogo = req.body
        const inserirJogo = await cadastroJogo(infoJogo)

        if(!infoJogo) {
            resp.status(400).send('Insira Informações!')
        }

        for (const item of infoJogo.plataformas) {
            await inserirPlataformaJogo(infoJogo, item)
        }

        
        for (const item of infoJogo.generos) {
            await inserirGeneroJogo(infoJogo, item)
        }



    
        resp.send(inserirJogo)


    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }


})

export default server;