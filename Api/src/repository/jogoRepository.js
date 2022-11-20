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
   ` SELECT 
            id_jogo		        id,
            img_capa            capa,
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

export async function filtroGeneroAcao(){
    const comando =`
        select  ID_JOGO			id,
                IMG_CAPA		capa,
                NM_JOGO			nome,
                VL_JOGO			valor
           FROM TB_JOGO
        INNER JOIN TB_GENERO_JOGO 
            ON TB_JOGO.ID_JOGO = TB_GENERO_JOGO.FK_JOGO
        INNER JOIN TB_GENERO 
            ON TB_GENERO.ID_GENERO = TB_GENERO_JOGO.FK_GENERO
        WHERE DS_GENERO = 'Ação'
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function filtroGeneroAventura(){
    const comando =`
        select  ID_JOGO			id,
                IMG_CAPA		capa,
                NM_JOGO			nome,
                VL_JOGO			valor
           FROM TB_JOGO
        INNER JOIN TB_GENERO_JOGO 
            ON TB_JOGO.ID_JOGO = TB_GENERO_JOGO.FK_JOGO
        INNER JOIN TB_GENERO 
            ON TB_GENERO.ID_GENERO = TB_GENERO_JOGO.FK_GENERO
        WHERE DS_GENERO = 'Aventura'
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function filtroGeneroSimulacao(){
    const comando =`
        select  ID_JOGO			id,
                IMG_CAPA		capa,
                NM_JOGO			nome,
                VL_JOGO			valor
           FROM TB_JOGO
        INNER JOIN TB_GENERO_JOGO 
            ON TB_JOGO.ID_JOGO = TB_GENERO_JOGO.FK_JOGO
        INNER JOIN TB_GENERO 
            ON TB_GENERO.ID_GENERO = TB_GENERO_JOGO.FK_GENERO
        WHERE DS_GENERO = 'Simulacao'
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function filtroGeneroRPG(){
    const comando =`
        select  ID_JOGO			id,
                IMG_CAPA		capa,
                NM_JOGO			nome,
                VL_JOGO			valor
           FROM TB_JOGO
        INNER JOIN TB_GENERO_JOGO 
            ON TB_JOGO.ID_JOGO = TB_GENERO_JOGO.FK_JOGO
        INNER JOIN TB_GENERO 
            ON TB_GENERO.ID_GENERO = TB_GENERO_JOGO.FK_GENERO
        WHERE DS_GENERO = 'RPG'
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

//// FILTRO DE PLATAFORMA
export async function filtroPlataformaPc(){
    const comando = `
        SELECT 	ID_JOGO 		id,
                IMG_CAPA		capa,
                NM_JOGO			nome,
                VL_JOGO		    valor    
        FROM TB_JOGO
        INNER JOIN TB_PLATAFORMA_JOGO ON TB_JOGO.ID_JOGO = TB_PLATAFORMA_JOGO.FK_JOGO
        INNER JOIN TB_PLATAFORMA ON TB_PLATAFORMA.ID_PLATAFORMA = TB_PLATAFORMA_JOGO.FK_PLATAFORMA
        WHERE DS_PLATAFORMA = 'pc';
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function filtroPlataformaPs4(){
    const comando = `
        SELECT 	ID_JOGO 		id,
                IMG_CAPA		capa,
                NM_JOGO			nome,
                VL_JOGO		    valor    
        FROM TB_JOGO
        INNER JOIN TB_PLATAFORMA_JOGO ON TB_JOGO.ID_JOGO = TB_PLATAFORMA_JOGO.FK_JOGO
        INNER JOIN TB_PLATAFORMA ON TB_PLATAFORMA.ID_PLATAFORMA = TB_PLATAFORMA_JOGO.FK_PLATAFORMA
        WHERE DS_PLATAFORMA = 'Ps4';
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function filtroPlataformaXbox(){
    const comando = `
        SELECT 	ID_JOGO 		id,
                IMG_CAPA		capa,
                NM_JOGO			nome,
                VL_JOGO		    valor    
        FROM TB_JOGO
        INNER JOIN TB_PLATAFORMA_JOGO ON TB_JOGO.ID_JOGO = TB_PLATAFORMA_JOGO.FK_JOGO
        INNER JOIN TB_PLATAFORMA ON TB_PLATAFORMA.ID_PLATAFORMA = TB_PLATAFORMA_JOGO.FK_PLATAFORMA
        WHERE DS_PLATAFORMA = 'xbox';
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

//////////////////////////////////////////////////////////////////

export async function listarDestaque() {
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

        FROM TB_JOGO
        where bl_maisvendido = true`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}

// Filtrar por valor

export async function filtrarValorCinquenta(){
const comando =
    `SELECT 	
		   TB_JOGO.id_jogo       id,
           TB_JOGO.IMG_CAPA          capa,
		   TB_JOGO.nm_jogo       nome,     
		   TB_JOGO.vl_jogo        valor  
	FROM TB_JOGO
	where vl_jogo < 50`;

    const [linhas] = await con.query(comando);
    return linhas;

}

export async function filtrarValorCem(){
    const comando = 
    `SELECT 
            TB_JOGO.id_jogo             id,
            TB_JOGO.IMG_CAPA            capa,
            TB_JOGO.nm_jogo             nome,
            TB_JOGO.vl_jogo             valor
    FROM TB_JOGO
    where vl_jogo >= 51 and vl_jogo <=100`;

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function filtrarValorDuzentos(){
    const comando = 
    `SELECT 
            TB_JOGO.id_jogo             id,
            TB_JOGO.IMG_CAPA            capa,
            TB_JOGO.nm_jogo             nome,
            TB_JOGO.vl_jogo             valor
    FROM TB_JOGO
    where vl_jogo >= 101 and vl_jogo <=200`;

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function filtrarValorFinal(){
    const comando = 
    `SELECT 
            TB_JOGO.id_jogo             id,
            TB_JOGO.IMG_CAPA            capa,
            TB_JOGO.nm_jogo             nome,
            TB_JOGO.vl_jogo             valor
    FROM TB_JOGO
    where vl_jogo >= 201`;

    const [linhas] = await con.query(comando);
    return linhas;
}


// JOGOS DO MESMO GENERO 

export async function jogosDoMesmoGenero(genero){
    console.log(genero)
    const comando = 
    `
        select 	id_jogo		      id,
                nm_jogo		      nome,
                vl_jogo	          valor,
                qtd_estoque	      estoque,
                img_capa          capa,
                bl_disponivel     disponivel
            FROM TB_JOGO
            LEFT JOIN TB_GENERO_JOGO ON TB_GENERO_JOGO.FK_JOGO = TB_JOGO.ID_JOGO
            LEFT JOIN TB_GENERO ON TB_GENERO.ID_GENERO = TB_GENERO_JOGO.FK_GENERO
            where DS_GENERO like ?
            limit  4
    `
    const [resposta] = await con.query(comando,[ `%${genero}%` ])
    return resposta
}