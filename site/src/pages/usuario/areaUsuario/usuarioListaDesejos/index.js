import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../../../api/config'
import { exibirFavorito } from '../../../../api/usuario'
import '../../../../common/common.scss'
import OptionsUser from '../../../../components/AreaUsuario/menuLateral'
import HeaderLoja from '../../../../components/headerLoja'
import Rodape from '../../../../components/Rodapé'
import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function AreaLoja () {
    const { id } = useParams
    const [favoritos, setFavoritos] = useState({jogos:[], generos:[] , plataformas: []})
    const Navigate = useNavigate()

    async function mostrarFavorito(){
        let r =  await exibirFavorito(1)
        setFavoritos(r) 
    }

    function carregarImagem () {
        return API_URL + '/' + favoritos.jogos.imagem
    }
    // function abrirDetalhes(id) {
    //     Navigate('/produto/' + id + '/detalhe')
    // }
    useEffect(()=>{
        mostrarFavorito()
    })
    console.log(favoritos)
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
                                <span className='descricao'>{item.descricao}</span>
                                <div className='flexboxcolumn'>
                                    <button className='botao' onClick={()=> Navigate('/jogos')}>Ir Loja</button>
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