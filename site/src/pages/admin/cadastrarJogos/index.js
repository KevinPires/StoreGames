import './index.scss'
import { listarGenero } from '../../../api/generoApi'
import { listarPlataforma } from '../../../api/plafatormaApi'
import { inserirJogo } from '../../../api/produto'

import { useEffect, useState } from 'react'
import HeaderAdmin  from '../../../components/adminHeader'
import BarraLateral from '../../../components/BarraLateral'



export default function CadastratJogos(){
    const [nome,setNome] = useState('');
    const [descricao,setDescricao] = useState('');
    const [resquisitos, setResquisitos] = useState('');
    const [valor,setValor] = useState('');
    const [estoque, setEstoque] = useState(0);
    const [disponivel, setDisponivel] = useState(false);
    const [maisVendido, setMaisVendido] = useState(false);
    

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

    async function salvar() {
        try {
            const valorProduto = Number(valor.replace(',', '.'));

            const r = await inserirJogo(nome, valor, descricao, estoque, resquisitos, disponivel, maisVendido, generos, plataformas );
            alert ('Jogo cadastrado com sucesso');
        }
        catch (err) {
            alert ('não cadastrou');
        }
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
    
    function escolherImagem(){
        document.getElementById('imagemCapa').click();
    }

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
                          <input className='input-cadastro input-height' type="txt" value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>

                        <div className="labelInput">
                            <label htmlFor="">Genero:</label> 
                            <select value={idGenero}name="generos" id="generos" onChange={e => setIdGenero(e.target.value)}>
                            <option selected disable hidden> Selecione </option>
                          
                                {generos.map(genero => 
                                    <option value={genero.id}>{genero.genero}</option>
                                )}
                                   
                            </select>
                            <div className='adicionar' onClick={adicionarGenero}><img  className='maisAdicionar' src="/mais.png" alt="consultar" /></div>
                            <div>
                                <label></label>
                                <div className='plat-conteiner'>
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
                          <textarea maxLength="350" style={{resize: "none"}} name="" id="" cols="43" rows="8" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea> 
                      </div>

                      <div className="boxColumn m-right">
                          <label htmlFor="">Requisitos Minimos</label>    
                          <textarea maxLength="350" style={{resize: "none"}} name="" id="" cols="43" rows="8" value={resquisitos} onChange={e => setResquisitos(e.target.value)}></textarea>
                      </div>

                      <div className="boxColumn img-edit m-all" onClick={escolherImagem} >
                       
                        <img src='/icon-upload.svg' />
                        <input type='file' id='imgCapa' />
                        
                      </div>

                    </section>

                    <section className="container3">

                      <div className="labelInput">
                          <label>Disponivel:</label>                         
                          <input type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)}/>
                      </div>
                      <div className="labelInput">
                          <label>Destaque:</label>                         
                          <input type='checkbox' checked={maisVendido} onChange={e => setMaisVendido(e.target.checked)} />
                      </div>

                      <div className="labelInput m-left">
                          <label htmlFor="">Valor:</label>                    
                          <input className='input-cadastro' type='txt' value={valor} onChange={e => setValor(e.target.value)}/>
                          
                      
                      </div>
                      <div className="labelInput">
                          <label htmlFor="">Quantidade:</label>               
                          <input className='input-cadastro input-height' type='txt' value={estoque} onChange={e => setEstoque(e.target.value)}/>
                      </div>

                    </section>
                <section className="faixa-botao" onClick={salvar}><button>Cadastrar Jogo</button></section>
                  
              </section>
            </section>
    
            
            </section>
            

            
        </div>
          
       
    </main>

    )
}