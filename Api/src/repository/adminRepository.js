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

