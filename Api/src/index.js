import 'dotenv/config'
import adminController from './controller/adminController.js'
import jogoController from './controller/jogoController.js'
import generoController from './controller/generoController.js'
import plataformaController from './controller/plataformaRepository.js'
import userController from'./controller/userController.js'

import express from 'express'
import cors from 'cors'



const server = express();
server.use(cors());
server.use(express.json());


//config endpoints
server.use(adminController);
server.use(jogoController)
server.use(generoController)
server.use(plataformaController)
server.use(userController)

server.listen(process.env.PORT, () => console.log(`conectada na porta ${process.env.PORT}`)); 


