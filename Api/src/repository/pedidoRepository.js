import { con } from './connection.js'

export async function cadastrarPedido (pedido) {
    const comando = 
    `
    INSERT INTO TB_PEDIDO (
        ID_USUARIO,
        DS_STATUS,
        VL_TOTAL,
        VL_FRETE,
        COD_NOTAFISCAL,
        DT_PEDIDO)
        VALUES(?, ? , ? , ? , ? , ? );
    
    `
    const [info] = await con.query (comando,[
            pedido.idUsuario,
            pedido.status,
            pedido.valor,
            pedido.frete,
            pedido.notaFiscal,
            pedido.data 
    ]);
    pedido.id = info.insertId
    return info[0]
}


export async function cadastrarEndereco(pedido, id) {
    const comando = 
    `
        INSERT INTO TB_ENDERECO 
        (
        DS_CEP,
        DS_ENDERECO,
        DS_CIDADE,
        DS_BAIRRO,
        DS_NUMERO,
        FK_PEDIDO
        )
            VALUES('?', '?', '?', '?','?', ?);
    `
    const resposta = await con.query(comando, [
        pedido.cep,
        pedido.endereco,
        pedido.cidade,
        pedido.bairro,
        pedido.numero,
        id
    ])

    resposta.insertId
    return resposta[0]
}