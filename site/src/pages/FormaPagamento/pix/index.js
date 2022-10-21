import './index.scss';
import EtapasImagens from '../../../components/imagensCarrinho';
import Rodape from '../../../components/Rodapé';
import HeaderCarrinho from '../../../components/headerCarrinho';
import { Link } from 'react-router-dom';

export default function Pix(){


    return (
       <main className='finalizar-page'>
         <HeaderCarrinho/>
          <section className='etapas'><EtapasImagens/></section> 

          <div className='ajustar'>

          <section className='forma-pagamento'>

          <Link to='/pagamento/pix' className='botao'> <img className='pagamentos' src='/pixx.png' alt='pag'/>  &nbsp; &nbsp;PIX</Link>
          <Link to='/pagamento/boleto' className='botao'> <img className='pagamentos' src='/boleto.png' alt='pag'/>  &nbsp; &nbsp;BOLETO</Link>
          <Link to='/pagamento/cartao' className='botao'> <img className='pagamentos' src='/cartao2.png' alt='pag'/>  &nbsp; &nbsp;CARTÃO</Link>
    <Link to='/carrinho' className='botao-sair'> <p>VOLTAR</p></Link>

</section>

<section className='conteiner-pag'>

<section className='conteiner-row'>

<section className='boxPix'>

  <div className='dados'>
    <h2>Dados pessoais</h2>
  <div className='metodo'> <img className='pagamentos' src='/pixx.png' alt='pag'/>  &nbsp; &nbsp; <b>PIX</b></div>  
  </div>
  <div>Nome completo:</div>
  <input className='input' type='text'></input>

  <div>CPF:</div>
  <input className='input' type='text'></input>
</section>


<section className='box22'>

  <div className='dados'>

    <div className='resumo'>

    <div>
    <div><h3>Resumo do pedido</h3></div> 
   <div> Grand Theft Auto V (PC)</div>
    </div>
   
   <img className='log' src='/logoOrigin.png' alt='pag'/>
    </div>
   
  </div>
  <div><h3>Forma de pagamento:</h3></div>
  <div className='pag'><img className='pagamentos' src='/pixx.png' alt='pag'/>  &nbsp; PIX</div>
  <div className='valor'>
    Valor Total  
    <p className='espaço'>R$ preço</p> 
  </div>

  <div className='finalizar'> Finalizar Compra</div>
</section>

</section>

<section className='endereço'>
    <section className='box3'>
        <h2>Informações de entrega</h2>
        <div className='endereco1'>
            <div className='input-endereço1'>
                <b>CEP</b>
                <input  className='input1'></input>
            </div>

            <div className='input-endereço1'>
                <b>Endereço</b>
                <input className='input2'></input>
            </div>

            <div className='input-endereço1'>
                <b>Numero</b>
                <input type='number' className='input3'></input>
            </div>
        </div>

        <div className='endereco1'>
        <div className='input-endereço1'>
                <b>Bairro</b>
                <input  className='input1'></input>
            </div>

            <div className='input-endereço1'>
                <b>Cidade</b>
                <input className='input2'></input>
            </div>
        </div>
    </section>

</section>

</section>


  </div>

 <Rodape/>

       </main>
    )
}