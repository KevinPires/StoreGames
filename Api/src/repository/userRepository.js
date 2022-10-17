import { con } from './connection.js';


export async function cadastrarUsuario(usuario){
    const comando = `
    insert into TB_USUARIO (nm_usuario, ds_cep, ds_nascimento, ds_cpf)
	    value(? , ? , ? , ?);
    `
    const [ resposta ] = await con.query(
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
    const [ resposta2 ] = await con.query(
        comando2,
        [
            usuario.id,
            usuario.email,
            usuario.senha
        ]
    )
    
    return resposta2.insertId
}

export async function verificarEmail(email){
    const comando = `
        select id_usuario
            from TB_USUARIO_LOGIN
            where ds_email = ?;
    `

    const [ resposta ] = await con.query(
        comando,[
            email
        ]
    )
   
    return resposta.length
}   

export async function verificarCpf(cpf){
    const comando = `
        select id_usuario
            from TB_USUARIO
            where ds_cpf = ?;
    `

    const [ resposta ] = await con.query(
        comando,[
            cpf
        ]
    )

    return resposta.length
}


export async function loginUsuario(email, senha){
    const comando = `
        select  id_usuario_login     id,
                ds_email          email,
                ds_senha          senha
          from  TB_USUARIO_LOGIN
         where  ds_email           = ?
           and  ds_senha           = ?
    `

    const [ linhas ] = await con.query(comando, [email, senha])
    return linhas[0];
 }

 export async function VisualizarInfoUser (id) {
    const comando = 
    `
        SELECT 
        U.ID_USUARIO 		AS ID,
        U.NM_USUARIO 		AS NOME,
        U.DS_CEP	 		AS CEP,
        U.DS_NASCIMENTO 	AS NASCIMENTO,
        U.DS_CPF			AS CPF,
        UL.ID_USUARIO_LOGIN AS IDUL,
        UL.DS_EMAIL			AS EMAIL,
        UL.DS_SENHA			AS SENHA
        FROM TB_USUARIO U
        LEFT JOIN TB_USUARIO_LOGIN UL
        ON U.ID_USUARIO = UL.ID_USUARIO_LOGIN
        WHERE U.ID_USUARIO = 2;
    
    `
    const resposta = con.query(comando, [id])
    return resposta[0]
 }