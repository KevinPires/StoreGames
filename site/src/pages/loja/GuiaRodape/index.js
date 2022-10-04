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
                   <img src='' alt='img'/>
                   <h1>Grande catálogo</h1>
                   <p>Contamos com milhares de jogos diretamente das maiores produtoras do mundo, incluindo lançamentos, pré-vendas e os títulos e franquias mais famosos e amados.</p>
                   
                   <img src='' alt='img'/>
                   <h1>Global e local</h1>
                   <p>Nosso objetivo é ser local, criando e oferecendo conteúdo e campanhas únicos, localização e preços especiais para cada região onde estivermos presentes.</p>

                </div>

                <div className='item-4'>

                </div>
            </section>
        </main>
    )
}