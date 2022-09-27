
export async function ValidarJogo (jogo) {
   
        if(jogo.nome === undefined || jogo.nome === " ") {
            throw new Error("Nome Obrigatorio!")
        } 
        if(jogo.valor === undefined || jogo.valor === " ") {
            throw new Error("Nome Obrigatorio!")
        } 
        if(jogo.descricao === undefined || jogo.descricao === " ") {
            throw new Error("Nome Obrigatorio!")
        } 
        if(jogo.estoque === undefined || jogo.estoque === " ") {
            throw new Error("Nome Obrigatorio!")
        } 
        if(jogo.requisitos === undefined || jogo.requisitos === " ") {
            throw new Error("Nome Obrigatorio!")
        } 
        if(jogo.disponivel === undefined) {
            throw new Error("Nome Obrigatorio!")
        } 
        if(jogo.maisvendido === undefined) {
            throw new Error("Nome Obrigatorio!")
        } 

}