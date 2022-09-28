
import HeaderLoja from '../../../components/headerLoja'
import './index.scss'

export default function lojaArea () {

    return (
        <main className="lojaPage">
            <HeaderLoja/>

            <section className="faixaum">
                <div className='texto-faixaum'>
                    <p>Compre o seu jogo aqui!</p>
                </div>
               
            </section>
        </main>
    )
}