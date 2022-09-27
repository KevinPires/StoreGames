import { cadastrarUsuario ,verificarEmail } from '../repository/userRepository.js'
import { Router  } from "express";
import multer from 'multer';

const server = Router ();


server.post('/cadastro/usuario' , async (req, resp) =>{
    try {
        const usuario = req.body;
        
        let temError = false;
        let erros = [];

        if(!usuario.email){
            erros.push("Email não pode estar vazio")
            temError = true
        }
        if( await verificarEmail(usuario.email) >= 1){
            erros.push("Email ja esta sendo utilizado")
        }
        
        if(temError){
            throw new Error(erros)
        }
        const resposta =  await cadastrarUsuario(usuario);

    
        resp.status(200).json({
            idInserido : resposta ,
            msg : 'Usuario Cadastrado'
        })
    } catch (err) {
        console.log(err);
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;