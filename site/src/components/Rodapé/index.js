import './index.scss'

export default function Rodape(){
    return (
       
        <main className='page-rodape'>
             
            <section className='conteiner-0'>
            <div className='caixa-1'> Storegames@gmail.com</div>
           <div className='caixa-2'> Fale conosco</div>
            </section>
        

         <section className='conteiner-1'>
        
           
           <div>  <img className='ajuste' src='/logoOrigin.png' alt='opa'/></div>

           <div className='coluna-1'> <h1>Início</h1> <p>Home</p> <p>Link</p></div>
            <div className='coluna-1'> <h1>Sobre nós</h1> <p>Informações </p><p> Contato</p></div>
            <div  className='coluna-1'> <h1>Suporte</h1> <p>Telefone</p> <p>Ajuda</p></div>


              <div className='redes-sociais'>
                <div className='facebox'> <img className='face' src='/face.png' alt='opa'/> </div>
                <div className='zapbox'> <img className='zap' src='/zap.zap.png' alt='opa'/> </div>
                <div className='twiterbox'> <img className='twiter' src='/twiterr.png' alt='opa'/> </div>
            </div>
         </section>

       
            
            
         

         <section className='final'>
            <div className='barra-final'>  © 2022 Copyright - Store Games </div>
         </section>
        </main>
    )
}