import { con } from './connection.js'

export async function login(email, senha){
    const comando = `
        SELECT ID_ADMIN_LOGIN         id,
               DS_EMAIL                  email,
               DS_SENHA                  senha
          from TB_ADMIN_LOGIN
         where DS_EMAIL                 =  ?
           and DS_SENHA                 =  ?
    `
    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}