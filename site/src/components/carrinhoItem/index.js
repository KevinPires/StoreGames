
import './index.scss'

import { API_URL } from '../../api/config';
import { useState } from 'react';
import Storage from 'local-storage';

export default function CarrinhoItem({item: { jogo:{ info , genero , plataforma }, qtd}, removerItem, carregarCarrinho }){
    const [qtdProduto, setQtdProduto] = useState(qtd)

    function remover(){
        removerItem(info.id)
    }

    function carregarImagem () {
        return API_URL + '/' + info.imagem
    }

    function calcularSubTotal(){
        const subTotal = qtdProduto * info.valor
        return subTotal
    }

    function alteraQuantidade(novaQtd){
        setQtdProduto(novaQtd)

        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id);
        itemStorage.qtd = novaQtd;

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }


    return(
        <main className="comp-jogo">

            <div className="jogo">
                <div className='box-jogo'>
                    <img src={carregarImagem()} id='capa' alt='capa icon' />
                    <div className="flexboxcolumn info-jogo">
                        <h2>{info.nome}</h2>
                        <p>VALOR   ${info.valor}</p>
                    </div>
                </div>
                

                <div className="flexboxrow box-quantidade">
                    <select onChange={e => alteraQuantidade(e.target.value)} value={qtdProduto} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                    <img src="./icon-lixeira.png" alt="icon lixeira" onClick={remover}/>
                </div>

                <div>
                    <h4>Subtotal</h4>
                    <p>R$ {calcularSubTotal()}</p>
                </div>
            </div>

        </main>
    )
}