import './index.scss'
import HeaderLoja from '../../../components/headerLoja'
import Rodape from '../../../components/Rodapé'
import { useParams } from 'react-router-dom';
import { detalheJogo } from '../../../api/jogos';
import { useEffect, useState } from 'react';
import CadastratJogos from '../../admin/cadastrarJogos';
import { API_URL } from '../../../api/config';


export default function DetalhesProduto(){

    const [jogo, setJogo] =  useState([])
    const { id } = useParams();


    async function carregarDetalhes () {
        const detalhes = await detalheJogo(id)
        setJogo(detalhes)
        console.log(detalhes)
    }

    function carregarImagem () {
        return API_URL + '/' + jogo.imagem
    }

    useEffect(() => {

        carregarDetalhes()
        

    }, [])

    return(
        <main className='page-produto'>
            <HeaderLoja/>
            <div className='box-cima'>
                <div className='bloc-img'>
                    <div className='box-img'>
                        <img src={carregarImagem()} alt=''/>
                    </div>
                    <div className='favorito'>
                        <img src='/coracaoIcon.png' alt='' />
                        <p>Adiciona aos <br/>favoritos</p>
                    </div>
                </div>
                <div className='bloc-info'>
                    <h1>{jogo.nome}</h1>
                    <div className='display-row'>
                        <div style={{marginRight : "60px"}}>
                            <h4>Plataforma:</h4> 
                            Xbox,PC e Ps4
                        </div>
                        <div>
                            <h4>Genêro:</h4>
                            Ação
                        </div>
                    </div>
                    <div>
                        <h4>Disponivel:</h4> 
                        {jogo.disponivel ? "Sim" : "Não"} 
                    </div>
                    <div>
                        <h4>Descrição</h4>
                        {jogo.descricao}
                    </div>
                </div>
                <div className='bloc-pagamento'>
                    <div className=' card-pagamento'>
                        <div className='cima-pagamento'>
                            <div>
                                <h5>Preço</h5>
                                R$ {jogo.valor}
                            </div>
                            <img src='/logoStoreGames.png' alt=''/>    
                        </div>
                        <div>
                            <img src='/bandeirasCartao.png' alt=''/>
                        </div>
                       
                       <button className='bt-adic'>Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>

            <div className='box-baixo'>
                <div className='bloc-req'>
                    <h2>Requisitos minimos</h2>
                    <p>
                       {jogo.requisitos}
                    </p>
                </div>
                <div className='bloc-jogos'>
                    <h2>Jogos do mesmo gênero</h2>
                    <div className='jogos'>
                        <div>
                            <img  className='img-gta' src='/Imagem GTA.png' alt=''/>
                            <h4>Grand Theft Auto V </h4>
                        </div>
                        <div>
                            <img  className='img-gta' src=' /Imagem GTA.png' alt=''/>
                            <h4>Grand Theft Auto V </h4>
                        </div>
                        <div>
                            <img className='img-gta' src='/Imagem GTA.png' alt=''/>
                            <h4>Grand Theft Auto V </h4>
                        </div>
                        <div>
                            <img className='img-gta' src='/Imagem GTA.png' alt=''/>
                            <h4>Grand Theft Auto V </h4>
                        </div>
                    </div>
                    <button className='btn-loja'>Ir para loja</button>
                </div>
            </div>
            <Rodape/>
        </main>
    )
}