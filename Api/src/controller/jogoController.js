import { cadastroJogo, inserirGeneroJogo, inserirPlataformaJogo } from "../repository/jogoRepository.js";
import { response, Router } from "express";
import multer from "multer";
import { buscarGeneroPorId } from "../repository/generoRepository.js";
import { buscarPlataformaporID } from "../repository/plataformaRepository.js";

const server = Router()

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




    
        resp.send(infoJogo)


    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }


})

export default server;