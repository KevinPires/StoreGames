import { cadastrarUsuario ,loginUsuario,verificarCpf,verificarEmail } from '../repository/userRepository.js'
import { Router  } from "express";
import multer from 'multer';

const server = Router ();


server.post('/cadastro' , async (req, resp) =>{
    try {
        const usuario = req.body;
        
        let temError = false;
        let erros = [];

        if(!usuario.email){
            erros.push({
                Erro: "Email não pode estar vazio"
            })
            temError = true
        }
        if( await verificarEmail(usuario.email) >= 1){
            erros.push({
                Erro: "Email ja esta sendo utilizado"
            })
            temError = true
        }
        if(!usuario.senha){
            erros.push({
               Erro : "Senha obrigatoria"
            })
            temError = true
        }
        if(!usuario.nome){
            erros.push({
                Erro: " Nome obrigatorio "
            })
            temError = true
        }
        if(!usuario.cpf){
            erros.push({
                Erro: " Campo de cpf é obrigatorio "
            })
            temError = true
        }
        if(await verificarCpf(usuario.cpf) >= 1){
            erros.push({
                Erro: " Cpf já cadastrado "
            })
            temError = true
        }
        if(!usuario.nascimento){
            erros.push({
                Erro: "Data de nascimento Obrigatorio"
            })
            temError = true
        }
        if(temError){
            return resp.status(400).json({ Erro : erros})
        }
        const resposta =  await cadastrarUsuario(usuario);

        resp.status(200).json({
            idInserido : resposta ,
            msg : 'Usuario Cadastrado'
        })
    } catch (err) {
        console.log(err);
        resp.status(400).json({
            erro: err.message
        })
    }
})


server.post('/login' , async (req, resp) =>{
    try {
        const { email, senha } = req.body;

        const resposta =  await loginUsuario( email, senha)

        if(!resposta){
            throw new Error( "Credenciais invalidas")
        }
        resp.send(resposta)

    } catch (err) {
        console.log(err)
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;