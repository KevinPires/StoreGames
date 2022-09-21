import './index.scss'
import { listarGenero } from '../../../api/generoApi'
import { listarPlataforma } from '../../../api/plafatormaApi'

import { useEffect, useState } from 'react'
import HeaderAdmin  from '../../../components/adminHeader'
import BarraLateral from '../../../components/BarraLateral'
import InputCadastro from '../../../components/inputCadastro'


export default function CadastratJogos(){
    const [idGenero, setIdGenero] = useState();
    const [generos, setGeneros] = useState([]);

    const [idPlataforma, setIdPlataforma] = useState();
    const [plataformas, setPlataformas] = useState([]);

    const [platSelecionadas, setPlatSelecionadas] = useState([]);
    const [genSelecionadas, setGenSelecionadas] = useState([]);
    
    async function carregarGenero () {
        const load = await listarGenero()
        setGeneros(load)
    }

    async function carregarPlataformas() {
        const load = await listarPlataforma()
        setPlataformas(load)
    }

    function buscarNomePlataforma(id) {
        const plat = plataformas.find(item => item.id == id);
        return plat.plataforma;
    }

    function adicionarPlataforma() {
        if (!platSelecionadas.find(item => item == idPlataforma)) {
            const plataformas = [...platSelecionadas, idPlataforma];
            setPlatSelecionadas(plataformas);
        }
    }

    function BuscarNomeGenero(id){
        const gen = generos.find(item => item.id == id);
        return gen.genero;
    }

    function adicionarGenero(){
        if(!genSelecionadas.find(item => item == idGenero)){
            const generos = [... genSelecionadas, idGenero];
            setGenSelecionadas(generos);
        }
    }

    useEffect(() => {
        carregarGenero()
        carregarPlataformas()
    }, [])
    

    return (
  
    <main className="cadastrar-jogos-page">
          
        <BarraLateral selecionado='cadastrar'/>

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
                          
                                {generos.map(genero     => 
                                    <option value={genero.id}>{genero.genero}</option>
                                )}
                                   
                            </select>
                            <div className='adicionar' onClick={adicionarGenero}><img  className='maisAdicionar' src="/mais.png" alt="consultar" /></div>
                            <div>
                                <label></label>
                                <div className='cat-conteiner'>
                                    {genSelecionadas.map(id =>
                                        <div className='plat-selecionada'>
                                            {BuscarNomeGenero(id)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>


                        <div className="labelInput">
                          <label htmlFor="">Plataforma:</label> 
                          <select value={idPlataforma} name="generos" id="generos"  onChange={e => setIdPlataforma(e.target.value)}>
                            <option selected disabled hidden> Selecione </option>
                                {plataformas.map (item => 
                                    <option value={item.id}>{item.plataforma}</option>
                                )}
                           
                            </select>
                            <div className='adicionar' onClick={adicionarPlataforma}><img  className='maisAdicionar' src="/mais.png" alt="consultar" /></div>
                                <div>
                                    <label></label>
                                    <div className='cat-conteiner'>
                                        {platSelecionadas.map(id =>
                                            <div className='plat-selecionada'>
                                                {buscarNomePlataforma(id)}
                                            </div>
                                        )}
                                </div>
                    
                            </div>

                        </div>

                    </section>

                  <section className="container2">
                      
                      <div className="boxColumn">
                          <label htmlFor="">Descrição</label>             
                          <textarea maxLength="350" style={{resize: "none"}} name="" id="" cols="43" rows="8"></textarea> 
                      </div>

                      <div className="boxColumn">
                          <label htmlFor="">Requisitos Minimos</label>    
                          <textarea maxLength="350" style={{resize: "none"}} name="" id="" cols="43" rows="8"></textarea>
                      </div>

                      <div className="boxColumn">
                          <label htmlFor="">Imagem</label>                
                          <textarea maxLength="350" style={{resize: "none"}} name="" id="" cols="20" rows="10"></textarea>
                      </div>

                  </section>

                  <section className="container3">

                      <div className="labelInput">
                          <label>Disponivel:</label>                         
                          <select name="generos" id="generos"><option></option></select>
                      </div>
                      <div className="labelInput">
                          <label htmlFor="">Valor:</label>                    
                          <InputCadastro/>
                          
                      
                      </div>
                      <div className="labelInput">
                          <label htmlFor="">Quantidade:</label>               
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