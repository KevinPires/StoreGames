import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { exibirFavorito } from '../../../../api/usuario'
import '../../../../common/common.scss'
import OptionsUser from '../../../../components/AreaUsuario/menuLateral'
import HeaderLoja from '../../../../components/headerLoja'
import Rodape from '../../../../components/Rodapé'
import './index.scss'


export default function AreaLoja () {
    const { id } = useParams
    const [favoritos, setFavoritos] = useState({jogos:[], generos:[] , plataformas: []})

    async function mostrarFavorito(){
        let r =  await exibirFavorito(1)
        setFavoritos(r) 
    }

    useEffect(()=>{
        mostrarFavorito()
    })
    
    return (
        <main className='usuario-page-desejos'>

            <HeaderLoja/>
 
            <section className="container-user">
            
                <div className="options">
                    <OptionsUser
                    escolhido='desejo'/>  
                </div>

                <div className="box-info">
                    <section className="detalhes">
                        {favoritos.jogos.map (item =>
                            <div className='item-lista-desejos'>
                                <img id='capa-wishlist' src='/capagta.jpg' alt='capa'/>
                                <div className='flexboxcolumn'>
                                    <span className='info'>{item.nome}</span>
                                    {favoritos.plataformas.map(item=><span className='info'>{item.plaformas}</span>)}
                                    <span className='info'>Gêneros</span>
                                </div>
                                <span className='descricao'>Descrição: Terraria é um jogo eletrônico RPG de ação-aventura independente produzido pela desenvolvedora de jogos Re-Logic.
                                Possui como características a exploração, artesanato, construção de estruturas e combate a monstros perigosos em um mundo 2D gerado proceduralmente </span>
                                <div className='flexboxcolumn'>
                                    <Link to='/loja' className='botao'>Ir Loja</Link>
                                    <span>Valor</span>
                                </div>
                            </div>
                        )}
                        
                        
                    </section>
                </div>
            </section>
            <Rodape/>
        </main>
    )
}