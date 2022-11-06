import { con } from './connection.js'


export async function login(login, senha){
    const comando = `
        SELECT ID_ADMIN_LOGIN         id,
               DS_LOGIN                login,
               DS_SENHA                  senha
          from TB_ADMIN_LOGIN
         where DS_LOGIN               =  ?
           and DS_SENHA                 =  ?
    `
    const [linhas] = await con.query(comando, [login, senha])
    return linhas[0];
}

export async function  buscarJogoPorId(id){
    const comando =` SELECT
        ID_JOGO                     as id,
        NM_JOGO                     as nome,                                                       
        VL_JOGO                     as valor,
        DS_JOGO                     as descricao,
        IMG_CAPA                    as imagem,
        QTD_ESTOQUE                 as estoque,
        DS_REQUISITOS               as requisitos,
        BL_DISPONIVEL               as disponivel,
        BL_MAISVENDIDO              as maisvendido
        FROM TB_JOGO
        WHERE ID_JOGO = ?`;

   const [linhas] = await con.query(comando, [id]);
   return linhas[0];
}

    export async function  buscarPorIdGenero(idJogo){
    const comando =
   `SELECT FK_GENERO         as id
        FROM TB_GENERO_JOGO
    WHERE FK_JOGO = ?`;

   const [linhas] = await con.query(comando, [idJogo]);
   return linhas.map(item => item.id);
}

   export async function  buscarPorIdPlataforma(idJogo){
    const comando =
   `SELECT FK_PLATAFORMA         as id
        FROM TB_PLATAFORMA_JOGO
    WHERE FK_JOGO = ?`;

   const [linhas] = await con.query(comando, [idJogo]);
   return linhas.map(item => item.id);
}
    
export async function alterarPedidoStatus (pedido, id ) {
    const comando =
    `
    UPDATE
    TB_PEDIDO SET DS_STATUS = ?
    WHERE ID_PEDIDO = ?;

    
    `
    const [resposta] = await con.query(comando, [
        pedido,
        id
    ])
    return resposta.affectedRows
}

