import './index.scss';
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import storage from 'local-storage'




export default function BarraLateral(props) {

    useEffect(() => {
        if (!storage('admin-logado')) {
            navigate('/');
        }
    }, [])


    const navigate = useNavigate();

    function sairClick() {
        storage.remove('admin-logado');
        navigate('/');
    }



    function vereficarMenuSelecionado(menu) {
        if (menu === props.selecionado)
            return 'selecionado'
        else
            return '';
    }

    return (
        <nav className="comp-menu">

            <div className='menu-items'>
                <Link to='/admin/home' className={vereficarMenuSelecionado('home')}>
                    <img className='img' src="/casa.png" alt="consultar" />
                    <div className='texto'>Home</div>
                </Link>
            </div>

            <div className='menu-items'>
                <Link to='/admin/cadastro' className={vereficarMenuSelecionado('cadastrar')}>
                    <img className='img' src="/mais.png" alt="consultar" />
                    <div className='texto'>Cadastar o jogo</div>
                </Link>
            </div>

            <div className='menu-items'>
                <Link to='/admin/consulta' className={vereficarMenuSelecionado('consultar')}>
                    <img className='img' src="/lup.png" alt="consultar" />
                    <div className='texto'>Consultar jogos</div>
                </Link>
            </div>

            <div className='menu-items'>
                <Link to='/admin/pendentes' className={vereficarMenuSelecionado('pendencias')}>
                    <img className='img' src="/pendencia.png" alt="consultar" />
                    <p className='texto'>Pedidos pendentes</p>
                </Link>
            </div>

            <div className='menu-items'>
                <Link to='/admin/concluidos' className={vereficarMenuSelecionado('concluidos')}>
                    <img className='img' src="/checkedsemfundo.svg" alt="consultar" />
                    <div className='texto'>Pedidos concluidos</div>
                </Link>
            </div>

            <div className='menu-items'>
                <a onClick={sairClick} >
                    <img className='img' src="/sair.png" alt="consultar" />
                    <div className='texto'>Sair</div>
                </a>
            </div>

        </nav>
    )
}