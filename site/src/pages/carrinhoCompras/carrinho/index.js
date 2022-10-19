
import { useEffect, useState } from 'react'
import '../../../common/common.scss'
import HeaderLoja from '../../../components/headerLoja'
import HeaderCarrinho from '../../../components/headerCarrinho'
import EtapasImagens from '../../../components/imagensCarrinho'
import Rodape from '../../../components/Rodapé'
import Storage from 'local-storage'
import CarrinhoItem from '../../../components/carrinhoItem'
import './index.scss'
import { buscarJogoPorId } from '../../../api/jogos'
import toast from 'react-toastify'

export default function CarrinhoCompras() {
    const [itens ,setItens]= useState([])
    const [mostrarJogo, setMostrarJogo] = useState(true)


    function calcularTotal(){
        let total = 0;
        for(let item of itens){
            total = total + item.jogo.info.valor * item.qtd
        }
        return total

    }

    function removerItem(id){
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho' , carrinho)
        carregarCarrinho()
    }
    async function carregarCarrinho(){
        let carrinho = Storage('carrinho');
        if(carrinho){
            let temp= []
            for(let jogo of carrinho){
                let p = await buscarJogoPorId(jogo.id)

                temp.push({
                    jogo: p,
                    qtd: jogo.qtd
                })
            }
            console.log(temp)
            setItens(temp)
        }

    }
    useEffect(()=>{
        carregarCarrinho()
    },[]);
    return (

        <main className="carrinho-page">
            <HeaderCarrinho/>
            {mostrarJogo === false &&
            <section className="carrinho-vazio">
                <div className='info-carrinho-vazio'>
                    <h1>Seu carrinho está vazio!</h1>
                    <h1>Deseja procurar por produtos similares?</h1>
                </div>

                <button>Continuar Comprando</button>
            </section>
            }

            {mostrarJogo === true && 
            <section className="faixa-carrinho">
                <div className="faixa-imagens">
                    <EtapasImagens/>
                </div>

                <div className="faixa-items">
                    <div className='itens-carinho'>
                        {itens.map(item =>
                            <CarrinhoItem 
                                item={item} 
                                removerItem={removerItem} 
                                carregarCarrinho={carregarCarrinho}/>
                        )}
                    </div>
                   
                  
                    <div className="box-info">
                        <div className="flexboxcolumn">
                            <div className="flexboxrow"><span>Preço Total: </span> <span>R$ {calcularTotal()}</span></div>
                            <div className="flexboxrow"><span>Frete: </span> <span>R$ Dinheiros</span></div>
                        </div>
                        <button>Continuar Compra</button>
                    </div>
                </div>
                
            </section>
            }
            <Rodape/>
        </main>
    )
}