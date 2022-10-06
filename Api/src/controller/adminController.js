import { buscarJogoPorId, buscarPorIdGenero, buscarPorIdPlataforma, login } from '../repository/adminRepository.js'
import { Router  } from "express";
import multer from 'multer';
import { alterarJogo, inserirGeneroJogo, inserirPlataformaJogo, removerGeneroJogo, removerPlataformaJogo } from '../repository/jogoRepository.js';
import { buscarGeneroPorId } from '../repository/generoRepository.js';
import { buscarPlataformaporID } from '../repository/plataformaRepository.js';

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



server.put('/cadastro/:id', async (req, resp) => {
    try {

        const id = req.params.id; 
        const infoJogo = req.body;

        console.log(id)
        console.log(infoJogo)
        // Removendo genêro e plataforma
        await removerGeneroJogo(id);
        await removerPlataformaJogo(id);

        //Alterando dados da tb_produto
        const jogoID = await alterarJogo(id, infoJogo);
        
        for (const idGenero of infoJogo.generos) {
            const cat = await buscarGeneroPorId(idGenero);
           
            if (cat != undefined)
            await inserirGeneroJogo(jogoID, idGenero);
        }
        

        for (const idPlataforma of infoJogo.plataformas) {
            const pla = await buscarPlataformaporID(idPlataforma);

            if(pla != undefined) 
            await inserirPlataformaJogo(jogoID, idPlataforma);
        }

        
       
        resp.status(204).send(jogoID.toString());
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})  

export default server;

