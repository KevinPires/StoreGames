import { con } from './connection.js';



export async function listarGenero() {
    const comando = `
        select id_genero         as id,
               ds_genero        as genero
          from tb_genero
    `

    const [linhas] = await con.query(comando);
    return linhas;
}