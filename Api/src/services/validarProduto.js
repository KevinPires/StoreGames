
export async function ValidarJogo (infoJogo) {
    const erros = []
    const haveError = false

    if(!infoJogo.nome) {
        erros.push("Nome Obrigatorio")
        haveError = true
    }
    if(!infoJogo.valor) {
        erros.push("Valor Obrigatorio!")
        haveError = true
    } 
    if(!infoJogo.descricao) {
        erros.push("Descrição Obrigatoria!")
        haveError = true
    }
    if(!infoJogo.estoque) {
        erros.push("Estoque Obrigatorio!")
        haveError = true
    }
    if(!infoJogo.requisitos) {
        erros.push("Requisitos Obrigatorio!")
        haveError = true
    }
    if(!infoJogo.generos || infoJogo.generos.length <= 0){
        erros.push("Gênero obrigatório")
        haveError = true
    }
    if(!infoJogo.plataformas || infoJogo.plataformas.length <= 0){
        erros.push("Plataforma obrigatória")
        haveError = true
    }

    if(!infoJogo.capa || infoJogo.capa){
        erros.push("Imagem obrigatória")
        haveError = true
    }
    if(haveError) {
        throw new Error ("Campos obrigatorios não preenchidos!")
    }

}

