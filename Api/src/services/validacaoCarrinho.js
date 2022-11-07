

export async function ValidarCarrinho (info) {
    
    if(!info.endereco.cep) {
        throw new Error("Campo Obrigatório!")
    }

    if(!info.endereco.endereco) {
        throw new Error("Campo Obrigatório!")
    }

    if(!info.endereco.cidade) {
        throw new Error("Campo Obrigatório!")
    }

    if(!info.endereco.bairro) {
        throw new Error("Campo Obrigatório!")
    }

    if(!info.endereco.numero) {
        throw new Error("Campo Obrigatório!")
    }

    if(!info.cartao.nome) {
        throw new Error("Campo Obrigatório!")
    }

    if(!info.cartao.cpf) {
        throw new Error("Campo Obrigatório!")
    }

    if(info.cartao.cpf.length > 12) {
        throw new Error("Cpf inválido")
    }

    if(!info.cartao.chavepix) {
        throw new Error("Campo Obrigatorio!")
    }
    
}