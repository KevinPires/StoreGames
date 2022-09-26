import './index.scss';

import BarraLateral from '../../../components/BarraLateral';
import HeaderAdmin from '../../../components/adminHeader';
import { listarTodosJogos, listarTodosJogosPorNome } from '../../../api/jogos';
import { useEffect, useState } from 'react';

export default function ConsultarJogos(){

    const [jogos, setJogos] = useState([])
    const [filtro, setFiltro] = useState ('')

    async function carregarTodosJogos(){
        const resp = await listarTodosJogos();
        setJogos(resp);
    }

    const filteredGames = filtro.length >= 1
        ? jogos.filter(item => item.nome.toUpperCase().includes(filtro.toUpperCase()))
        : jogos

    useEffect(() => {
        carregarTodosJogos()
    }, [])

  return(
    <main className="admin-consultar">
    <BarraLateral selecionado='consultar'/>


    <div className="cont-faixa-cadastro">

         <HeaderAdmin/>
     

     <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar jogos por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                    </div>
                  
                  <div className='tabela'>
                  <table >
                        <thead>
                            <tr>
                                <th>IDENTIFICAÇÃO</th>
                                <th>NOME</th>
                                <th>VALOR</th>
                                <th>DISPONIVEL</th>
                                <th>QUANTIDADE</th>
                                <th>EDITAR E APAGAR</th>
                                
                            </tr>
                        </thead>
                        <tbody>

                        {filteredGames.map(item => 
                            
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.valor}</td>
                            <td>{item.disponivel ? 'Sim' : 'Não'}</td>
                            <td>{item.estoque}</td>
                            
                           
                            
                            <td>
                                <img src='/lapis.png' 
                                />


                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <img src='/lixo.png'/>
                            </td>
                        </tr>
                            
                        )}
                            
                         

                     
                            
                          
                        </tbody>
                    </table>
                  </div>
                   
                    
                </div>
            </div>
       </main>
  )
}