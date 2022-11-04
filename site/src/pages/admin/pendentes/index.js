import './index.scss';
import BarraLateral from '../../../components/BarraLateral';
import HeaderAdmin from '../../../components/adminHeader';
import { alterarStatus, visualizarPedidos } from '../../../api/pedidoApi';
import { useEffect, useState } from 'react';

export default function Pendentes() {

    const [pedidos, setPedidos] = useState([])
    console.log(pedidos)

    async function carregarPedidos () {
        const exibirPedido = await visualizarPedidos()
        setPedidos(exibirPedido)

    }

    useEffect(() => {
        carregarPedidos()
    }, [])

    async function alteraStatusClick (status, id) {
        try {
             let x = await alterarStatus(status, id)
            
           
            alert('status alterado para analise')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="admin-pendentes">
            <BarraLateral selecionado='pendencias' />

            <section className="pagina-column">


                <HeaderAdmin />

                <div className="container-pagina">
                    <div className="flexboxcolumn barraPesquisa">
                        <input placeholder='Pesquise pedidos pendentes!' type='txt'></input>
                    </div>
                    
                    <div className="containerBoxes">
                    {pedidos.map(item =>    
                        <div className="boxPedido">
                            <div className="flexboxrow infoPedido">
                                <div className="flexboxcolumn nomeNota">
                                    <label>Nome Cliente: </label>
                                    <p>{item.cliente}</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Metodo Pagamento: </label>
                                    <p>Pix</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Valor: </label>
                                    <p>{item.ptotal}</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Data: </label>
                                    <p>{item.pdata ? item.pdata.substr(0,10) : " "}</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Status:  </label>
                                    <p>{item.pstatus}</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Cód. Fiscal:  </label>
                                    <p>{item.pnotaFiscal}</p>
                                </div>
                                <div className="botoes flexboxcolumn">
                                    <button onClick={() => alteraStatusClick('Analise', item.idpedido)}>Em Análise</button>
                                    <button onClick={() => alteraStatusClick('Negado', item.idpedido)}>Negado</button>
                                    <button onClick={() => alteraStatusClick('Aprovado', item.idpedido)}>Aprovado</button>
                                </div>
                            </div>
                        </div>
                        )}
                        
                    </div>
                    
                </div>
            </section>
        </main>
    )
}
