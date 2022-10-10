import { con } from './connection.js'

//cadastrar jogo
export async function cadastroJogo (jogo) {
    const comando = 
    `
    insert into TB_JOGO ( NM_JOGO, VL_JOGO, DS_JOGO, QTD_ESTOQUE, DS_REQUISITOS, BL_DISPONIVEL, BL_MAISVENDIDO)
					values( ? , ? , ? , ? , ? , ?, ?);

    `
    const [resposta] = await con.query (
        comando, 
        [
            jogo.nome, 
            jogo.valor, 
            jogo.descricao, 
            jogo.estoque, 
            jogo.requisitos, 
            jogo.disponivel, 
            jogo.maisvendido
        ]
    )
                                                                                                
    jogo.id = resposta.insertId;
    
    return resposta.insertId  
}

//inserir plataforma
export async function inserirPlataformaJogo(ID_JOGO, ID_PLATAFORMA) {
    const comando = 
    `
    INSERT INTO TB_PLATAFORMA_JOGO (FK_JOGO, FK_PLATAFORMA)
					     VALUES(?, ?);
    `
    const [resposta] = await con.query(comando, [ID_JOGO, ID_PLATAFORMA] )
    return resposta[0]
    
}

//inserir gênero
export async function inserirGeneroJogo(FK_JOGO, FK_GENERO) {
    const comando = 
    `
    INSERT INTO TB_GENERO_JOGO (FK_JOGO, FK_GENERO)
					     VALUES(?, ?);
    `
    const [resposta] = await con.query(comando, [FK_JOGO, FK_GENERO] )
    return resposta[0]
    
}


//alterar imagem
export async function alterarImagem(imagem, id) {
    const comando = 
    `update TB_JOGO  
            set img_capa  = ?
        where id_jogo = ?`;

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows
}


//listar todos
export async function listarTodosJogos() {
    const comando =
        `SELECT id_jogo		      id,
                nm_jogo		      nome,
                vl_jogo	          valor,
                ds_jogo	          descricao,
                qtd_estoque	      estoque,
                img_capa          capa,
                ds_requisitos     requisitos,
                bl_disponivel     disponivel,
                bl_maisvendido    maisvendido
        FROM TB_JOGO`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}

//buscar por nome
export async function buscarPorNome(nome) {
    const comando =
   ` SELECT id_jogo		id,
    nm_jogo		        nome,
    vl_jogo	            valor,
    ds_jogo	            descricao,
    qtd_estoque	        estoque,
    ds_requisitos       requisitos,
    bl_disponivel       disponivel,
    bl_maisvendido      maisvendido  
    from TB_JOGO  
          WHERE nm_jogo like ?` ;
    
    const [linhas] = await con.query(comando, [ `%${nome}%` ]);
    return linhas;
}

// Funções de delete 

export async function removerGeneroJogo(id){
    const comando = `
    delete from TB_GENERO_JOGO
    WHERE fk_jogo = ?
    `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}


export async function removerPlataformaJogo(id){
    const comando = `
    delete from TB_PLATAFORMA_JOGO
    WHERE fk_jogo = ?
    `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}


export async function removerJogo(id){
    const comando = `
    delete from TB_JOGO
    where id_jogo =?
    `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

// Get para alterar





// alterar jogo
export async function alterarJogo(id, infoJogo){
    const comando = 
    `UPDATE TB_JOGO
         set NM_JOGO = ?,
         VL_JOGO = ?,
         DS_JOGO = ?,
         QTD_ESTOQUE = ?,
         DS_REQUISITOS = ?,
         BL_DISPONIVEL = ?,
         BL_MAISVENDIDO = ?
    where ID_JOGO = ?; `

    const [resposta] = await con.query(comando, 
        [   infoJogo.nome, 
            infoJogo.valor, 
            infoJogo.descricao, 
            infoJogo.estoque, 
            infoJogo.requisitos, 
            infoJogo.disponivel,
            infoJogo.maisvendido, 
            id
        ]);
    return resposta.affectedRows;
}


// FILTROS DE JOGOS

export async function filtroGeneroJogo(filtro){
    const comando =`
        select  ID_JOGO			ID,
                IMG_CAPA		CAPA,
                NM_JOGO			NOME,
                VL_JOGO			VALOR
           FROM TB_JOGO
        INNER JOIN TB_GENERO_JOGO 
            ON TB_JOGO.ID_JOGO = TB_GENERO_JOGO.FK_JOGO
        INNER JOIN TB_GENERO 
            ON TB_GENERO.ID_GENERO = TB_GENERO_JOGO.FK_GENERO
        WHERE DS_GENERO = ?
    `

    const [linhas] = await con.query(comando,[filtro]);
    return linhas;
}


export async function filtroPlataformaJogo(filtro){
    const comando = `
        SELECT 	ID_JOGO 		ID,
                IMG_CAPA		CAPA,
                NM_JOGO			NOME,
                VL_JOGO		    VALOR    
        FROM TB_JOGO
        INNER JOIN TB_PLATAFORMA_JOGO ON TB_JOGO.ID_JOGO = TB_PLATAFORMA_JOGO.FK_JOGO
        INNER JOIN TB_PLATAFORMA ON TB_PLATAFORMA.ID_PLATAFORMA = TB_PLATAFORMA_JOGO.FK_PLATAFORMA
        WHERE DS_PLATAFORMA = ?;
    `

    const [linhas] = await con.query(comando, [filtro] )
    return linhas;
}