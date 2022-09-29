import { listarGenero } from "../repository/generoRepository.js";

import { Router } from 'express';

const server = Router();


server.get('/consultar', async (req, resp) => {
    try {
        const linhas = await listarGenero();
        return resp.send(linhas);
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
