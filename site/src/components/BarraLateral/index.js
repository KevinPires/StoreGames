import './index.scss';
import { useNavigate } from 'react-router-dom'
import {  useEffect } from 'react'
import storage from 'local-storage'




export default function BarraLateral(){

    useEffect(() => {
        if (!storage('usuario-logado')){
            navigate('/');
        }
      }, [])


    const navigate = useNavigate();
 
        function sairClick(){
        storage.remove('usuario-logado');
        navigate('/');
    }
    return(
        <nav className="comp-menu">
        <div>


            <div className='menu-items'>
                <div >
                    <img className='img' src="/Casas.png" alt="home" />
                    <div>Home</div>
                </div>
                <div >
                    <img className='img' src="/mais.png" alt="cadastrar" />
                    <div>Cadastrar o jogo</div>
                </div>
                <div>
                    <img className='img' src="/lup.png" alt="consultar" />
                    <div>Consultar Pedidos</div>
                </div>
                <div>
                    <img className='img' src="/pendentes.png" alt="consultar" />
                    <div>Pedidos pendentes</div>
                </div>
                <div>
                    <img className='img' src="/concluido.png" alt="consultar" />
                    <div>Pedidos concluidos</div>
                </div>
            </div>
        </div>

        <div className='menu-items'>
            <div onClick={sairClick} >
                <img  className='img' src="/sair.png" alt="consultar" />
                <div>Sair</div>
            </div>
        </div>
    </nav>
    )
}