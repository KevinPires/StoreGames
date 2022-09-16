import { login } from '../repository/adminRepository.js'
import { Router  } from "express";
import multer from 'multer';

const server = Router ();
const upload = multer({ dest: 'storage/perfil' })

server.post('/admin/login', async (req, resp) =>{
    try {
        const { email, senha } = req.body;

        const resposta = await login(email, senha);
        if(!resposta) {
            throw new Error('Credenciais inválidas');
        }
        resp.send(resposta)
    } catch(err){
        resp.status(401).send({
            erro: err.message
        });
    }
})
 
export default server;