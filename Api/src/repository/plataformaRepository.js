import { con } from './connection.js';



export async function listarPlataforma() {
    const comando = `
        select id_plataforma         as id,
               ds_plataforma         as plataforma
          from TB_PLATAFORMA
    `

    const [linhas] = await con.query(comando);
    return linhas;
}


export async function buscarPlataformaporID(id) {
    const comando = `
        select id_plataforma       as id,
               ds_plataforma       as plataforma
          from TB_PLATAFORMA
         where id_plataforma = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

