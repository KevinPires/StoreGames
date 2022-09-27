import { con } from './connection.js'


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

export async function alterarImagem(imagem, id) {
    const comando = 
    `update tb_jogo  
            set img_capa  = ?
        where id_jogo = ?`;

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows
}

export async function listarTodosJogos() {
    const comando =
    `SELECT id_jogo		id,
    nm_jogo		      nome,
    vl_jogo	          valor,
    ds_jogo	          descricao,
    qtd_estoque	      estoque,
    ds_requisitos     requisitos ,
    bl_disponivel     disponivel,
    bl_maisvendido    maisvendido
FROM tb_jogo`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}

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
    from tb_jogo   
          WHERE nm_jogo like ?` ;
    
    const [linhas] = await con.query(comando, [ `%${nome}%` ]);
    return linhas;
}

// Funções de delete 


export async function removerGeneroJogo(id){
    const comando = `
    delete from tb_genero_jogo
    where id_genero_jogo =?
    `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}


export async function removerPlataformaJogo(id){
    const comando = `
    delete from tb_plataforma_jogo
    where id_plataforma_jogo =?
    `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}


export async function removerJogo(id){
    const comando = `
    delete from tb_jogo
    where id_jogo =?
    `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

