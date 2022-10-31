import './index.scss';
import BarraLateral from '../../../components/BarraLateral';
import HeaderAdmin from '../../../components/adminHeader';

export default function Pendentes(){
    return(
        <main className="admin-home">
    <BarraLateral selecionado='pendencias'/>


    <div className="cont-faixa-cadastro">

         <HeaderAdmin/>

         <div className='conteudo'>
            <div className='caixa-busca'>
                <input type="text" placeholder='Buscar pedidos pendentes por nome' />
            </div>
        

            <table >
                <thead>
                    <tr>
                        
                        <th>NOME</th>
                        <th>MÉTODO PAGAMENTO</th>
                        <th>VALOR</th>
                        <th>DATA</th>
                        <th>STATUS</th>
                        <th>ANALISAR</th>
                        
                    </tr>
                </thead>
                <tbody>

                
                    <tr>
                        <td>Clovis</td>
                        <td>PIX</td>
                        <td>R$ 10,00</td>
                        <td>02/11/2021</td>
                        <td>Em fila</td>
                        <td>
                            <img src='/aprovado.png'  />


                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <img src='/reprovado.png'/>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <img src='/analise.png'/>
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </div>
     </div>
       </main>
    )
}
