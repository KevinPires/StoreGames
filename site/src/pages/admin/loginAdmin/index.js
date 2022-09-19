import './index.scss';


import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../api/loginApi';
import storage from 'local-storage'


export default function LoginAdmin(){
    const [logar, setLogar] = useState (''); 
    const [senha, setSenha] = useState ('');
    const [erro, setErro] = useState ('');
    const [carregando, setCarregando] = useState (false);

    const navigate = useNavigate();
    const ref = useRef();

  

    async function entrarClick(){
            ref.current.continuousStart();
            setCarregando(true);
       
        try{
            const r = await login(logar, senha)
            storage('usuario-logado', r);
            
            setTimeout(() => {
                navigate('/admin/home');
            }, 3000)
    
        }
    
        catch(err) {
            ref.current.complete();
            setCarregando(false);
            if (err.response.status === 401){
                setErro(err.response.data.erro)
            }
        }
    }

    useEffect(()=> {
        if  (storage ('usuario-logado')){
            navigate('/admin/home');
        }
      }, [])
   


    return (

    <main className="login-admin-page">
        <LoadingBar color='#f11946' ref={ref} />
        <section className="containerLogin">
            <h1><span>Área Administrativa</span></h1>

            <div className="container-row">

                <div className="boxInputs">

                    <input placeholder='login' className="input-login-format" type='txt' value={logar} onChange={e => setLogar(e.target.value )}/>
                    <input placeholder='senha' className='input-login-format' type='password' value={senha} onChange={e => setSenha(e.target.value )}/> 
                   
                <div className="row">
                    <p>Lembrar-me</p> 
                    <button id="botao-login" onClick={entrarClick} disabled={carregando}>Login</button>
                </div>
                    
                </div>
                <img id="logo-login" src="./logo.png" alt="logo" />
            </div>
            <div>
                {erro}
            </div>

           


        </section>



    </main>

  
    )
} 