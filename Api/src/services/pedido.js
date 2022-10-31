import randomString from 'randomstring'

export function gerarNotaFiscal() {
    return randomString.generate(11)
}

export function criarNovoPedido (idUsuario, info) {
    let notaFiscal = gerarNotaFiscal()
    let dataPedido = new Date();
    console.log(info)
    return {
        // informacoes do pedido
        idUsuario: idUsuario,
        status: info.status,
        valor : info.valor,
        frete : info.frete,
        notaFiscal: notaFiscal,
        data : dataPedido,

    }
}

 