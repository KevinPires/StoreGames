import './index.scss'
import '../../../common/common.scss';

import LoadingBar from 'react-top-loading-bar';
import { useState , useRef } from 'react';
import { Link } from 'react-router-dom';
import {loginUsuario} from '../../../api/usuario';
import { useNavigate } from 'react-router-dom';

import Storage from 'local-storage'



export default function LoginUsuario (){
    const [email, setEmail] =useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState ('');
    const [carregando, setCarrengando] = useState(false);
 

    const navigate = useNavigate();
    const ref = useRef();   
    
    async function botaoLogin(){
        ref.current.continuousStart()
        setCarrengando(true)
        try {
            const r = await loginUsuario(email, senha);
             Storage('usuario-logado', r )
            if( r.status === 401){
                setErro(r.data.erro)
            }else{
                setTimeout(()=>{
                    navigate(`/loja`)
                }, 3000)
            }

        } catch (err) {
            ref.current.complete()
            setCarrengando(false)
            setErro(err.response.data.erro)
        }
    }
    return(
        <main className="cont">
            <LoadingBar color="red" ref={ref}/>
            <div className="cont-card">
                <h1>Iniciar Sessão </h1>
                
                <div className='cont-input'>
                    <input type='txt' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>
                </div>
            
                <div className="cont-button">
                    <div style={{marginTop: '15px'}}>
                        <input type="checkbox"/>
                        <label style={{color:'#6A6A6A'}} > Lembrar me </label>
                    </div>
            
                    <button onClick={botaoLogin} disabled={carregando}> Login </button>
                </div>
                <div className='msg-Erro'>
                    {erro}
                </div>

                <div className='cont-link'>
                    <p>Não consegue fazer login?</p>
                     <Link to='/usuario/cadastro' className='link'> <p>Criar conta</p></Link>
                </div>
               

            </div>
        </main>
    );
   
}