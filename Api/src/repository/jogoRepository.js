import { con } from './connection.js'


export async function cadastroJogo (jogo) {
    const comando = 
    `
    insert into TB_JOGO (NM_JOGO, VL_JOGO, DS_JOGO, QTD_ESTOQUE, IMG_CAPA, DS_REQUISITOS, BL_DISPONIVEL, BL_MAISVENDIDO)
					values(?, ? , ? , ? , ? , ? , ?, ? );

    `
    const [resposta] = await con.query (comando, [jogo.nome, jogo.valor, jogo.descricao, jogo.estoque, jogo.imagem, jogo.requisitos, jogo.disponivel, jogo.maisvendido])
    jogo.id = resposta.insertId;
    return jogo
    
    
}