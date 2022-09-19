import './index.scss'
import '../../../common/common.scss'


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
                    <p>Criar conta</p>
                </div>
               

            </div>
        </main>
    );
   
}