import './index.scss';
import EtapasImagens from '../../../components/imagensCarrinho';
import Rodape from '../../../components/Rodapé';
import HeaderCarrinho from '../../../components/headerCarrinho';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Cartao() {
  const Navigate = useNavigate()

  return (
    <main className='finalizar-page'>
      <HeaderCarrinho />
      <section className='etapas'><EtapasImagens /></section>

      <div className='ajustar'>

        <section className='forma-pagamento'>

          <Link to='/pagamento/pix' className='botao'> <img className='pagamentos' src='/pixx.png' alt='pag' />  &nbsp; &nbsp;PIX</Link>
          <Link to='/pagamento/boleto' className='botao'> <img className='pagamentos' src='/boleto.png' alt='pag' />  &nbsp; &nbsp;BOLETO</Link>
          <Link to='/pagamento/cartao' className='botao'> <img className='pagamentos' src='/cartao2.png' alt='pag' />  &nbsp; &nbsp;CARTÃO</Link>
          <Link to='/carrinho' className='botao-sair'> <p>VOLTAR</p></Link>

        </section>

        <section className='conteiner-pag'>

          <section className='conteiner-row'>

            <section className='boxCartaos'>

              <div className='dados'>
                <h2>Dados pessoais</h2>
                <div className='metodo'> <img className='pagamentos' src='/cartao2.png' alt='pag' />  &nbsp; &nbsp; <b>CARTÃO</b></div>
              </div>

              <br />
              <div className='input-group'>
                <input type="text" required className='input' />
                <label for="name" className='input-label'>Cartão</label>
              </div>

              <div className='input-group'>
                <input type="number" required className='input' />
                <label for="name" className='input-label'>N° cartão</label>
              </div>

              <div className='input-group'>
                <input type="date" required className='input' />
                <label for="name" className='input-label'></label>
              </div>

              <div className='input-group'>
                <input type="number" required className='input' />
                <label for="name" className='input-label'>Cód. Segurança</label>
              </div>



            </section>


            <section className='box22'>

              <div className='dados'>

                <div className='resumo'>

                  <div>
                    <div><h3>Resumo do pedido</h3></div>
                    <div> Grand Theft Auto V (PC)</div>
                  </div>

                  <img className='log' src='/logoOrigin.png' alt='pag' />
                </div>

              </div>
              <div><h3>Forma de pagamento:</h3></div>
              <div className='pag'><img className='pagamentos' src='/cartao2.png' alt='pag' />  &nbsp; CARTÃO</div>
              <div className='valor'>
                Valor Total:
                <p className='espaço'>R$ preço</p>
              </div>

              <div className='finalizar' onClick={() => Navigate('/comprafinalizada')}> Finalizar Compra</div>
            </section>

          </section>

          <section className='endereço'>
            <section className='box3'>
              <h2>Informações de entrega</h2>
              <div className='endereco1'>
                <div className='input-group'>
                  <input type="text" required className='input' />
                  <label for="name" className='input-label'>CEP</label>
                </div>

                <div className='input-group'>
                  <input type="text" required className='input' />
                  <label for="name" className='input-label'>Endereço</label>
                </div>

                <div className='input-group'>
                  <input type="number" required className='input' />
                  <label for="name" className='input-label'>Número</label>
                </div>
              </div>

              <div className='endereco1'>
                <div className='input-group'>
                  <input type="text" required className='input' />
                  <label for="name" className='input-label'>Bairro</label>
                </div>

                <div className='input-group'>
                  <input type="text" required className='input' />
                  <label for="name" className='input-label'>Cidade</label>
                </div>

                <div className='input-group'>
                  <input type="text" required className='input' />
                  <label for="name" className='input-label'>Complemento</label>
                </div>

              </div>
            </section>

          </section>

        </section>


      </div>

      <Rodape />

    </main>
  )
}