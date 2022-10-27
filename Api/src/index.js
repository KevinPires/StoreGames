import 'dotenv/config'
import adminController from './controller/adminController.js'
import jogoController from './controller/jogoController.js'
import generoController from './controller/generoController.js'
import plataformaController from './controller/plataformaRepository.js'
import userController from'./controller/userController.js'
import pedidoController from './controller/pedidoController.js'
import express from 'express'
import cors from 'cors'



const server = express();
server.use(cors());
server.use(express.json());


//config endpoints
server.use('/pedido' , pedidoController)
server.use('/admin', adminController);
server.use('/jogo', jogoController)
server.use('/genero', generoController)
server.use('/plataforma', plataformaController)
server.use('/user', userController)
server.use('/storage/capasJogos', express.static('storage/capasJogos'));

server.listen(process.env.PORT, () => console.log(`conectada na porta ${process.env.PORT}`)); 


