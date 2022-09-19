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

        <div className='menu-items'>
        <div >
                <img  className='img' src="/casa.png" alt="consultar" />
                <div className='texto'>Home</div>
        </div>
        </div>

        <div className='menu-items'>
        <div >
                <img  className='img' src="/mais.png" alt="consultar" />
                <div className='texto'>Cadastar o jogo</div>
        </div>
        </div>

        <div className='menu-items'>
        <div >
                <img  className='img' src="/lup.png" alt="consultar" />
                <div className='texto'>Consultar pedidos</div>
        </div>
        </div>

        <div className='menu-items'>
        <div >
                <img  className='img' src="/pendencia.png" alt="consultar" />
                <div className='texto'>Pedidos pendentes</div>
        </div>
        </div>

        <div className='menu-items'>
        <div >
                <img  className='img' src="/concluidos.png" alt="consultar" />
                <div className='texto'>Pedidos concluidos</div>
        </div>
        </div>

        <div className='menu-items'>
            <div onClick={sairClick} >
                <img  className='img' src="/sair.png" alt="consultar" />
                <div className='texto'>Sair</div>
            </div>
        </div>
    </nav>
    )
}