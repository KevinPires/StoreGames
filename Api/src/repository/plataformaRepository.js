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




export async function buscarPlataformaProduto(id) {
    const comando = `
        select ID_PLATAFORMA       as id,
               DS_PLATAFORMA       as plataforma
          from TB_PLATAFORMA_JOGO
          INNER JOIN TB_PLATAFORMA
          ON TB_PLATAFORMA.ID_PLATAFORMA = TB_PLATAFORMA_JOGO.FK_PLATAFORMA
         where FK_JOGO = ?;
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}