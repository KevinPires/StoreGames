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
    WHERE id_usuario_login = ?;    

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


export async function exibirFavorito(id){
    const comando =`
            SELECT  id_usuario_favorito     id_usuario_favorito,
                    FK_JOGO				    idJogo
        FROM TB_USUARIO_FAVORITO
        WHERE FK_USUARIO = ?;
    `
    const [resposta] = await con.query( comando , [id])
    return [resposta]
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


// VERIFICAÇÃO DE SENHA 

// export async function verificarSenha(id, senha){
//     console.log(id, senha)
//     const comando=`
//         select 	id_usuario_login			id,
//                 nm_usuario				usuario
//         from TB_USUARIO
//         INNER JOIN TB_USUARIO_LOGIN ON TB_USUARIO_LOGIN.ID_USUARIO = TB_USUARIO.ID_USUARIO
//         WHERE TB_USUARIO.ID_USUARIO = ?
//         AND DS_SENHA = ?;
//     `

//     const [resposta]= await con.query(comando, [id, senha])
//     return resposta[0]
// }