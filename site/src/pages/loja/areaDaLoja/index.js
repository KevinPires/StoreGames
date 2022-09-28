import BarraVantagens  from '../../../components/TelaDeJogos/vantagens'
import HeaderLoja from '../../../components/headerLoja'
import './index.scss'

export default function lojaArea () {

    return (
        <main className="lojaPage">
            <HeaderLoja/>

            <section className="faixaum">  
                <p>Compre o seu jogo aqui</p>
            </section>
           <BarraVantagens/>
        </main>
    )
}