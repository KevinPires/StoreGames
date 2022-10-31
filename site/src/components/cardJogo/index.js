import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { buscarImagem, listarTodosJogos } from '../../api/jogos'
import './index.scss'


export default function CardJogo ({jogos, loading}) {
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
                    <div className='box-img'>
                        <img src={buscarImagem(jogo.capa)} alt="imagem Jogo" />
                    </div>
                        
                       <div className='info-jogo'>
                            <h4>{jogo.nome}</h4>
                            <p id='card-preco' className='card-price'>R${jogo.valor}</p>
                       </div>
                       
                </section>
            )}
        </main>
    )
}