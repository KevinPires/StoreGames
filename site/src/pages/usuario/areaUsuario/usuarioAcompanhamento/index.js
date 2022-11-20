import './index.scss';
import HeaderLoja from '../../../../components/headerLoja';
import OptionsUser from '../../../../components/AreaUsuario/menuLateral';
import { useEffect, useState } from 'react';
import { consultarStatus } from '../../../../api/usuario';
import { useParams } from 'react-router-dom';


export default function Acompanhamento() {

    const [status, setStatus] = useState('')
    const [info, SetInfo] = useState([])
    console.log(info)
    console.log(status)

    const {id} = useParams()

    async function CarregaStatus () {

        let carregar = await consultarStatus(id)
        SetInfo(carregar)
        setStatus(carregar.pstatus)

    }

    useEffect(() => {
        CarregaStatus()
    }, [])

  
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
                                <b>Endereço:</b>
                                <p>{info.rua} n°{info.numero}, {info.bairro}</p>
                            </div>

                            <div className='info'>
                                <b>Status do pedido:</b>
                                <p>{info.pstatus}</p>
                            </div>

                            <div className='info'>
                                <b>Valor da compra: </b>
                                <p>R$ {info.ptotal}</p>
                            </div>

                            <div className='info'>
                                <b>Nota fiscal: </b>
                                <p>{info.pnotaFiscal}</p>
                            </div>

                            <div className="faixa-informacoes">


                                {status === 'Em fila' &&
                                    <div className="status-analise">
                                        <p className='title-center c-green bold'>O seu pedido está em fila!</p>
                                        <p>Aguarde! Estamos organizando tudo para você</p>
                                        <img src='/icons-fila.png' alt='icon-carrinho' className='img-acomp'></img>
                                    </div>
                                }   
                                {status === 'Analise' &&
                                    <div className="status-analise">
                                        <p className='title-center bold c-green'>O seu pedido está em Análise!</p>
                                        <p className='title-center'>Aguardando pagamento.</p>
                                        <img src='/icon-analise.png' alt='icon-analise'  className='img-acomp m-right'></img>
                                    </div>
                                }


                                {status === 'Negado' &&
                                    <div className="status-analise">
                                        <p className='title-center bold c-red'>O seu pedido foi negado!</p>
                                        <p>Pagamento não recebido. Contato:storegames@gmail.com</p>
                                        <img src='/icons-negado.png' alt='icon-cancelado' className='img-left'></img>
                                    </div>
                                }

                                {status === 'Aprovado' &&
                                    <div className="status-analise">
                                        <p className='title-center bold c-green'> O seu pedido foi aprovado!</p>
                                        <p className='title-center'>Saiu para entrega</p>
                                        <img src='/icon-entrega.png ' alt='icon-concluido' className='img-acomp m-right'></img>
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