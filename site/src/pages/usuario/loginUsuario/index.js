import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom'


export default function LoginUsuario (){
    return(
        <main className="cont">
            <div className="cont-card">
                <h1>Iniciar Sessão </h1>
                
                <div className='cont-input'>
                    <input type='txt' placeholder='Email'/>
                    <input type='password' placeholder='Senha'/>
                </div>
            
                <div className="cont-button">
                    <div style={{marginTop: '15px'}}>
                        <input type="checkbox"/>
                        <label style={{color:'#6A6A6A'}} > Lembrar me </label>
                    </div>
            
                    <button> Login </button>
                </div>

                <div className='cont-link'>
                    <p>Não consegue fazer login?</p>
                     <Link to='/usuario/cadastro' className='link'> <p>Criar conta</p></Link>
                </div>
               

            </div>
        </main>
    );
   
}