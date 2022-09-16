import { listarGenero } from "../repository/generoRepository.js";

import { Router } from 'express';

const server = Router();


server.get('/jogo/genero', async (req, resp) => {
    try {
        const linhas = await listarGenero();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
