import './index.scss';
import EtapasImagens from '../../../components/imagensCarrinho';
import Rodape from '../../../components/Rodapé';
import HeaderCarrinho from '../../../components/headerCarrinho';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Storage from 'local-storage';
import { inserirNovoPedido } from '../../../api/pedidoApi';
import { toast, ToastContainer } from 'react-toastify'
import { buscarJogoPorId } from '../../../api/jogos';

export default function Pix() {
  const Navigate = useNavigate()
  const [status, setStatus] = useState('')

  // itens carrinho
  const [itens, setItens] = useState([])

  
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

  function calcularTotal() {
    let total = 0;
    for (let item of itens) {
      total = total + item.jogo.info.valor * item.qtd
    }
    return total

  }

  function VerificarLogin () {
      if(!Storage('usuario-logado')) {
        toast.dark('É preciso estar logado para finalizar a compra!')
        setTimeout(() => Navigate('/usuario/cadastro'), 3000) }

  }

  async function carregarCarrinho() {
    let carrinho = Storage('carrinho');
    if (carrinho) {
      let temp = []
      for (let jogo of carrinho) {
        let p = await buscarJogoPorId(jogo.id)

        temp.push({
          jogo: p,
          qtd: jogo.qtd
        })
      }
      setItens(temp)
    }
  }

  

  async function SalvarPedido() {
    try {

      let jogos = Storage('carrinho')
      let idUser = Storage('usuario-logado').id
      let total = calcularTotal()
      if(!Storage('usuario-logado')) {
        Navigate('/usuario/cadastro')
      }
      let pedido =
      {
        status: 'Em fila',
        valor: total,
        frete: 15.00,

        endereco: {
          cep: cep,
          endereco: endereco,
          cidade: cidade,
          bairro: bairro,
          numero: numero
        },

        cartao: {
          nome: nome,
          cpf: cpf,
          chavepix: chavePix
        },

        jogos: jogos
      }
      const resposta = await inserirNovoPedido(idUser, pedido)

      toast.dark('Pedido Concluido')
      Navigate('/comprafinalizada')
      Storage('carrinho', [])

    } catch (error) {

      toast.dark(error.response.data.erro)
    }

  }

  useEffect(() => {
    carregarCarrinho()  
    VerificarLogin()

  }, []);


  return (
    <main className='finalizar-page'>
      <ToastContainer />
      <HeaderCarrinho />
      <section className='etapas'><EtapasImagens /></section>

      <div className='ajustar'>

        <section className='forma-pagamento'>
          <Link to='/pagamento/pix' className='botao'> <img className='pagamentos' src='/pixx.png' alt='pag' />  &nbsp; &nbsp;PIX</Link>
         
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
                    <div> Grand Theft Auto v (PC)</div>
                  </div>

                  <img className='log' src='/logoOrigin.png' alt='pag' />
                </div>

              </div>
              <div><h3>Forma de pagamento:</h3></div>
              <div className='pag'><img className='pagamentos' src='/pixx.png' alt='pag' />  &nbsp; PIX</div>
              <div className='valor'>
                Valor Total:
                <p className='espaço'>R$ {calcularTotal()}</p>
              </div>

              <div className='finalizar' onClick={SalvarPedido}> Finalizar compra</div>
            </section>

          </section>

          <section className='endereço'>
            <section className='box33'>
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

                <div className='input-group'>
                  <input type="number" required className='input' value={numero} onChange={e => setNumero(e.target.value)} />
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