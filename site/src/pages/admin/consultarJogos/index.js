import './index.scss';

import BarraLateral from '../../../components/BarraLateral';
import HeaderAdmin from '../../../components/adminHeader';
import { listarTodosJogos, listarTodosJogosPorNome, deletarJogo } from '../../../api/jogos';
import { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function ConsultarJogos() {

    const [jogos, setJogos] = useState([])
    const [filtro, setFiltro] = useState('')

    const navigate = useNavigate();

    async function carregarTodosJogos() {
        const resp = await listarTodosJogos();
        setJogos(resp);
    }

    const filteredGames = filtro.length >= 1
        ? jogos.filter(item => item.nome.toUpperCase().includes(filtro.toUpperCase()))
        : jogos

    useEffect(() => {
        carregarTodosJogos()
    }, [])

    async function removerJogoClick(id, nome) {

        confirmAlert({
            title: 'Remover jogo',
            message: `Deseja remover o jogo ${nome} ? `,
            buttons: [
                {
                    label: 'Sim', onClick: async () => {
                        const resposta = await deletarJogo(id, nome)
                        if (filtro === '')
                            carregarTodosJogos();


                        toast.dark('filme removido')
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }

    function alterarJogo(id) {
        navigate(`/admin/cadastro/${id}`);
    }

    return (
        <main className="admin-consultar">
            <BarraLateral selecionado='consultar' />


            <div className="cont-faixa-cadastro">
                <HeaderAdmin />
                <div className='conteudo'>
                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar jogos por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                    </div>
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
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.disponivel ? 'Sim' : 'Não'}</td>
                                    <td>{item.estoque}</td>
                                    <td>
                                        <img src='/lapis.png' onClick={() => alterarJogo(item.id)} />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img src='/lixo.png' onClick={() => removerJogoClick(item.id, item.nome)} />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>



            </div>
        </main>
    )
}