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
    const { id } = useParams()
    const [favoritos, setFavoritos] = useState([])
    const Navigate = useNavigate()

    async function mostrarFavorito(){
        let r =  await exibirFavorito(id)
        setFavoritos(r) 
    }

    function carregarImagem (item) {
        if (item.info)
            return API_URL + '/' + item.info.imagem
    }
    // function abrirDetalhes(item) {
        
    //     Navigate('/produto/' + item.info.id + '/detalhe')
        
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
                    <section className="detalhes" >
                        {favoritos.map (item =>
                            <div className='item-lista-desejos' >
                                <img id='capa-wishlist' src={carregarImagem(item)} alt='capa'/>
                                <div className='flexboxcolumn'>
                                    <span className='info'><b>{item.info.nome}</b></span>
                                    {item.plataformas.map((item, index) => index < 1 && <span className='info'>{item.plataforma}</span>)}
                                    {item.generos.map((item, index) => index < 1 && <span className='info'>{item.genero}</span>)}
                                </div>
                                <span className='descricao'>{item.info.descricao}</span>
                                <div className='flexboxcolumn'>
                                    <button className='botao' onClick={()=> Navigate('/produto/' + item.info.id + '/detalhe')}>Ir Loja</button>
                                    <span className='info'>R${item.info.valor}</span>
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