import { useEffect, useState } from 'react'
import { pedidosUsuario } from '../../../../api/pedidoApi'
import '../../../../common/common.scss'
import OptionsUser from '../../../../components/AreaUsuario/menuLateral'
import HeaderLoja from '../../../../components/headerLoja'
import Rodape from '../../../../components/Rodapé'
import './index.scss'
import localStorage from 'local-storage'
import { Link } from 'react-router-dom'


export default function AreaLoja () {
    const Storage = localStorage
    const [pedidos, setPedidos] = useState([])
    const [infoStorage, setInfostorage] = useState('')

    function exibirNome() {
        const taLogado = Storage('usuario-logado')
        setInfostorage(taLogado)
    }

    useEffect(()=> {
        exibirNome()
    },[])

    async function chamandoPedidos(){
        let x = []

        const r = await pedidosUsuario(infoStorage.id)
        console.log(r)
    }
    
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
                               <Link to='/usuario/pedidos/:id'><button>Detalhes</button></Link> 
                            </div>
                        </div>
                        
                    </section>
                </div>
            </section>
            <Rodape/>
        </main>
    )
}