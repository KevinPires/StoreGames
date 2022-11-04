import './index.scss';
import HeaderLoja from '../../../../components/headerLoja';
import OptionsUser from '../../../../components/AreaUsuario/menuLateral';

export default function Acompanhamento(){

    return (
        <main className='usuario-page-pedidos'>

            <HeaderLoja/>
 
            <section className="container-acomp">
            
                <div className="options">
                    <OptionsUser
                    escolhido='pedido'/>  
                </div>

                <section className='pop'>
                 <div className='back-pop'>
                 <h1>Acompanhamento da entrega</h1>
                  
                  <div className='front-pop'>
                    <div className='info'>
                        <b>Endereço</b>
                        <p>Rua Alváro Paes Leme, 555. Pq Cocaia</p>
                    </div>

                    <div className='info'>
                        <b>Status do pedido</b>
                        <p>Em andamento: Saiu para entrega </p>
                    </div>

                    <div className='info'>
                        <b>Valor da compra </b>
                        <p>R$ 10,00</p>
                    </div>

                    <div className='info'>
                        <b>Nota fiscal </b>
                        <p>xxxxxxx</p>
                    </div>

                    <div className='progress-bar'>
                    <img src='/carro.png' alt='logo' />
                    <img src='/caminhao.png' alt='logo' />
                    <img src='/vere.png' alt='logo' />
                    </div>

                    <div className='progress'>
                        <div><p>Pedido recebido</p></div>
                        <div><p>Saindo para entrega</p></div>
                       <div> <p>Pedido entregue</p></div>
                    
                        
                    </div>
                    <div className='progress-2'>
                       <div><p>Pedido expedido</p></div>
                       <div> <p>Em rota de entrega</p></div>
                       <div> <p>Sucesso</p></div>
                     </div>

                   
                        
                       
                   
                  </div>

                      <img src='/logoOrigin.png' alt='logo' width='200px'/>
                 </div>
              </section>
              </section>
             
                </main>
    )
}