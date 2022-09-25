import './index.scss';

import BarraLateral from '../../../components/BarraLateral';
import HeaderAdmin from '../../../components/adminHeader';

export default function ConsultarJogos(){
  return(
    <main className="admin-consultar">
    <BarraLateral selecionado='consultar'/>


    <div className="cont-faixa-cadastro">

         <HeaderAdmin/>
     

     <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar jogos por nome'  />
                        <img src='/lupa.png' />
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>NOME</th>
                                <th>DATA</th>
                                <th>PREÇO</th>
                                <th>DISPONÍVEL</th>
                                <th>QUANTIDADE</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                        
                            
                         <tr>
                            <td>Celeste</td>
                            <td>22/10/2018</td>
                            <td>R$ 27,00</td>
                            <td>Não</td>
                            <td>15</td>
                            <td>
                                <img src='/lapis.png' 
                                />


                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <img src='/lixo.png'/>
                            </td>
                        </tr>

                        <tr>
                            <td>Terraria</td>
                            <td>12/05/2011</td>
                            <td>R$ 30,00</td>
                            <td>Sim</td>
                            <td>6</td>
                            <td>
                                <img src='/lapis.png' 
                                />


                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <img src='/lixo.png'/>
                            </td>
                        </tr>
                            
                            
                            
                            

                           
                            
                          
                        </tbody>
                    </table>
                    
                </div>
            </div>
       </main>
  )
}