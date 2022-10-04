import { buscarJogoPorId, buscarPorIdGenero, buscarPorIdPlataforma, login } from '../repository/adminRepository.js'
import { Router  } from "express";
import multer from 'multer';

const server = Router ();
const upload = multer({ dest: 'storage/perfil' })

server.post('/login', async (req, resp) =>{
    try {
        const { logar, senha } = req.body;

        const resposta = await login(logar, senha);
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

server.get('/cadastro/:id', async (req, resp) => {
    try {
        const id = req.params.id;

       const nome =  await buscarJogoPorId(id);
       const genero = await buscarPorIdGenero(id);
       const plataforma = await buscarPorIdPlataforma(id); 
  
       resp.send({
        info: nome,
        genero: genero, 
        plataforma: plataforma 
       })
       

    } catch (err) {
        resp.status(400).send({ 
            erro: err.message
        })
    }
})

export default server;