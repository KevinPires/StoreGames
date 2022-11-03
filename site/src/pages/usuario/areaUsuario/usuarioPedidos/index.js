import { useEffect, useState } from 'react'
import { pedidosUsuario } from '../../../../api/pedidoApi'
import '../../../../common/common.scss'
import OptionsUser from '../../../../components/AreaUsuario/menuLateral'
import HeaderLoja from '../../../../components/headerLoja'
import Rodape from '../../../../components/Rodapé'
import './index.scss'
import localStorage from 'local-storage'


export default function AreaLoja () {
    const Storage = localStorage
    const [pedidos, setPedidos] = useState([])
    
    console.log(Storage('usuario-logado') )
    
    

    // async function chamandoPedidos(){
    //     let x = []

    //     const r = await pedidosUsuario(id)
    // }
    
    useEffect(() => {
    
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
                        <div className='item-lista-pedidos'>
                            
                            <div className='flexboxcolumn'>
                                <span><b>Id do Pedido</b></span>
                                <span>xxxxxxx</span>
                            </div>

                            <div className='flexboxcolumn'>
                                <span><b>Status</b></span>
                                <span>xxxxxxx</span>
                            </div>

                            <div className='flexboxcolumn'>
                                <span><b>Data de compra</b></span>
                                <span>17/03/2022</span>
                            </div>
                           
                            <div className='flexboxcolumn'>
                                <span><b>Pagamento</b></span    >
                                <span>Forma de pagamento</span>
                            </div>

                            <div>
                                <button>Detalhes</button>
                            </div>
                        </div>
                        
                    </section>
                </div>
            </section>
            <Rodape/>
        </main>
    )
}