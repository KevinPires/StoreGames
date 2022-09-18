import './index.scss'

import InputCadastro from '../inputCadastro'
export default function TelaCadastro() {



    return(

        <main className="pageCadastro">
            <section className="containerCadastrar">
                <section className="header">
                    <p>Cadastrar Jogos</p>
                </section>

                <section className="container1">

                    <div className="labelInput">
                        <label>Nome:</label>
                        <InputCadastro/>
                    </div>

                    <div className="labelInput">
                        <label htmlFor="">Genero:</label> 
                        <select name="generos" id="generos"><option></option></select>
                    </div>

                    <div className="labelInput">
                        <label htmlFor="">Plataforma:</label> 
                        <select name="generos" id="generos"><option></option></select>
                    </div>

                </section>

                <section className="container2">
                    
                    <div className="boxColumn">
                        <label htmlFor="">Descrição</label>             
                        <textarea name="" id="" cols="43" rows="8"></textarea> 
                    </div>

                    <div className="boxColumn">
                        <label htmlFor="">Requisitos Minimos</label>    
                        <textarea name="" id="" cols="43" rows="8"></textarea>
                    </div>

                    <div className="boxColumn">
                        <label htmlFor="">Imagem</label>                
                        <textarea name="" id="" cols="20" rows="10"></textarea>
                    </div>

                </section>

                <section className="container3">

                    <div className="labelInput">
                        <label>Disponivel:</label>                         
                        <select name="generos" id="generos"><option></option></select>
                    </div>
                    <div className="labelInput">
                        <label htmlFor="">Valor</label>                    
                        <InputCadastro/>
                    </div>
                    <div className="labelInput">
                        <label htmlFor="">Quantidade</label>               
                        <InputCadastro/>
                    </div>

                </section>
                <section className="faixa-botao"><button>Cadastrar Jogo</button></section>
                
            </section>
        </main>
    )

}