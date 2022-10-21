import './index.scss'
import { listarGenero } from '../../../api/generoApi'
import { listarPlataforma } from '../../../api/plafatormaApi'
import { alterarJogo, buscarImg, enviarImagemJogo, inserirJogo } from '../../../api/produto'

import { toast, ToastContainer } from 'react-toastify' 
import { useEffect, useState } from 'react'
import HeaderAdmin from '../../../components/adminHeader'
import BarraLateral from '../../../components/BarraLateral'
import InputCadastro from '../../../components/inputCadastro'
import InputTextArea from '../../../components/inputTextArea'
import { useParams } from 'react-router-dom'
import { buscarJogoPorId } from '../../../api/jogos'

export default function CadastratJogos() {
    const [idJogo, setIdJogo] = useState();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [resquisitos, setResquisitos] = useState('');
    const [valor, setValor] = useState('');
    const [estoque, setEstoque] = useState(0);
    const [disponivel, setDisponivel] = useState(false);
    const [maisVendido, setMaisVendido] = useState(false);

    const [imagem, setImagem] = useState('')


    const [idGenero, setIdGenero] = useState();
    const [generos, setGeneros] = useState([]);

    const [idPlataforma, setIdPlataforma] = useState();
    const [plataformas, setPlataformas] = useState([]);

    const [platSelecionadas, setPlatSelecionadas] = useState([]);
    const [genSelecionadas, setGenSelecionadas] = useState([]);

    const { id } = useParams();


    async function carregarGenero() {
        const load = await listarGenero()
        setGeneros(load)
    }

    async function carregarPlataformas() {
        const load = await listarPlataforma()
        setPlataformas(load)
    }

    async function carregarJogo(){
        if (!id) return;

        const resposta = await buscarJogoPorId(id);
        setIdJogo(resposta.info.id);
        setNome(resposta.info.nome);
        setValor(resposta.info.valor);
        setDescricao(resposta.info.descricao);
        setImagem(resposta.info.imagem);
        setEstoque(resposta.info.estoque);
        setResquisitos(resposta.info.requisitos);
        setDisponivel(resposta.info.disponivel);
        setMaisVendido(resposta.info.maisvendido);
        setGenSelecionadas(resposta.genero);
        setPlatSelecionadas(resposta.plataforma)
    }
    // cadastrar e alterar
    async function salvar() {
        try {
            if (!imagem)
                throw new Error('Escolha a capa do jogo.');
    
            if (!id) {
                const novoJogo = await inserirJogo(nome, valor, descricao, estoque, resquisitos, disponivel, maisVendido, genSelecionadas, platSelecionadas);
                const r = await enviarImagemJogo(novoJogo, imagem);
                setIdJogo(novoJogo);
               
                toast('Jogo cadastrado com sucesso');
            }
            else{
                const novoJogo = await alterarJogo(id, nome, valor, descricao, estoque, resquisitos, disponivel, maisVendido, genSelecionadas, platSelecionadas);
              
                if (typeof(imagem) === 'object'){    
                const r = await enviarImagemJogo(id, imagem);
                
                }
                toast('Jogo alterado com sucesso');
            }

        }
        catch (err) {
        if (err.response)
            toast.error(err.response.data.erro)
        else
            toast.error(err.message);
        
            
        }
    }

    function buscarNomePlataforma(id) {
        const plat = plataformas.find(item => item.id === id);
        return plat.plataforma;
    }

    function adicionarPlataforma() {
       if (!idPlataforma){
        return
       }
        
        
        if (!platSelecionadas.find(item => item === idPlataforma)) {
            const plataformas = [...platSelecionadas, idPlataforma];
            setPlatSelecionadas(plataformas);
        }
        
    }

    function removerPlataforma(id) {
        const x =platSelecionadas.filter(item => item !== id);
        setPlatSelecionadas(x);
    }


    function BuscarNomeGenero(id) {
        const gen = generos.find(item => item.id === id);
        return gen.genero;
    }

    function adicionarGenero() {
        if (!idGenero){
            return
           }
        
        
        if (!genSelecionadas.find(item => item === idGenero)) {
            const generos = [...genSelecionadas, idGenero];
            setGenSelecionadas(generos);
        }
    }

    function removerGenero(id) {
        const x =genSelecionadas.filter(item => item !== id);
        setGenSelecionadas(x);
    }

    useEffect(() => {
        carregarGenero()
        carregarPlataformas() 
        carregarJogo()
        
    }, [])

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    function mostrarImagem() {
        if (typeof (imagem) === 'object') {
            return URL.createObjectURL(imagem)
        }
        else {
            return buscarImg(imagem);
        }
       
    }
    return (

        <main className="cadastrar-jogos-page">
            <ToastContainer/>
            <BarraLateral selecionado='cadastrar' />

            <div className="cont-faixa-cadastro">

                <HeaderAdmin />

                <section className="container-Column">

                    <section className="pageCadastro">

                        <section className="containerCadastrar">
                            <section className="header">
                                <p>Cadastrar Jogos</p>
                            </section>  

                            <section className="container1">

                                <div className="labelInput">
                                    <label>Nome:</label>
                                    <InputCadastro type='text' value={nome} onChange={e => setNome(e.target.value)} />
                                </div>

                                <div className="labelInput">
                                    <label htmlFor="">Genero:</label>
                                    <select value={idGenero} name="generos" id="generos" onChange={e => setIdGenero(Number(e.target.value))}>
                                        <option > Selecione </option>

                                        {generos.map(genero =>
                                            <option key={genero.id} value={genero.id}>{genero.genero}</option>
                                        )}

                                    </select>
                                    <div className='adicionar' onClick={adicionarGenero}><img className='maisAdicionar' src="/mais.png" alt="consultar" /></div>
                                    <div>
                                        <label></label>
                                        <div className='plat-conteiner'>
                                            {genSelecionadas.map(id =>
                                                <div onClick={() => removerGenero(id)}
                                                    key={id}
                                                    className='plat-selecionada'
                                                >
                                                    {BuscarNomeGenero(id)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                <div className="labelInput">
                                    <label htmlFor="">Plataforma:</label>
                                    <select value={idPlataforma} name="generos" id="generos" onChange={e => setIdPlataforma(Number(e.target.value))}>
                                        <option> Selecione </option>
                                        {plataformas.map(item =>    
                                           <option 
                                                key={item.id}
                                                value={item.id}
                                            > {item.plataforma}</option>
                                        )}
                                            

                                    </select>
                                    <div className='adicionar' onClick={adicionarPlataforma}>
                                        <img className='maisAdicionar' src="/mais.png" alt="consultar" />
                                    </div>
                                    <div>
                                        <label></label>
                                        <div className='cat-conteiner'>
                                            {platSelecionadas.map(id =>
                                                <div onClick={() => removerPlataforma(id)}
                                                    key={id}
                                                    className='plat-selecionada'
                                                >
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
                                    <InputTextArea maxLength='350' style={{ resize: "none" }} cols='43' rows='8' value={descricao} onChange={e => setDescricao(e.target.value)} />
                                </div>

                                <div className="boxColumn m-right">
                                    <label htmlFor="">Requisitos Minimos</label>
                                    <InputTextArea maxLength='350' style={{ resize: "none" }} cols='43' rows='8' value={resquisitos} onChange={e => setResquisitos(e.target.value)} />

                                </div>

                                <div className=" img-edit m-all imagem-perfil" onClick={escolherImagem}>
                                    {!imagem &&
                                        <img className="img-Arq" src='/icon-upload.svg' alt='' />
                                    }
                                    {imagem &&
                                        <img src={mostrarImagem()} alt='' className='w-img' />
                                    }
                                    <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} />
                                </div>
                            </section>

                            <section className="container3">
                                <div className='box-left'>
                                    <div className="labelInput">
                                        <label>Disponivel:</label>
                                        <input type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)} />
                                    </div>

                                    <div className="labelInput">
                                        <label>Destaque:</label>
                                        <input type='checkbox' checked={maisVendido} onChange={e => setMaisVendido(e.target.checked)} />
                                    </div>
                                </div>
                                
                                <div className="labelInput m-left">
                                    <label htmlFor="">Valor:</label>
                                    <InputCadastro type='number' value={valor} onChange={e => setValor(e.target.value)} />
                                </div>

                                <div className="labelInput">    
                                    <label htmlFor="">Quantidade:</label>
                                    <InputCadastro type='number' value={estoque} onChange={e => setEstoque(e.target.value)} />
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