import { inserirPlatarmaJogo, listarPlataforma } from '../repository/plataformaRepository.js'; 

import { Router } from 'express';

const server = Router();


server.get('/jogo/plataforma', async (req, resp) => {
    try {
        const linhas = await listarPlataforma();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;

