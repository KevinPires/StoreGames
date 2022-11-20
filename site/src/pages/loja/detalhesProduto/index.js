import './index.scss'
import HeaderLoja from '../../../components/headerLoja'
import Rodape from '../../../components/Rodapé'
import { toast, ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { detalheJogo, listarGenerosIguais } from '../../../api/jogos';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../api/config';
import Storage from 'local-storage';
import { adicionarFavorito, verificarFavorito } from '../../../api/usuario';
import { useNavigate } from 'react-router-dom';


export default function DetalhesProduto(){

    const [jogo, setJogo] =  useState({info: {} ,generos: [] , plataformas: []})
    const { id } = useParams();

    const [infoStorage, setInfostorage] = useState()

    const [exibirCoracao, setExibirCoracao] = useState(false)

    const [jogosGenero, setJogosGenero] = useState([]);

    const Navigate = useNavigate();

    async function exibirJogosGenero () {
        let x = await listarGenerosIguais(jogo.generos[0].genero)
        setJogosGenero(x)
    }

    useEffect(() => {
        carregarDetalhes()
        handleSetStorage()
    }, [])

    useEffect(() => {
        if (infoStorage && jogo) {
            verificarFavoritoFront()
            exibirJogosGenero()
        }
    }, [infoStorage, jogo])

    
    const handleSetStorage = () => {
        const taLogado = Storage('usuario-logado')
        setInfostorage(taLogado)
    }

    // function navegar(item) {
    //     if(item.id){
    //         const x = Navigate('/produto/' + item.id + '/detalhe')
    //     }
            
    // }

    async function inserirFavorito(){
        try {
            const r = await adicionarFavorito(infoStorage.id, jogo.info.id)
            setExibirCoracao(true)
            toast('Jogo adicionado aos favoritos')
        } catch (err) {
            setExibirCoracao(false)
            toast.error('Jogo removido dos favoritos')
        }

    }

    async function carregarDetalhes () {
        const detalhes = await detalheJogo(id)
        setJogo(detalhes)
    }

    function carregarImagem () {
        return API_URL + '/' + jogo.info.imagem
    }

    function carregarImagem2 (item) {
        if(item.capa)
            return API_URL + '/' + item.capa
    }

    function adicionarAoCarrinho(){
        let carrinho = [];

        if(Storage('carrinho')){
            carrinho = Storage('carrinho')
        }

        if(!carrinho.find(item => item.id === id)){
            carrinho.push({
                id: id,
                qtd: 1
            })

            Storage('carrinho', carrinho)
        }

        alert('Produto adicionado ao carrinho!!');
    }

    async function verificarFavoritoFront(){
        const r = await verificarFavorito(infoStorage.id, jogo.info.id)
        if(r === true){
            setExibirCoracao(true)
        }
    }

    return(

        <main className='page-produto'>
            <ToastContainer/>
            <HeaderLoja/>
            <div className='box-cima'>
                <div className='bloc-img'>
                    <div className='box-img'>
                        <img src={carregarImagem()} alt=''/>
                    </div>
                    <div className='favorito'>
                        {exibirCoracao === false &&
                        <img src='/coracaoIcon.png' alt='' onClick={inserirFavorito}/>
                        }
                        {exibirCoracao === true &&
                        <img src='/vermelho-favorito.png' onClick={inserirFavorito}/>
                        }
                    <p>Adiciona aos <br/>favoritos</p>
                    </div>
                </div>
                <div className='bloc-info'>
                    <h1>{jogo.info.nome}</h1>
                    <div className='display-row'>
                        <div style={{marginRight : "40px"}}>
                            <h4>Plataforma:</h4>
                            <div className='cont-map'>
                                {jogo.plataformas.map(item =>
                                    <tr key={item.id}>
                                        <td className='td'>{item.plataforma}</td>
                                    </tr>
                                )}
                            </div>
                        </div>
                        <div>
                            <h4>Genêro:</h4>
                            <div className='cont-map'>
                                {jogo.generos.map(item =>
                                    <tr key={item.id}>
                                        <td className='td'>{item.genero}</td>
                                    </tr>
                                )}
                            </div>

                        </div>
                    </div>
                    <div>
                        <h4>Disponivel:</h4>
                        {jogo.info.disponivel ? "Sim" : "Não"}
                    </div>
                    <div>
                        <h4>Descrição</h4>
                        {jogo.info.descricao}
                    </div>
                </div>
                <div className='bloc-pagamento'>
                    <div className=' card-pagamento'>
                        <div className='cima-pagamento'>
                            <div>
                                <h5>Preço</h5>
                                R$ {jogo.info.valor}
                            </div>
                            <img src='/logoStoreGames.png' alt=''/>
                        </div>
                        <div>
                            <img src='/bandeirasCartao.png' alt=''/>
                        </div>

                       <button className='bt-adic' onClick={adicionarAoCarrinho }>Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>

            <div className='box-baixo'>
                <div className='bloc-req'>
                    <h2>Requisitos minimos</h2>
                    <p>
                       {jogo.info.requisitos}
                    </p>
                </div>
                <div className='bloc-jogos'>
                    <h2>Jogos do mesmo gênero</h2>
                    <div className='jogos'>

                        {jogosGenero.map(item=>
                            <div className='card-genero' >
                                <img  className='img-gta' src={carregarImagem2(item)} alt=''/>
                                <h4>{item.nome.slice(0,19)}</h4>
                            </div>
                        )}
                        
                        
                    </div>
                    <button className='btn-loja' onClick={()=> Navigate('/jogos')}>Ir para loja</button>
                </div>
            </div>
            <Rodape/>
        </main>
    )
}