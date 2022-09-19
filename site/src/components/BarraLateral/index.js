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
        <main className="barraLateral">
            <section className="barra-lateral">
                <div className="cont-navegacao">
                    <div className="atalho"> <img className="casa" src="/casa.png" alt="casa" />        <p>Home</p></div>
                    <div className="atalho"> <img className="casa" src="/maispreto.png" alt="casa" />   <p> Cadastrar o Jogos</p></div>
                    <div className="atalho"> <img className="casa" src="/lupa.png" alt="casa" />        <p>Consultar pedidos</p></div>
                    <div className="atalho"> <img className="casa" src="/pendentes.png" alt="casa" />   <p>Pedidos Pendentes</p></div>
                    <div className="atalho"> <img className="casa" src="/concluidos.png" alt="casa" />  <p>Pedidos Concluidos</p></div>
                </div>
            
                <div className="atalho1"> <img className="casa" src="/sair.png" alt="casa" />       <p onClick={sairClick}>Sair</p></div>
            </section>
        </main>
    )
}