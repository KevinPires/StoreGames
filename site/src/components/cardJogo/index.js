import { useEffect, useState } from 'react'
import { buscarImagem, listarTodosJogos } from '../../api/jogos'
import './index.scss'


export default function CardJogo ({jogos, loading}) {
    if(loading){
        return <h2>LOADING ....</h2>
    }
    
    // async function CarregarJogo () {
    //     const x = await listarTodosJogos()
    //     setJogos(x)
    // }

    // useEffect(() => {
    //     CarregarJogo()
    // }, [])


    return (
        <main className='comp-card'>
            {jogos.map (jogo => 
                <section className="BoxCard" >
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