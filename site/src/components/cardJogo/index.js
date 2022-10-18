import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { buscarImagem, listarTodosJogos } from '../../api/jogos'
import './index.scss'


export default function CardJogo ({jogos, loading, props}) {
    const navigate = useNavigate();
    if(loading){
        return <h2>LOADING ....</h2>
    }
 



    function abrirDetalhes(id) {
        navigate('/produto/' + id + '/detalhe')
    }

    return (
        <main className='comp-card'>
            {jogos.map (jogo => 
                <section className="BoxCard" onClick={() => abrirDetalhes(jogo.id)}>
                        <img src={buscarImagem(jogo.capa)} alt="imagem Jogo" />
                       <div className='info-jogo'>
                            <h4>{jogo.nome}</h4>
                            <span id='card-preco'>R${jogo.valor}</span>
                       </div>
                       
                </section>
            )}
        </main>
    )
}