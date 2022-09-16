import { cadastroJogo } from "../repository/jogoRepository.js";
import { response, Router } from "express";
import multer from "multer";

const server = Router()

server.post('/jogo', async (req,resp) => {
    try{

        const infoJogo = req.body

        if(!infoJogo) {
            resp.status(400).send('Insira Informações!')
        }

        const inserirJogo = await cadastroJogo(infoJogo)

        resp.send(inserirJogo)


    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }


})

export default server;