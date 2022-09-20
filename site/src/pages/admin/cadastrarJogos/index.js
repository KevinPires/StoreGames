import './index.scss'
import { listarGenero } from '../../../api/generoApi'
import { listarPlataforma } from '../../../api/plafatormaApi'

import { useState } from 'react'
import HeaderAdmin  from '../../../components/adminHeader'
import BarraLateral from '../../../components/BarraLateral'
import InputCadastro from '../../../components/inputCadastro'


export default function CadastratJogos(){
    const [idGenero, setIdGenero] = useState();
    const [idPlataforma, setIdPlataforma] = useState();
    
    
    
    return (
  
      <main className="cadastrar-jogos-page">
          
          <BarraLateral/>

          <div className="cont-faixa-cadastro">

          <HeaderAdmin/>

            <section className="container-Column">
              
            <section className="pageCadastro">
              
              <section className="containerCadastrar">
                  <section className="header">
                      <p>Cadastrar Jogos</p>
                  </section>

                  <section className="container1">

                      <div className="labelInput">
                          <label>Nome:</label>
                          <InputCadastro/>
                      </div>

                      <div className="labelInput">
                          <label htmlFor="">Genero:</label> 
                          <select value={idGenero}name="generos" id="generos" onChange={e => setIdGenero(e.target.value)}>
                          <option selected disable hidden> Selecione </option>
                         
                            </select>
                      </div>


                      <div className="labelInput">
                          <label htmlFor="">Plataforma:</label> 
                          <select value={idPlataforma} name="generos" id="generos"  onChange={e => setIdPlataforma(e.target.value)}>
                            <option selected disable hidden> Selecione </option>

                           
                            </select>
                      </div>

                  </section>

                  <section className="container2">
                      
                      <div className="boxColumn">
                          <label htmlFor="">Descrição</label>             
                          <textarea name="" id="" cols="43" rows="8"></textarea> 
                      </div>

                      <div className="boxColumn">
                          <label htmlFor="">Requisitos Minimos</label>    
                          <textarea name="" id="" cols="43" rows="8"></textarea>
                      </div>

                      <div className="boxColumn">
                          <label htmlFor="">Imagem</label>                
                          <textarea name="" id="" cols="20" rows="10"></textarea>
                      </div>

                  </section>

                  <section className="container3">

                      <div className="labelInput">
                          <label>Disponivel:</label>                         
                          <select name="generos" id="generos"><option></option></select>
                      </div>
                      <div className="labelInput">
                          <label htmlFor="">Valor</label>                    
                          <InputCadastro/>
                      
                      </div>
                      <div className="labelInput">
                          <label htmlFor="">Quantidade</label>               
                          <InputCadastro/>
                      </div>

                  </section>
                  <section className="faixa-botao"><button>Cadastrar Jogo</button></section>
                  
              </section>
        </section>
    
            
            </section>
            

            
          </div>
          
       
      </main>

    )
}