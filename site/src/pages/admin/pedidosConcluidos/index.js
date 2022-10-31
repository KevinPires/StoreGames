import './index.scss'
import BarraLateral from '../../../components/BarraLateral'
import HeaderAdmin from '../../../components/adminHeader'

export default function pedidosConcluidos(){
    return (
        <main className="admin-home">
    <BarraLateral selecionado='concluidos'/>


    <div className="cont-faixa-cadastro">

         <HeaderAdmin/>
         <div className='conteudo'>
            <div className='caixa-busca'>
                <input type="text" placeholder='Buscar pedidos concluidos  por nome' />
            </div>
        

            <table >
                <thead>
                    <tr>
                        <th>NOME DO CLIENTE</th>
                        <th>DATA</th>
                        <th>PREÇO</th>
                        <th>MÉTODO DE PAGAMENTO</th>
                        <th>PRODUTO</th>
                      
                        
                    </tr>
                </thead>
                <tbody>

                
                <tr>
                        <th>Joaquim</th>
                        <th>22/10/2022</th>
                        <th>R$ 30,00</th>
                        <th>Cartão</th>
                        <th>Terraria</th>
                        
                        
            
                    </tr>
                    
                
                </tbody>
            </table>
        </div>
     </div>
       </main>
    )
}