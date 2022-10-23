import './index.scss';
import Rodape from '../../../components/Rodapé';
import HeaderCarrinho from '../../../components/headerCarrinho';


export default function CompraFinalizada() {


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
                            <button>Continuar comprando</button>
                            <button>Acompanhar pedido</button>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </main>
    )
}