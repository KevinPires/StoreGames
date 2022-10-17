import './index.scss'
import HeaderLoja from '../../../components/headerLoja'



export default function DetalhesProduto(){
    return(
        <main className='page-produto'>
            <HeaderLoja/>
            <div className='box-cima'>
                <div className='bloc-img'>
                    <img src='/Imagem GTA.png' alt=''/>
                    <div className='display-row'>
                        <img src='/coracaoIcon.png' alt='' />
                        <p>Adiciona aos <br/>favoritos</p>
                    </div>
                </div>
                <div className='bloc-info'>
                    <h1>Grand Theft Auto V</h1>
                    <div className='display-row'>
                        <div style={{marginRight : "60px"}}>
                            <h4>Plataforma:</h4> 
                            Xbox,PC e Ps4
                        </div>
                        <div>
                            <h4>Genêro:</h4>
                            Ação
                        </div>
                    </div>
                    <div>
                        <h4>Disponivel:</h4> 
                        produto disponivel
                    </div>
                    <div>
                        <h4>Descrição</h4>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                    </div>
                </div>
                <div className='bloc-pagamento'>
                    <div className=' card-pagamento'>
                        <div className='cima-pagamento'>
                            <div>
                                <h5>Preço</h5>
                                R$ 60,00
                            </div>
                            <img src='/logoStoreGames.png' alt=''/>    
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}