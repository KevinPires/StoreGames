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
import { useNavigate } from 'react-router-dom'




export default function LandingPage() {

    const Navigate = useNavigate()

    const [jogos, setJogos] = useState([]);
    const [jogofinal, setJogoFinal] = useState(4)
    const currentJogos = jogos.slice(0, jogofinal);


    const [exibirfaixa, setExibirFaixa] = useState('faixa-dois')


    let count = 0;
    function nextImage() {
        if (count > 4) {
            count = 0;
        }
        count++
        document.getElementById("radio" + count).checked = true;
    }

    useEffect(() => {
        const interval = setInterval(function () {
            nextImage();
        }, 2500);

        return () => clearInterval(interval);
    }, [])

    

    // Provavelmenmte a pagina n vai carregar por causa dessa função em cima, qualquer coisa so comentar

    function exibirMais() {
        setExibirFaixa('faixa-dois-expandida')
        setJogoFinal(10)
    }

    useEffect(() => {
        AOS.init({ duration: 2000 })
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
            <HeaderLoja />

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
                    <img id='listra-maior' src="./listramaior.svg" alt="" />
                </div>

            </section>

            <section className={exibirfaixa}>

                <div className="f2-texto-format">
                    <h1 data-aos="slide-up">Jogos mais vendidos</h1>
                    <p data-aos="slide-up">Veja os jogos mais vendidos!</p>
                </div>

                <div className="container-jogos">
                    <CardJogo jogo={jogos} jogos={currentJogos} />
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
                    <div><p data-aos="slide-up">Explore nossa biblioteca com os jogos mais populares! </p></div>
                </div>

                <div className='slider'>

                    <div className='slides'>

                        <input type='radio' name='radio-btn' id='radio1' />
                        <input type='radio' name='radio-btn' id='radio2' />
                        <input type='radio' name='radio-btn' id='radio3' />
                        <input type='radio' name='radio-btn' id='radio4' />

                        <div className='slide-frist' onClick={() => Navigate('/produto/1/detalhe')}>
                            <img src='/roct.jpg' alt='img1' />
                        </div>

                        <div className='slide' onClick={() => Navigate('/produto/2/detalhe')}>
                            <img src='/min.jpg' alt='img2' />
                        </div>

                        <div className='slide' onClick={() => Navigate('/produto/3/detalhe')}>
                            <img src='/ride.jpg' alt='img3' />
                        </div>

                        <div className='slide' onClick={() => Navigate('/produto/4/detalhe')}>
                            <img src='/fafi.jpg' alt='img4' />
                        </div>

                        <div className='navigation-auto'>
                            <div className='auto-btn1'></div>
                            <div className='auto-btn2'></div>
                            <div className='auto-btn3'></div>
                            <div className='auto-btn4'></div>
                        </div>
                    </div>

                    <div className='manual-navigation'>
                        <label for='radio1' className='manual-btn'></label>
                        <label for='radio2' className='manual-btn'></label>
                        <label for='radio3' className='manual-btn'></label>
                        <label for='radio4' className='manual-btn'></label>
                    </div>
                </div>





            </section>

            <section className="faixa-cadastro">
                <div className="container-lobo">
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

            <Rodape />
        </main>
    )
}