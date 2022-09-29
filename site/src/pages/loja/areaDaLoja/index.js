import BarraVantagens  from '../../../components/TelaDeJogos/vantagens'
import HeaderLoja from '../../../components/headerLoja'
import './index.scss'
import '../../../common/common.scss'
import CardJogo from '../../../components/cardJogo'

export default function lojaArea () {

    return (
        <main className="lojaPage">
            <HeaderLoja/>

            <section className="faixaum">  
                <p>Compre o seu jogo aqui</p>
            </section>

           <BarraVantagens/>
            <section className='container flexboxrow'>
                <div className="container-filtros">

                </div>

                <div className='container-jogos'>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                </div>
            </section>

        </main>
    )
}