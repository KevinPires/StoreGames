import { useEffect, useState } from 'react'
import { listarTodosJogos } from '../../api/jogos'
import './index.scss'


export default function CardJogo (props) {
    const [jogos, setJogos] = useState([]);
    
    async function CarregarJogo () {
        const x = await listarTodosJogos()
        setJogos(x)
    }

    useEffect(() => {
        CarregarJogo()
    }, [])

    return (
        <main>
            {jogos.map (jogo => 
                <section className="BoxCard" >
                        <img src="./capagta.jpg" alt="" />
                        <h4>{jogo.nome}</h4>
                        <span id='card-preco'>R${jogo.valor}</span>
                </section>
            )}
        </main>
    )
}