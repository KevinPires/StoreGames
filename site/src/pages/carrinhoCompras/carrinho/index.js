
import '../../../common/common.scss'
import HeaderLoja from '../../../components/headerLoja'
import EtapasImagens from '../../../components/imagensCarrinho'
import Rodape from '../../../components/Rodapé'
import './index.scss'

export default function carrinhoCompras() {

    return (
        <main className="carrinho-page">
            <HeaderLoja/>

            <section className="faixa-carrinho">
                <div className="faixa-imagens">
                    <EtapasImagens/>
                </div>

                <div className="faixa-items">
                   
                    <div className="box-jogos">

                        <div className="jogo">
                            <img src='./capagta.jpg' id='capa' alt='capa icon' />
                            <div className="flexboxcolumn">
                                <b>Nome do Jogo</b>
                                <b>Valor do Jogo</b>
                            </div>

                            <div className="flexboxrow box-quantidade">
                                <input type="number" name="" id="" />
                                <img src="./icon-lixeira.png" alt="icon lixeira" />
                            </div>
                        </div>

                        


                    </div>
                 

                    <div className="box-info">
                        <div className="flexboxcolumn">
                            <div className="flexboxrow"><span>Preço Total: </span> <span>R$ Dinheiros</span></div>
                            <div className="flexboxrow"><span>Frete: </span> <span>R$ Dinheiros</span></div>
                        </div>

                        <button>Continuar Compra</button>
                    </div>
                </div>


            </section>

            <Rodape/>
        </main>
    )
}