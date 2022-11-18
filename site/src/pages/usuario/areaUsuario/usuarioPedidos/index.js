import { useEffect, useState } from 'react'
import { pedidosUsuario } from '../../../../api/pedidoApi'
import '../../../../common/common.scss'
import OptionsUser from '../../../../components/AreaUsuario/menuLateral'
import HeaderLoja from '../../../../components/headerLoja'
import Rodape from '../../../../components/Rodapé'
import './index.scss'
import localStorage from 'local-storage'
import { Link, useParams } from 'react-router-dom'
import { carregarUsuario } from '../../../../api/usuario'
import { useNavigate } from 'react-router-dom';



export default function AreaLoja () {
    const Navigate = useNavigate()
    const { id } = useParams()

    const [pedidos, setPedidos] = useState([])
    console.log(pedidos)

    async function chamandoPedidos(){
        const r = await pedidosUsuario(id)
        setPedidos(r)
    }
    console.log(pedidos)

    useEffect(() => {
        chamandoPedidos()
    }, [])

    return (
        <main className='usuario-page-pedidos'>

            <HeaderLoja/>
 
            <section className="container-user">
            
                <div className="options">
                    <OptionsUser
                    escolhido='pedido'/>  
                </div>

                <div className="box-info">
                    {pedidos.length?(
                        <section className="detalhes">
                        {pedidos.map (item=>
                                <div className='item-lista-pedidos'>
                            
                                <div className='flexboxcolumn'>
                                    <span><b>Id do Pedido</b></span>
                                    <span>{item.id_pedido}</span>
                                </div>
    
                                <div className='flexboxcolumn'>
                                    <span><b>Status</b></span>
                                    <span>{item.situação}</span>
                                </div>
    
                                <div className='flexboxcolumn'>
                                    <span><b>Data de compra</b></span>
                                    <span>{item.datapedido ? item.datapedido.substr(0,10) : " "}</span>
                                </div>
                               
                                <div className='flexboxcolumn'>
                                    <span><b>Pagamento</b></span    >
                                    <span>Pix</span>
                                </div>
    
                                <div>
                                   <div onClick={() => Navigate(`/usuario/pedidos/${item.id_pedido}`)}><button>Detalhes</button></div> 
                                </div>
                            </div>
                        )}                       
                    </section>
                    ):(
                        <section className='detalhes2'>
                            <div className='renderizacao'>
                                <h1 className='texto-rend'>Não existem pedidos</h1>
                                <img  className="vault" src='/vaultboy.png' alt='aaa'/>
                            </div>
                        </section>
                    )}
                    
                </div>
            </section>
            <Rodape/>
        </main>
    )
}