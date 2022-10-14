import './index.scss';
import HeaderLoja from '../../../components/headerLoja';

export default function GuiaRodape(){
    return (
        <main className='page-ajuda'>
            <HeaderLoja/>

            <section className='conteiner-rodape-1'>
             <div className='item-1'><img src='/tv.png' alt='tv'/></div> 
             <div className='item-2'>
                <h1 >Você está na Store Games</h1>
                
             <p>Sua loja digital e plataforma gamer para PC, Consoles e Mobile. Com a Store Games você vai descobrir, comprar e gerenciar os seus jogos.</p>
             </div>
            </section>

            <section className='conteiner-rodape-2'>
              
                   <div className='subconteiner-1'>
                   <img src='/imagem1.png' alt='img'/>
                    <div>
                    <h1 className='tituloh1'>Grande catálogo</h1>
                   <p className='descricao'>Contamos com milhares de jogos diretamente das maiores produtoras do mundo, incluindo lançamentos, pré-vendas e os títulos e franquias mais famosos e amados.</p>
                    </div>
                   

                   <img src='/imagem2.png' alt='img'/>
                    <div>
                    <h1 className='tituloh1'>Global e local</h1>
                   <p className='descricao'>Nosso objetivo é ser local, criando e oferecendo conteúdo e campanhas únicos, localização e preços especiais para cada região onde estivermos presentes.</p>
                    </div>
                    </div>

                    <div className='subconteiner-1'>
                   <img src='/imagem3.png' alt='img'/>
                    <div>
                    <h1 className='tituloh1'>Suporte de verdade</h1>
                   <p className='descricao'>No nosso suporte temos jogadores reais e apaixonados, fazendo de tudo para ajudá-lo em caso de problemas ou dúvidas. Seu contato é sempre tratado com carinho.</p>
                    </div>
                   
                   <img src='/imagem4.png' alt='img'/>
                    <div>
                    <h1 className='tituloh1'>Sempre disponível</h1>
                   <p className='descricao'>Seu conteúdo sempre disponível. Acesse sua conta, encontre seus jogos, gerencie sua biblioteca e aproveite tudo que oferecemos, feito a mão só para você.</p>
                    </div>
                    </div>
                </section>

                <section className='conteiner-rodape-3'>
                    <div>  <h1 className='titulo-rodape'>Nossa missão</h1></div>
                    <p className='info'>A Store Games tem o objetivo de facilitar a entrada de produtoras e desenvolvedores em mercados locais de jogos, com um custo menor do que o praticado em qualquer loja física.</p>
                    <p className='info'> Desenvolvedores de todos os portes e do mundo todo, podem apresentar e vender suas criações para o nosso público.</p>
                </section>

                <section className='conteiner-rodape-4'>
                    <div > <h1 className='titulo-rodape'>Como funciona?</h1></div>

                    <div className='subconteiner-2'>
                        <div className='div1'>
                            <img  className='imgs' src='/imagem5.png' alt='img'></img>
                            <p className='guia'>Adicione os games ao carrinho e pague com toda a segurança.</p>
                        </div>

                        <div className='div1'>
                            <img  className='imgs' src='/imagem6.png' alt='img'></img>
                            <p className='guia'>Vá para a sua conta para acessar seus jogos.</p>
                        </div>

                        <div className='div1'>
                            <img className='imgs' src='/imagem7.png' alt='img'></img>
                            <p className='guia'>Instale seu game no seu computador e comece a jogar!</p>
                        </div>
                    </div>

                    <h1 className='desc'>Compre e reúna os melhores games em um único lugar, com praticidade, rapidez e sem gastar muito! Procure, descubra, tenha a seu alcance os títulos das maiores produtoras do mundo e os principais lançamentos indies.</h1>

                </section>
                   

                   

                

                
            
        </main>
    )
}