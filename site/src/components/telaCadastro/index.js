import './index.scss'
import InputLogin from '../inputLogin'
import InputCadastro from '../inputCadastro'
export default function TelaCadastro() {



    return(

        <main className="pageCadastro">
            <section className="containerCadastrar">
                <section className="header">
                    <p>Cadastrar Jogos</p>
                </section>

                <section className="container1">
                    <InputCadastro></InputCadastro>
                </section>

                <section className="container2">

                </section>

                <section className="container3">

                </section>
                <button>Cadastrar Jogo</button>
            </section>
        </main>
    )

}