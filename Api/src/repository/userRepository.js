import { con } from './connection.js';


export async function cadastrarUsuario(usuario) {
    const comando = `
    insert into TB_USUARIO (nm_usuario, ds_cep, ds_nascimento, ds_cpf)
	    value(? , ? , ? , ?);
    `
    const [resposta] = await con.query(
        comando,
        [
            usuario.nome,
            usuario.cep,
            usuario.nascimento,
            usuario.cpf
        ]
    )
    usuario.id = resposta.insertId;

    const comando2 = `
    INSERT INTO TB_USUARIO_LOGIN (id_usuario , ds_email, ds_senha)
	    value(?, ?, ?);
    `
    const [resposta2] = await con.query(
        comando2,
        [
            usuario.id,
            usuario.email,
            usuario.senha
        ]
    )

    return resposta2.insertId
}

export async function verificarEmail(email) {
    const comando = `
        select id_usuario
            from TB_USUARIO_LOGIN
            where ds_email = ?;
    `

    const [resposta] = await con.query(
        comando, [
        email
    ])

    return resposta.length
}

export async function verificarCpf(cpf) {
    const comando = `
        select id_usuario
            from TB_USUARIO
            where ds_cpf = ?;
    `

    const [resposta] = await con.query(
        comando, [
        cpf
    ]
    )

    return resposta.length
}


export async function loginUsuario(email, senha) {
    const comando = `
    select  TB_USUARIO_LOGIN.ID_USUARIO				id,
            NM_USUARIO								nome
    FROM TB_USUARIO 
    INNER JOIN TB_USUARIO_LOGIN ON TB_USUARIO_LOGIN.ID_USUARIO = TB_USUARIO.ID_USUARIO
    WHERE ds_email = ?
    and   ds_senha = ?
    `

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}

export async function VisualizarInfoUser(id) {
    const comando =
        `
        SELECT 
        ID_USUARIO		AS id,
        NM_USUARIO		AS nome,
        DS_CEP			AS cep,
        DS_NASCIMENTO 	AS nascimento,
        DS_CPF			AS cpf
        from TB_USUARIO
        where id_usuario = ?;
    
    `
    const [resposta] = await con.query(comando, [id])
    return resposta[0]
}

export async function VisualizarInfoLogin(id) {
    const comando =
        `
        select
                ID_USUARIO_LOGIN    as idUserLogin,
                DS_EMAIL	        as email,
                DS_SENHA	        as senha
        FROM TB_USUARIO_LOGIN
        WHERE id_usuario = ?;    

    `
    const [resposta] = await con.query(comando, [id])
    return resposta[0]
}



export async function inserirFavorito(id, idJogo){
    const comando =`
        INSERT INTO TB_USUARIO_FAVORITO(FK_USUARIO, FK_JOGO)
                            VALUES(?, ?)
    `

    const resposta = await con.query (comando,[id, idJogo]);
    return resposta.insertId
}


export async function verificarFavorito(id, idJogo){
    const comando = `
        select  *
        from TB_USUARIO_FAVORITO
        where fk_usuario = ?
        and fk_jogo     = ?
    `

    const [resposta] = await con.query(comando, [id, idJogo])
    return resposta.length
}


export async function removerFavorito(id, idJogo){
    const comando = `
        DELETE FROM TB_USUARIO_FAVORITO
        WHERE FK_USUARIO = ?
        AND FK_JOGO = ?;
    `

    const [resposta] = await con.query(comando, [id, idJogo])
    return resposta.affectedRows
}

export async function exibirFavorito(id){
    const comando =`
            SELECT  FK_JOGO				    id_jogo
        FROM TB_USUARIO_FAVORITO
        WHERE FK_USUARIO = ?;
    `
    const [resposta] = await con.query( comando , [id])
    return resposta
}

// ALTERAR SENHA

export async function alterarSenha(senha, id){
    
    const comando =`
        update TB_USUARIO_LOGIN
            set ds_senha= ?
        where id_usuario = ?;
    `
    
    const resposta = await con.query(comando, [ senha, id])
    return resposta.affectedRows
}


// ALTERAR INFORMAÇÕES USUARIO

export async function alterarInfo(id, usuario, cep){
    
    const comando =`
            update TB_USUARIO
            SET NM_USUARIO = ?,
                DS_CEP= ?
        WHERE ID_USUARIO = ?;
    `

    const [resposta] = await con.query(comando,[usuario, cep, id])
    return resposta.affectedRows
}


export async function statusPedido(id){
    
    const comando = 
        `select 
        P.ID_PEDIDO               as idpedido,
        P.ID_USUARIO              as iduser,
        P.DS_STATUS               as pstatus,
        P.VL_TOTAL                as ptotal,
        P.VL_FRETE                as pfrete,
        P.COD_NOTAFISCAL          as pnotaFiscal,
        P.DT_PEDIDO               as pdata,
        PIX.ID_PAGAMENTO_PIX      as idpix,
        PIX.NM_CLIENTE            as cliente,
        PIX.DS_CPF                as cpf,
        E.DS_ENDERECO             as rua,
        E.DS_NUMERO               as numero,
        E.DS_BAIRRO               as bairro
        from TB_PEDIDO as P
        LEFT JOIN TB_PAGAMENTO_PIX PIX
        ON P.ID_PEDIDO = PIX.FK_PEDIDO
        LEFT JOIN TB_ENDERECO E
        ON P.ID_PEDIDO = E.FK_PEDIDO
        WHERE P.ID_PEDIDO = ?
        ORDER BY P.DS_STATUS ASC
    ;`
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

