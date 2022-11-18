import './index.scss';
import Rodape from '../../../components/Rodapé';
import HeaderCarrinho from '../../../components/headerCarrinho';
import { useNavigate } from 'react-router-dom';
import Storage from 'local-storage';
import { useEffect, useState } from 'react';

export default function CompraFinalizada() {
    const Navigate = useNavigate();
    const [storageInfo, setStorageInfo] = useState()
    
    
    function carregarNome () {
        const info = Storage('usuario-logado')
        setStorageInfo(info)
    }

    useEffect(() => {
        carregarNome()
    }, [])

    return (
        <main className='page-compra-finalizada'>
            <HeaderCarrinho />
            <div className='compra-finalizada'>
                <div className='conteudo'>
                    <img src='/bonecoCompraFinalizada.png' alt='' />
                    <div>
                        <div className='conteudo-texto'> 
                            <img src='/checkd.png' alt='' />
                            <form>
                                <h2>PEDIDO REALIZADO COM SUCESSO!</h2>
                                <h2>OBRIGADO POR COMPRA COM A GENTE </h2>
                            </form>
                        </div>
                        <div className='buttons'>
                            <button onClick={ ()=> Navigate('/loja')}>Continuar comprando</button>
                            <button onClick={ ()=> Navigate(`/usuario/pedidos/ver/${storageInfo.id}`)}>Acompanhar pedido</button>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </main>
    )
}