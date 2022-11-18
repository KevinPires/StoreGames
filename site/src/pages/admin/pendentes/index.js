import './index.scss';
import BarraLateral from '../../../components/BarraLateral';
import HeaderAdmin from '../../../components/adminHeader';
import { alterarStatus, pesquisarPedidoNome, visualizarPedidos } from '../../../api/pedidoApi';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
export default function Pendentes() {

    const [pedidos, setPedidos] = useState([])
    console.log(pedidos)
    const [inputNome, setInputNome] = useState()

    async function carregarPedidos () {
        const exibirPedido = await visualizarPedidos()
        setPedidos(exibirPedido)
    }

    async function FiltrarPedidoNome () {
        const filtrarNome = await pesquisarPedidoNome(inputNome)
        setPedidos(filtrarNome)
    }


    useEffect(() => {
        if(inputNome){
            FiltrarPedidoNome()
        }else{
            carregarPedidos()
        }
    }, [inputNome])

    // useEffect(() => {
    //     FiltrarPedidoNome
    // }, [inputNome])



    async function alteraStatusClick (status, id) {
        try {
             let x = await alterarStatus(status, id)
            
           
            toast(`Pedido alterado para: ${status}`)
        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <main className="admin-pendentes">
            <ToastContainer/>
            <BarraLateral selecionado='pendencias' />

            <section className="pagina-column">


                <HeaderAdmin />

                <div className="container-pagina">
                    <div className="flexboxcolumn barraPesquisa">
                        <input value={inputNome} onChange={e => setInputNome(e.target.value)} placeholder='Pesquisar pedido por nome' type='txt'></input>
                    </div>
                    <div className="containerBoxes">
                    {pedidos.map(item =>    
                        <div className="boxPedido">
                            <div className="flexboxrow infoPedido">
                                <div className="flexboxcolumn">
                                    <label>Id: </label>
                                    <p>{item.idpedido}</p>
                                </div>
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
                            </div>
                            <p>Defina o status do pedido, com uma das opções a seguir: </p>
                            <div className="botoes">
                                    <button onClick={() => alteraStatusClick('Analise', item.idpedido)}>Em Análise</button>
                                    <button onClick={() => alteraStatusClick('Negado', item.idpedido)}>Negado</button>
                                    <button onClick={() => alteraStatusClick('Aprovado', item.idpedido)}>Aprovado</button>
                            </div>
                        </div>
                        )}
                        
                    </div>
                    
                </div>
            </section>
        </main>
    )
}
