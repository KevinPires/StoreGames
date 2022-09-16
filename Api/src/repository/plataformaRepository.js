import { con } from './connection.js';



export async function listarPlataforma() {
    const comando = `
        select id_plataforma         as id,
               nm_plataforma        as plataforma
          from tb_plataforma
    `

    const [linhas] = await con.query(comando);
    return linhas;
}