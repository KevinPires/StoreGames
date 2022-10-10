import { con } from './connection.js';



export async function listarGenero() {
    const comando = `
        select id_genero         as id,
               ds_genero        as genero
          from TB_GENERO
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarGeneroPorId(id) {
    const comando = `
        select ID_GENERO       as id,
               DS_GENERO       as genero
          from TB_GENERO
         where ID_GENERO = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}