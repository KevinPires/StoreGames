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


export default function AreaLoja () {
    const { id } = useParams()

    const [pedidos, setPedidos] = useState([])

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
                    <section className="detalhes">
                        <div className='box-select'>
                            <label><b>Filtrar por status:</b></label>
                            <select>
                                <option disabled hidden></option>
                            </select>
                        </div>


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
                                   <Link to='/usuario/pedidos/:id'><button>Detalhes</button></Link> 
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