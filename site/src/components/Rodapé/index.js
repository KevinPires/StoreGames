import { Link } from 'react-router-dom'
import './index.scss'

export default function Rodape(){
    return (
       
        <main className='page-rodape'>
             
            <section className='conteiner-0'>
            <div className='caixa-1'> Storegames@gmail.com</div>
           <Link to='/ajuda' className='caixa-2'> Fale conosco</Link>
            </section>
        

         <section className='conteiner-1'>
        
           
           <div>  <img className='logo-rodape' src='/logoOrigin.png' alt='opa'/></div>

           <div className='coluna-1'> <h1>Início</h1> <Link to='/' className='links'>Home</Link> <Link to='/ajuda' className='links'>Links</Link></div>
            <div className='coluna-1'> <h1>Sobre</h1> <Link to='/ajuda' className='links'>Informações</Link> <Link to='/ajuda' className='links'>Contatos</Link></div>
            <div  className='coluna-1'> <h1>Suporte</h1> <Link to='/ajuda' className='links'>Telefone</Link> <Link to='/ajuda' className='links'>Ajuda</Link></div>

              <div className='redes-sociais'>
                <Link to='/ajuda' className='facebox'> <img className='face' src='/face.png' alt='opa'/> </Link>
                <Link to='/ajuda' className='zapbox'> <img className='zap' src='/f.png' alt='opa'/> </Link>
                <Link to='/ajuda' className='twiterbox'> <img className='twiter' src='/twiterr.png' alt='opa'/> </Link>
            </div>
         </section>

       
            
            
         

         <section className='final'>
            <div className='barra-final'>  © 2022 Copyright - Store Games </div>
         </section>
        </main>
    )
}
