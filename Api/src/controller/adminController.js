import { alterarPedidoStatus, buscarJogoPorId, buscarPorIdGenero, buscarPorIdPlataforma, login } from '../repository/adminRepository.js'
import { Router  } from "express";
import multer from 'multer';
import { alterarJogo, inserirGeneroJogo, inserirPlataformaJogo, removerGeneroJogo, removerPlataformaJogo } from '../repository/jogoRepository.js';
import { buscarGeneroPorId } from '../repository/generoRepository.js';
import { buscarPlataformaporID } from '../repository/plataformaRepository.js';
import { visualizarPedidos } from '../repository/pedidoRepository.js';

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
        const jogo = req.body;
        
        if (!jogo.nome)
            throw new Error('Nome do jogo é obrigatório')
           
            if (!jogo.valor)
            throw new Error('Valor do jogo é obrigatório')
           
            if (!jogo.descricao)
            throw new Error('Descrição do jogo é obrigatório')
            
            if (!jogo.estoque)
            throw new Error('Estoque do jogo é obrigatório')
           
            if (!jogo.requisitos)
            throw new Error('Requisitos do jogo é obrigatório')
            
            if (!jogo.generos || jogo.generos.length <= 0)
            throw new Error('Genero do jogo é obrigatório')
           
            if (!jogo.plataformas|| jogo.plataformas.length <= 0)
            throw new Error('Plataforma do jogo é obrigatória')
        
        // Removendo genêro e plataforma
        await removerGeneroJogo(id);
        await removerPlataformaJogo(id);

        //Alterando dados da tb_produto
        await alterarJogo(id, jogo);
       
        for (const idGenero of jogo.generos) {
            const cat = await buscarGeneroPorId(idGenero);
            
            if (cat != undefined)
            await inserirGeneroJogo(id, idGenero);
        }
        

        for (const idPlataforma of jogo.plataformas) {
            const pla = await buscarGeneroPorId(idPlataforma);

            if(pla != undefined) 
            await inserirPlataformaJogo(id, idPlataforma);
        }

        
       
        resp.status(204).send();
    } catch (err) {
        console.log(err)
        resp.status(400).send({
            
            erro: err.message
        })

    }
})  

server.put('/status', async (req, resp) => {
    try {
        const info = req.body
        console.log(info)
        if(!info) {
            throw new Error('Campos Obrigatorios')
        }

        const alterarInfo = await alterarPedidoStatus(info.status, info.id)        
        
        resp.status(202).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }


})

server.get('/pedidos', async (req,resp) => {
    try {

        const exibirPedidos = await visualizarPedidos()

        resp.send(exibirPedidos)


    } catch (error) {
        console.log(error)
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default server;

