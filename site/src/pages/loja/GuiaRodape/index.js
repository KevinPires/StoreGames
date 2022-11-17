import './index.scss';
import HeaderLoja from '../../../components/headerLoja';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function GuiaRodape(){

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <main className='page-ajuda'>
            <HeaderLoja/>

            <section   className='conteiner-rodape-1'>
             <div className='item-1'><img src='/tv.png' alt='tv'/></div> 
             <div className='item-2'>
                <h1 data-aos="slide-up">Você está na Store Games</h1>
                
             <p data-aos="slide-up">Sua loja digital e plataforma gamer para PC, Consoles e Mobile. Com a Store Games você vai descobrir, comprar e gerenciar os seus jogos.</p>
             </div>
            </section>

            <section  className='conteiner-rodape-2'>
              
                   <div data-aos="slide-right" className='subconteiner-1'>
                   <img data-aos="slide-up" className='imgs' src='/imagem1.png' alt='img'/>
                    <div>
                    <h1 data-aos="slide-up" className='tituloh1'>Grande catálogo</h1>
                   <p data-aos="slide-up" className='descricao'>Contamos com milhares de jogos diretamente das maiores produtoras do mundo, incluindo lançamentos, pré-vendas e os títulos e franquias mais famosos e amados.</p>
                    </div>
                   

                   <img data-aos="slide-up" className='imgs' src='/imagem2.png' alt='img'/>
                    <div>
                    <h1 data-aos="slide-up" className='tituloh1'>Global e local</h1>
                   <p data-aos="slide-up" className='descricao'>Nosso objetivo é ser local, criando e oferecendo conteúdo e campanhas únicos, localização e preços especiais para cada região onde estivermos presentes.</p>
                    </div>
                    </div>

                    <div className='subconteiner-1'>
                   <img data-aos="slide-up" className='imgs' src='/imagem3.png' alt='img'/>
                    <div>
                    <h1 data-aos="slide-up" className='tituloh1'>Suporte de verdade</h1>
                   <p data-aos="slide-up" className='descricao'>No nosso suporte temos jogadores reais e apaixonados, fazendo de tudo para ajudá-lo em caso de problemas ou dúvidas. Seu contato é sempre tratado com carinho.</p>
                    </div>
                   
                   <img data-aos="slide-up" className='imgs' src='/imagem4.png' alt='img'/>
                    <div>
                    <h1 data-aos="slide-up" className='tituloh1'>Sempre disponível</h1>
                   <p data-aos="slide-up" className='descricao'>Seu conteúdo sempre disponível. Acesse sua conta, encontre seus jogos, gerencie sua biblioteca e aproveite tudo que oferecemos, feito a mão só para você.</p>
                    </div>
                    </div>
                </section>

                <section   className='conteiner-rodape-3'>
                    <div data-aos="fade-up">  <h1 className='titulo-rodape'>Nossa missão</h1></div>
                    <p data-aos="slide-up" className='info'>A Store Games tem o objetivo de facilitar a entrada de produtoras e desenvolvedores em mercados locais de jogos, com um custo menor do que o praticado em qualquer loja física.</p>
                    <p data-aos="slide-up" className='info'> Desenvolvedores de todos os portes e do mundo todo, podem apresentar e vender suas criações para o nosso público.</p>
                </section>

                <section  className='conteiner-rodape-4'>
                    <div > <h1   data-aos="fade-up" className='titulo-rodape'>Como funciona?</h1></div>

                    <div className='subconteiner-2'>
                        <div className='div1'>
                            <img data-aos="fade-up" className='imgs' src='/imagem5.png' alt='img'></img>
                            <p  data-aos="fade-up" className='guia'>Adicione os games ao carrinho e pague com toda a segurança.</p>
                        </div>

                        <div className='div1'>
                            <img data-aos="fade-up" className='imgs' src='/imagem6.png' alt='img'></img>
                            <p data-aos="fade-up" className='guia'>Vá para a sua conta para acessar seus jogos.</p>
                        </div>

                        <div className='div1'>
                            <img data-aos="fade-up" className='imgs' src='/imagem7.png' alt='img'></img>
                            <p data-aos="fade-up" className='guia'>Instale seu game no seu computador e comece a jogar!</p>
                        </div>
                    </div>

                    <h1 data-aos="fade-up" className='desc'>Compre e reúna os melhores games em um único lugar, com praticidade, rapidez e sem gastar muito! Procure, descubra, tenha a seu alcance os títulos das maiores produtoras do mundo e os principais lançamentos indies.</h1>

                </section>
                   
               <section  className='conteiner-final'>
                <h1  data-aos="slide-up" className='text-h1'>Tem dúvidas? Você pode obter muito mais informações com nossos contatos:</h1>
                < hr/>
                <div className='subcont-final'>

                    <div className='colum1'>
                        <img  src='/logoOrigin.png' data-aos="slide-up" alt='k'></img>
                    </div>

                    <div className='colum2'>
                     <p className='redes'>Whatsapp:  (11) 5662-2731</p>
                     <p className='redes'>Facebook:  www.facebook.com/StoreGames</p>
                     <p className='redes'>Twitter:  www.twitter.com/@StoreGames</p>
                    </div>

                    <div className='colum3'>
                     <p className='redes'>Email: storegames@gmail.com</p>
                     <p className='redes'> Rua Lauro Müller - Rio de Janeiro </p>
                     <p className='redes'>Telefone: 4002-8622</p>
                    </div>
                </div>
               </section>
                   

                

                
            
        </main>
    )
}