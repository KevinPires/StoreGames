import BarraVantagens  from '../../../components/TelaDeJogos/vantagens'
import BarraFilto from '../../../components/TelaDeJogos/barraFiltros'
import HeaderLoja from '../../../components/headerLoja'
import './index.scss'
import '../../../common/common.scss'
import CardJogo from '../../../components/cardJogo'
import Rodape from '../../../components/Rodapé'
import { useState, useEffect } from 'react'
import { listarTodosJogos, listarTodosJogosPorNome } from '../../../api/jogos'
import Pagination from '../../../components/pagination'


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
           <HeaderLoja/>

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