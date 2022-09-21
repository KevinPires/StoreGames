import { con } from './connection.js'


export async function cadastroJogo (jogo) {
    const comando = 
    `
    insert into TB_JOGO (NM_JOGO, VL_JOGO, DS_JOGO, QTD_ESTOQUE, IMG_CAPA, DS_REQUISITOS, BL_DISPONIVEL, BL_MAISVENDIDO)
					values(?, ? , ? , ? , ? , ? , ?, ? );

    `
    const [resposta] = await con.query (comando, [jogo.nome, jogo.valor, jogo.descricao, jogo.estoque, jogo.imagem, jogo.requisitos, jogo.disponivel, jogo.maisvendido])
    jogo.id = resposta.insertId;
    return resposta[0]
    
    
}

export async function inserirPlataformaJogo(ID_JOGO, ID_PLATAFORMA) {
    const comando = 
    `
    INSERT INTO TB_PLATAFORMA_JOGO (FK_JOGO, FK_PLATAFORMA)
					     VALUES(?, ?);
    `
    const [resposta] = await con.query(comando, [ID_JOGO, ID_PLATAFORMA] )
    return resposta[0]
    
}

export async function inserirGeneroJogo(ID_JOGO, ID_GENERO) {
    const comando = 
    `
    INSERT INTO TB_GENERO_JOGO (FK_JOGO, FK_GENERO)
					     VALUES(?, ?);
    `
    const [resposta] = await con.query(comando, [ID_JOGO, ID_GENERO] )
    return resposta[0]
    
}