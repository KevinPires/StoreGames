import BarraVantagens  from '../../../components/TelaDeJogos/vantagens'
import BarraFilto from '../../../components/TelaDeJogos/barraFiltros'

import './index.scss'
import '../../../common/common.scss'
import CardJogo from '../../../components/cardJogo'
import Rodape from '../../../components/Rodapé'
import { useState, useEffect } from 'react'
import { listarTodosJogos, listarTodosJogosPorNome } from '../../../api/jogos'
import Pagination from '../../../components/pagination'
import { Link } from 'react-router-dom'


export default function LojaArea () {
    const [jogos, setJogos] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [jogoPorPage] = useState(20)
    
    const [texto, setTexto] = useState('')

    async function filtrar() {
         const resp = await listarTodosJogosPorNome(texto)
         setJogos(resp)
    }
 
    useEffect(() => {
         filtrar()
    }, [texto])

    //

    useEffect(()=>{
        const fetchPost = async ()=>{
            setLoading(true)
            const res = await listarTodosJogos()
            setJogos(res)
            setLoading(false)
        }

        fetchPost()
    }, []);

    const indexOfLastPost = currentPage * jogoPorPage;
    const indexOfFirstPost = indexOfLastPost - jogoPorPage;
    const currentJogos =jogos.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <main className="lojaPage">
                    <section className="HeaderLoja">
                        <section className="containerPesquisa">
                            <img id="formatLogo" src="/logo.png" alt="logo" />

                            <section className="input-Pesquisa" >   
                                <input type="text" placeholder='Pesquisar Jogo' className='input-pesquisa-format' value={texto} onChange={e => setTexto(e.target.value)} />
                            </section>
                            
                            <div className="boxUsuario">
                                <img id='svgIcon' src="/Icon.svg" alt="iconUser" />
                                <span>Bem vindo, Fulano <a>Minha Conta</a> | <a>Sair</a></span>
                            </div>
                        </section>
                        <section className="containerCategoria">
                            <li className='listaOpcoes'>
                                <Link to='/jogos'>Loja</Link>
                                <p>Categorias</p>
                            <Link to='/jogos'>Suporte</Link>
                                <p>Área do Usuario</p>
                            </li>
                        </section>
                    </section>
            <section className='container-espacamanto'>

            </section>
            <section className="faixaum">  
                <p>Compre o seu jogo aqui</p>
            </section>

            <BarraVantagens/>
            <section className='container flexboxrow'>
                <BarraFilto/>
                
                <div className='container-jogos'>
                    <CardJogo jogos={currentJogos} loading={loading}/>
                    <Pagination 
                        jogoPorPage={jogoPorPage} 
                        totalJogos={jogos.length} 
                        paginate={paginate}
                    />
                </div>
            </section>
            <Rodape/>

        </main>
    )
}