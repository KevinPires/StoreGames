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
    return info.insertId
}


export async function cadastrarEndereco(idPedido, pedido ) {
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
            VALUES(? , ? , ? , ? , ? , ? );
    `
    const [resposta] = await con.query(comando, [
        pedido.cep,
        pedido.endereco,
        pedido.cidade,
        pedido.bairro,
        pedido.numero,
        idPedido
    ])

    return resposta
    
}

export async function cadastrarPix (idPedido, cartao) {
    const comando = 
    `
    INSERT INTO 
    TB_PAGAMENTO_PIX (
        NM_CLIENTE, 
        DS_CPF, 
        DS_CHAVEPIX, 
        FK_PEDIDO
    )
    VALUES(? , ? , ? , ? );
    `
    const [resposta] = await con.query (comando, [
        cartao.nome,
        cartao.cpf,
        cartao.chavepix,
        idPedido
    ])
    return resposta
}

export async function inserirJogoPedido (idPedido, idJogo, qtd, valor) {
    const comando = 
    `
    INSERT INTO 
    TB_JOGO_PEDIDO (
        ID_PEDIDO,
        ID_JOGO, 
        QTD_ITENS, 
        VL_PRODUTO
        )
    VALUES(? , ? , ? , ? );
    
    `
    const [resp] = await con.query (comando, [idPedido, idJogo, qtd, valor])
    return resp.affectedRows
}

export async function visualizarPedidos () {
    const comando =
    `
        select 
        P.ID_PEDIDO 		    as idpedido,
        P.ID_USUARIO 		    as iduser,
        P.DS_STATUS 		    as pstatus,
        P.VL_TOTAL 			    as ptotal,
        P.VL_FRETE 			    as pfrete,
        P.COD_NOTAFISCAL 	    AS pnotaFiscal,
        P.DT_PEDIDO 		    AS pdata,
        PIX.ID_PAGAMENTO_PIX    as idpix,
        PIX.NM_CLIENTE 		    as cliente,
        PIX.DS_CPF 			    as cpf
        from TB_PEDIDO as P
        LEFT JOIN TB_PAGAMENTO_PIX PIX
        ON P.ID_PEDIDO = PIX.FK_PEDIDO
        WHERE P.DS_STATUS != 'Aprovado' || 'Negado' 
        ORDER BY P.DS_STATUS ASC
    `
    const [resposta] = await con.query (comando)
    return resposta
}

export async function pedidosConcluidos () {
    const comando =
    `
        select 
        P.ID_PEDIDO 		    as idpedido,
        P.ID_USUARIO 		    as iduser,
        P.DS_STATUS 		    as pstatus,
        P.VL_TOTAL 			    as ptotal,
        P.VL_FRETE 			    as pfrete,
        P.COD_NOTAFISCAL 	    AS pnotaFiscal,
        P.DT_PEDIDO 		    AS pdata,
        PIX.ID_PAGAMENTO_PIX    as idpix,
        PIX.NM_CLIENTE 		    as cliente,
        PIX.DS_CPF 			    as cpf
        from TB_PEDIDO as P
        LEFT JOIN TB_PAGAMENTO_PIX PIX
        ON P.ID_PEDIDO = PIX.FK_PEDIDO
        WHERE P.DS_STATUS != 'Analise' AND P.DS_STATUS != 'Em fila'  
        ORDER BY P.DS_STATUS ASC;
    `
    const [resposta] = await con.query (comando)
    return resposta
}

export async function pesquisarPedidoNome (nome) {
    const comando =
    `
        select 
        P.ID_PEDIDO 		    as idpedido,
        P.ID_USUARIO 		    as iduser,
        P.DS_STATUS 		    as pstatus,
        P.VL_TOTAL 			    as ptotal,
        P.VL_FRETE 			    as pfrete,
        P.COD_NOTAFISCAL 	    AS pnotaFiscal,
        P.DT_PEDIDO 		    AS pdata,
        PIX.ID_PAGAMENTO_PIX    as idpix,
        PIX.NM_CLIENTE 		    as cliente,
        PIX.DS_CPF 			    as cpf
        from TB_PEDIDO as P
        LEFT JOIN TB_PAGAMENTO_PIX PIX
        ON P.ID_PEDIDO = PIX.FK_PEDIDO
        WHERE PIX.NM_CLIENTE like ?
    `;
    const [resposta] = await con.query (comando, [`%${nome}%` ])
    return resposta
}


// VIZUALIZAÇÃO DO PEDIDO NA AREA USUARIO

export async function pedidosUsuario(id){
    console.log(id)
    const comando =`
            SELECT 	
                    ID_PEDIDO			id_pedido,
                    ID_USUARIO			id,
                    DS_STATUS		 	situação,
                    VL_TOTAL 		    valor,
                    COD_NOTAFISCAL		notafiscal,
                    DT_PEDIDO			datapedido
                    
        FROM TB_PEDIDO 
        WHERE ID_USUARIO =?
        ORDER BY ID_PEDIDO DESC; 
    `

    const [resposta] = await con.query(comando, [id])
    return resposta
}

