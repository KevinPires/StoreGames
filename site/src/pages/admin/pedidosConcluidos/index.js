import './index.scss'
import BarraLateral from '../../../components/BarraLateral'
import HeaderAdmin from '../../../components/adminHeader'
import { useEffect, useState } from 'react'
import { pedidosUsuarioConcluidos } from '../../../api/pedidoApi'

export default function PedidosConcluidos() {

    const [dados, setDados] = useState([])

    async function carregarPedidos () {
        const chamarFuncao =  await pedidosUsuarioConcluidos()
        setDados(chamarFuncao)
    }

    useEffect(() => {
        carregarPedidos()
    }, [])

    console.log(dados)

    return (
        <main className="admin-home">
            <BarraLateral selecionado='concluidos' />


            <div className="cont-faixa-cadastro">

                <HeaderAdmin />
                <div className='conteudo'>
                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar pedidos concluidos  por nome' />
                    </div>

                
                    <table >
                        <thead>
                            <tr>
                                <th>NOME DO CLIENTE</th>
                                <th>DATA</th>
                                <th>PREÇO</th>
                                <th>MÉTODO DE PAGAMENTO</th>
                                <th>CÓD. FISCAL</th>
                            </tr>
                        </thead>
                        <tbody>
                        {dados.map (item =>
                            <tr>
                                <th>{item.cliente}</th>
                                <th>{item.pdata ? item.pdata.substr(0,10) : ' '}</th>
                                <th>{item.ptotal}</th>
                                <th>Item</th>
                                <th>{item.pnotaFiscal}</th>
                            </tr>
                        )}
                        </tbody>
                    </table>
                
                </div>
            </div>
        </main>
    )
}