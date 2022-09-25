import { Link } from 'react-router-dom'
import './index.scss'


export default function CadastroUsuario() {
    return(
        <main className='page-usuario-cadastro'>

            <section className='conteiner-page-1'>
             <div className='titulo'> <h1>Já possui conta?</h1></div>
             <div className='subtitulo'>Caso já possua uma conta, realize o login pressionando o botão abaixo</div>
             <Link to='/usuario/login' className='botaodiv'> <button className='botao'><b>Realizar Login</b></button></Link>
            </section>

            <section className='conteiner-page-2'>
                <div className='titulo2'> <h1>Criar conta</h1> </div>

                <div className='boxtext'><input placeholder='Nome' type='text' className='textbox'></input ></div>
                <div className='boxtext'><input placeholder='Email' type='text' className='textbox'></input ></div>
                <div className='boxtext'><input placeholder='Senha' type='text' className='textbox'></input ></div>
                <div className='boxtext'><input placeholder='Cep' type='text' className='textbox'></input ></div>
                <div className='boxtext'><input placeholder='Data de nascimento' type='text' className='textbox'></input ></div>
                <div className='boxtext'><input placeholder='CPF' type='text' className='textbox'></input ></div>
                <button className='botao2'>Cadastrar</button>
             </section>
        </main>
    )
}