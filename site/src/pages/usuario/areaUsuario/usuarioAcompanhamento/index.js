import './index.scss';
import HeaderLoja from '../../../../components/headerLoja';
import OptionsUser from '../../../../components/AreaUsuario/menuLateral';
import { useState } from 'react';

export default function Acompanhamento() {

    const [status, setStatus] = useState('Aprovado')



    return (
        <main className='usuario-page-pedidos'>

            <HeaderLoja />

            <section className="container-acomp">

                <div className="options">
                    <OptionsUser
                        escolhido='pedido' />
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

                            <div className="faixa-informacoes">

                                {status === 'Analise' &&
                                    <div className="status-analise">
                                        <p>Status da compra: Pedido Recebido</p>
                                        <p>Aguarde o resultado da analise do pedido.</p>
                                        <img src='/carro.png' alt='icon-carrinho'></img>
                                    </div>
                                }


                                {status === 'Negado' &&
                                    <div className="status-analise">
                                        <p>Esta compra foi negada</p>
                                        <img src='/cancelado.png' alt='icon-cancelado'></img>
                                    </div>
                                }

                                {status === 'Aprovado' &&
                                    <div className="status-analise">
                                        <p>Saiu para entrega</p>
                                        <img src='/concluido.png' alt='icon-concluido'></img>
                                    </div>
                                }

                            </div>

                        </div>

                        <div className='img'> <img src='/logoOrigin.png' alt='logo' width='200px' /></div>
                    </div>
                </section>

            </section>

        </main>
    )
}