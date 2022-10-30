import './index.scss';
import EtapasImagens from '../../../components/imagensCarrinho';
import Rodape from '../../../components/Rodapé';
import HeaderCarrinho from '../../../components/headerCarrinho';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Storage from 'local-storage';
import { inserirNovoPedido } from '../../../api/pedidoApi';
import { toast, ToastContainer } from 'react-toastify' 

export default function Pix() {
  const Navigate = useNavigate()
  const [status, setStatus] = useState('')

  // forma de pagamento pix
  const [nome, setNome] = useState('')
  const [chavePix, setChavePix] = useState('')
  const [cpf, setCpf] = useState('')
  // --

  // informacoes pagamento
  const [endereco, setEndereco] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
 

 async function SalvarPedido () {
  try {

    let jogos = Storage('carrinho')
    let idUser = Storage('usuario-logado').id
    let pedido =
    {
        status : 'Em fila',
        valor  : 19.99,
        frete :  15.00,
  
        endereco: {
            cep : cep,
            endereco : endereco,
            cidade : cidade,
            bairro : bairro,
            numero : numero
        },
  
        cartao : {
          nome : nome,
          cpf : cpf,
          chavepix : chavePix
        },
        
        jogos: jogos
    }
    const resposta = await inserirNovoPedido(idUser, pedido)
    
    toast.dark('Pedido Concluido')
    Navigate('/comprafinalizada')
    Storage('carrinho', [])
    
  } catch (error) {

   toast.dark("Não foi possivel concluir o pedido")
  }
 
  }

  return (
    <main className='finalizar-page'>
      <ToastContainer/>
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

            <section className='boxPix'>

              <div className='dados'>
                <h2>Dados pessoais</h2>
                <div className='metodo'> <img className='pagamentos' src='/pixx.png' alt='pag' />  &nbsp; &nbsp; <b>PIX</b></div>
              </div>
              <br />
              <div className='input-group'>
                <input type="text" required className='input' value={nome} onChange={e => setNome(e.target.value)} />
                <label for="name" className='input-label' >Nome</label> 
              </div>

              <div className='input-group'>
                <input type="text" required className='input' value={chavePix} onChange={e => setChavePix(e.target.value)} />
                <label for="name" className='input-label'>Chave pix</label>
              </div>

              <div className='input-group'>
                <input type="text" required className='input' value={cpf} onChange={e => setCpf(e.target.value)} />
                <label for="name" className='input-label'>CPF</label>
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
              <div className='pag'><img className='pagamentos' src='/pixx.png' alt='pag' />  &nbsp; PIX</div>
              <div className='valor'>
                Valor Total:
                <p className='espaço'>R$ preço</p>
              </div>

              <div className='finalizar' onClick={SalvarPedido}> Finalizar Compra</div>
            </section>

          </section>

          <section className='endereço'>
            <section className='box3'>
              <h2>Informações de entrega</h2>

              <div className='endereco1'>

                <div className='input-group'>
                  <input type="text" required className='input' value={cep} onChange={e => setCep(e.target.value)} />
                  <label for="name" className='input-label'>CEP</label>
                </div>

                <div className='input-group'>
                  <input type="text" required className='input' value={endereco} onChange={e => setEndereco(e.target.value)} />
                  <label for="name" className='input-label'>Endereço</label>
                </div>

                <div className='input-group'>
                  <input type="number" required className='input' value={numero} onChange={e => setNumero(e.target.value)} />
                  <label for="name" className='input-label'>Número</label>
                </div>


              </div>

              <div className='endereco1'>
                <div className='input-group'>
                  <input type="text" required className='input' value={bairro} onChange={e => setBairro(e.target.value)} />
                  <label for="name" className='input-label'>Bairro</label>
                </div>

                <div className='input-group'>
                  <input type="text" required className='input' value={cidade} onChange={e => setCidade(e.target.value)} />
                  <label for="name" className='input-label'>Cidade</label>
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