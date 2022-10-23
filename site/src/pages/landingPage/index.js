import './index.scss'
import '../../common/common.scss'
import HeaderLoja from '../../components/headerLoja'
import CardJogo from '../../components/cardJogo'
import { useEffect, useState } from 'react';
import { listarJogosDestaque, listarTodosJogos } from '../../api/jogos';

export default function LandingPage() {

    const [jogos, setJogos] = useState([]);
    const [jogofinal, setJogoFinal] = useState(4)
    const currentJogos = jogos.slice(0, jogofinal);
    

    const [exibirfaixa, setExibirFaixa] = useState('faixa-dois')

    function exibirMais() {
        setExibirFaixa('faixa-dois-expandida') 
        setJogoFinal(10)
    }

    console.log(jogos)

    async function mostrarJogo() {
        const x = await listarJogosDestaque()
        setJogos(x)
    }

    useEffect(() => {
        mostrarJogo()
    }, [])
    
    return (
        <main className='landing-page'>
            <HeaderLoja/>

            <section className='faixa-um'>

                <div className="listra">
                    <img id='listra-menor' src="/listramenor.png" alt="" />
                </div>

                <div className="box-texto">

                    <div className="f1-texto-format">
                        <h1>Seu novo jogo te espera aqui!</h1>
                        <p>Acesse agora nossa loja e garanta seu produto com o melhor preço!</p>
                        <button>Ir para Loja</button>
                    </div>

                </div>

                <div className="listra-maiorr">
                    <img id='listra-maior'src="./listramaior.svg" alt="" />
                </div>

            </section>

            <section className={exibirfaixa}>

                <div className="f2-texto-format">
                    <h1>Jogos mais vendidos</h1>
                    <p>Veja os jogos mais vendidos!</p>
                </div>

                <div className="container-jogos">
                    <CardJogo jogo={jogos} jogos={currentJogos}/>

                </div>
        
                <button onClick={exibirMais}><b>Mostrar mais</b></button>

                <hr/>
            </section>

            <section className="faixa-tres">

                <img src="/hermes.png" alt="" />

                <div className="box-texto-f3">
                    <div className="f3-texto-format ">
                        <h1>Rapidez e eficiência</h1>
                        <p>Nós da GamesStore somos líder em eficiência e agilidade na entrega do seu produto. Contamos com nossos Super-heróis mais velozes para as suas entregas.</p>
                        <p>Turbine suas entregas comprando com a gente e receba seus produtos antes mesmo do flash conseguir atravessar a rua.</p>
                    </div>
                </div>


            </section>

        </main>
    )
}