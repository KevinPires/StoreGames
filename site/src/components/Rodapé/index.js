import './index.scss'

export default function Rodape(){
    return (
        <main className='page-rodape'>
            <section className='conteiner-0'>
            <div>  <img className='ajuste' src='/logoOrigin.png' alt='opa'/></div>
            </section>
        

         <section className='conteiner-1'>
        
           <div className='caixa-1'> Storegames@gmail.com</div>
           <div className='caixa-2'> Fale conosco</div>
         </section>

         <section className='conteiner-2'>
            
            <div className='coluna-1'> <h1>Início</h1> Home <p>Link</p></div>
            <div className='coluna-1'> <h1>Sobre nós</h1> Informações <p> Contato</p></div>
            <div  className='coluna-1'> <h1>Suporte</h1> Telefone <p>Ajuda</p></div>
            <div> <img className='tamanho' src='/face.png' alt='opa'/> 
                  <img className='tamanho' src='/zapp.png' alt='opa'/>
                  <img className='tamanho' src='/twiter.png' alt='opa'/>
            </div>
         </section>

         <section className='final'>
            <div className='barra-final'>  © 2022 Copyright - StoreGames </div>
         </section>
        </main>
    )
}