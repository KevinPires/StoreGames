import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom'
import HeaderLoja from '../../components/headerLoja'
import CardJogo from '../../components/cardJogo'
import { useEffect, useState } from 'react';
import { listarJogosDestaque, listarTodosJogos } from '../../api/jogos';
import Rodape from '../../components/Rodapé';


export default function LandingPage() {

    const [jogos, setJogos] = useState([]);
    const [jogofinal, setJogoFinal] = useState(4)
    const currentJogos = jogos.slice(0, jogofinal);
    

    const [exibirfaixa, setExibirFaixa] = useState('faixa-dois')

    function exibirMais() {
        setExibirFaixa('faixa-dois-expandida') 
        setJogoFinal(10)
    }

  

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
                        <button ><Link className='b1' to="/jogos">Ir para Loja</Link></button>
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
                <div className="container-hermes">
                    <img src="/hermes.png" alt="" />
                </div>
                
                <div className="box-texto-f3">
                    <div className="f3-texto-format ">
                        <h1>Rapidez e eficiência</h1>
                        <p>Nós da GamesStore somos líder em eficiência e agilidade na entrega do seu produto. Contamos com nossos Super-heróis mais velozes para as suas entregas.</p>
                        <p>Turbine suas entregas comprando com a gente e receba seus produtos antes mesmo do flash conseguir atravessar a rua.</p>
                    </div>
                </div>

            </section>

            <section className="faixa-cadastro">
                <div className="container-lobo">
                <Link to='/usuario/cadastro'><button><b>Cadastre-se agora!</b></button></Link>
                </div>

                <div className="container-boxs">
                    <div className="box-esquerda">
                        <img id='img-format-boxes' src="/computador.png" alt="computador com teclado e mouse" />
                        <div className="box-esquerda-texto">
                            <h1>Acompanhe o mundo</h1>
                            <p>Encontre os melhores jogos atuais</p>
                        </div>
                    </div>
                    <div className="box-direita">
                        <img id='img-format-boxes' src="/controle.png" alt="" />
                        <div className="box-direito-texto">
                            <h1>Explore as possibilidades!</h1>
                            <p>Ofertas imperdiveis!</p>
                        </div>
                    </div>
                </div>
            </section> 

            <section className="descontos flexboxcolumn">
                <h1>Não perca os melhores descontos!</h1>
                <Link to='/usuario/cadastro'><button><b>Cadastre-se agora!</b></button></Link>
            </section>

        <Rodape/>
        </main>
    )
}