import 'dotenv/config'
import adminController from './controller/adminController.js'
import jogoController from './controller/jogoController.js'

import express from 'express'
import cors from 'cors'



const server = express();
server.use(cors());
server.use(express.json());


//config endpoints
server.use(adminController);
server.use(jogoController)


server.listen(process.env.PORT, () => console.log(`conectada na porta ${process.env.PORT}`)); 


