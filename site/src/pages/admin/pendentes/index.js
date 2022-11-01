import './index.scss';
import BarraLateral from '../../../components/BarraLateral';
import HeaderAdmin from '../../../components/adminHeader';

export default function Pendentes() {
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
                        <div className="boxPedido">
                            <div className="flexboxrow infoPedido">
                                <div className="flexboxcolumn">
                                    <label>Nome Cliente: </label>
                                    <p>Luan Reinhold</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Metodo Pagamento: </label>
                                    <p>Pix</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Valor: </label>
                                    <p>R$110.00</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Data: </label>
                                    <p>31/10/22</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Status:  </label>
                                    <p>Em fila</p>
                                </div>
                                <div className="botoes flexboxcolumn">
                                    <button>Em Análise</button>
                                    <button>Negado</button>
                                    <button>Aprovado</button>
                                </div>
                            </div>
                        </div>

                        <div className="boxPedido">
                            <div className="flexboxrow infoPedido">
                                <div className="flexboxcolumn">
                                    <label>Nome Cliente: </label>
                                    <p>Luan Reinhold</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Metodo Pagamento: </label>
                                    <p>Luan Reinhold</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Valor: </label>
                                    <p>Luan Reinhold</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Data: </label>
                                    <p>Luan Reinhold</p>
                                </div>
                                <div className="flexboxcolumn">
                                    <label>Status:  </label>
                                    <p>Luan Reinhold</p>
                                </div>
                                <div className="botoes flexboxcolumn">
                                    <button>Em Análise</button>
                                    <button>Negado</button>
                                    <button>Aprovado</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}
