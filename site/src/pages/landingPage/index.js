import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom'
import HeaderLoja from '../../components/headerLoja'
import CardJogo from '../../components/cardJogo'
import { useEffect, useState } from 'react';
import { listarJogosDestaque } from '../../api/jogos';
import Rodape from '../../components/Rodapé';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function LandingPage() {

    const [jogos, setJogos] = useState([]);
    const [jogofinal, setJogoFinal] = useState(4)
    const currentJogos = jogos.slice(0, jogofinal);
    

    const [exibirfaixa, setExibirFaixa] = useState('faixa-dois')

    function exibirMais() {
        setExibirFaixa('faixa-dois-expandida') 
        setJogoFinal(10)
    }

  useEffect(() => {
    AOS.init({duration : 2500})
  }, [])

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

            <section data-aos="fade-up" className='faixa-um'>

                <div data-aos="slide-up" className="listra">
                    <img id='listra-menor' src="/listramenor.png" alt="" />
                </div>

                <div className="box-texto">

                    <div className="f1-texto-format">
                        <h1 data-aos="slide-up" className='f1-title-format'>Seu novo jogo te espera aqui!</h1>
                        <p data-aos="slide-up">Acesse agora nossa loja e garanta seu produto com o melhor preço!</p>
                        <button data-aos="zoom-in" ><Link className='b1' to="/jogos">Ir para Loja</Link></button>
                    </div>

                </div>

                <div data-aos="slide-right" className="listra-maiorr">
                    <img id='listra-maior'src="./listramaior.svg" alt="" />
                </div>

            </section>

            <section  className={exibirfaixa}>

                <div className="f2-texto-format">
                    <h1 data-aos="slide-up">Jogos mais vendidos</h1>
                    <p  data-aos="slide-up">Veja os jogos mais vendidos!</p>
                </div>

                <div className="container-jogos">
                    <CardJogo jogo={jogos} jogos={currentJogos}/>
                </div>
        
                <button data-aos="zoom-in" onClick={exibirMais}><b>Mostrar mais</b></button>

                <hr data-aos="fade" />

            </section>  

            <section data-aos="fade-up" className="faixa-tres">
                <div className="container-hermes">
                    <img data-aos="slide-up" src="/hermes.png" alt="" />
                </div>
                
                <div data-aos="fade" className="box-texto-f3">
                    <div className="f3-texto-format ">
                        <h1 data-aos="slide-right">Rapidez e eficiência</h1>
                        <p data-aos="slide-up">Nós da GamesStore somos líder em eficiência e agilidade na entrega do seu produto. Contamos com nossos Super-heróis mais velozes para as suas entregas.</p>
                        <p data-aos="slide-up">Turbine suas entregas comprando conosco e receba seus produtos antes mesmo do flash conseguir atravessar a rua.</p>
                    </div>
                </div>

            </section>

            <section className='jogos-populares'>
                <div className='titulo-jogos'>
                <div><h1 data-aos="slide-right">Jogos mais jogados</h1></div>
                <div><p data-aos="slide-up">Explore nossa biblioteca com os jogos mais </p></div>
                </div>
                

                <div className='alinhamento-jogos'>

                    <div><img src='/seta.png' alt='seta'/></div>

                    <div><img className='jogo-card' src='/jogo.jpg' alt='jogo'/></div>
                    <div><img className='jogo-card' src='/mine.jpg' alt='jogo'/></div>
                    <div><img className='jogo-card' src='/dayz.jpg' alt='jogo'/></div>
                    <div><img className='jogo-card' src='/nba.jpg' alt='jogo'/></div>
                    

                    <div><img src='/seta.png' alt='seta2'/></div>

                </div>
            </section>

            <section data-aos="fade" className="faixa-cadastro">
                <div data-aos="zoom-in" className="container-lobo">
                <Link to='/usuario/cadastro'><button data-aos="fade" ><b>Cadastre-se agora!</b></button></Link>
                </div>

                <div data-aos="slide-up" className="container-boxs">
                    <div className="box-esquerda">
                        <img id='img-format-boxes' src="/computador.png" alt="computador com teclado e mouse" />
                        <div className="box-esquerda-texto">
                            <h1 data-aos="slide-up">Acompanhe o mundo</h1>
                            <p data-aos="slide-down">Encontre os melhores jogos atuais</p>
                        </div>
                    </div>
                    <div className="box-direita">
                        <img id='img-format-boxes' src="/controle.png" alt="" />
                        <div className="box-direito-texto">
                            <h1 data-aos="slide-up">Explore as possibilidades!</h1>
                            <p data-aos="slide-up">Ofertas imperdiveis!</p>
                        </div>
                    </div>
                </div>
            </section> 

            <section data-aos="fade-up" className="descontos flexboxcolumn">
                <h1 data-aos="slide-down">Não perca os melhores descontos!</h1>
                <Link to='/usuario/cadastro'><button><b>Cadastre-se agora!</b></button></Link>
            </section>

        <Rodape/>
        </main>
    )
}