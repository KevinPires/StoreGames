import { con } from './connection.js';



export async function listarPlataforma() {
    const comando = `
        select id_plataforma         as id,
               ds_plataforma         as plataforma
          from tb_plataforma
    `

    const [linhas] = await con.query(comando);
    return linhas;
}


export async function buscarPlataformaporID(id) {
    const comando = `
        select id_plataforma       as id,
               ds_plataforma       as genero
          from tb_plataforma
         where id_plataforma = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

