
import '../../../../common/common.scss'
import OptionsUser from '../../../../components/AreaUsuario/menuLateral'
import { useParams } from 'react-router-dom';
import HeaderLoja from '../../../../components/headerLoja'
import ModalAlteraInformacoes from '../../../../components/modal/modalUsuario/modalAlterarInformacoes'
import Rodape from '../../../../components/Rodapé'
import './index.scss'
import { carregarUsuario } from '../../../../api/usuario';
import { useEffect, useState } from 'react';


export default function AreaLoja () {
    const { id } = useParams()
    const [dados, setDados] = useState({info:[], infoLogin:[] })

    async function exibirUsuario() {
       const x = await carregarUsuario(id)
       setDados(x)
       console.log()
    }
    
    useEffect(() => {
        exibirUsuario()
    }, [])
    
    const [exibirModal,setExibirModal] = useState(false)

    function exibirModalInfo(){
        setExibirModal(true)
    }

    function removerModalInfo(){
        setExibirModal(false)
    }
    return (
        <main className='usuario-page'>

            <HeaderLoja/>
            <ModalAlteraInformacoes exibir={exibirModal} fecha={removerModalInfo}/>
            <section className="container-user">
                <div className="options">
                    <OptionsUser
                    escolhido='conta'/>  
                </div>

                <div className="box-info">
                    <div className="container-informacoes">
                        
                        <div className="boxusuario">
                            <img id='user-icon' src='/icon-user.jpg' alt='lala'/>
                            <div className="containerinfos">
                                <h1>Bem vindo, <span>{dados.info.nome}!</span></h1>
                                <h1>{dados.infoLogin.email}</h1>
                            </div>
                    
                        </div>
                        <div className="boxdetalhes">
                            <h1>Detalhes</h1>
                            <p>Conta criada em: 10/10/22</p>
                        </div>
                    </div>
                    
                    <section className="detalhes">
                        <h1>Informações Pessoais:</h1>
                        <div className="container-pessoal">
                            <div className="flexboxcolumn">
                                <b for='nome'>Nome: </b> <span id='nome'>{dados.info.nome}</span>
                                <b for='endereco'>Endereço: </b> <span id='endereco'>{dados.info.cep}</span>
                                <b for='cpf'>Cpf: </b> <span id='cpf'>{dados.info.cpf}</span>
                            </div>

                            <div className="flexboxcolumn">
                                <b for='cep'>Cep: </b> <span id='cep'>{dados.info.cep}</span>
                                <b for='nascimento'>Nascimento: </b> <span id='nascimento'>{dados.info.nascimento ? dados.info.nascimento.substr(0,10) : 'data'}</span>
                            </div>
                        </div>
                            <h1>Informações da Conta:</h1>
                        <div className="container-conta">
                            <div className="box-info-conta">
                                <div className="flexboxcolumn">
                                    <b for='email'>Email: </b> <span id='email'>{dados.infoLogin.email}</span>
                                    <b for='compra'>Data ultima compra: </b> <span id='endereco'>09/05/2022</span>
                                    <b for='senha'>Senha: </b> <span id='senha'>{dados.infoLogin.senha}</span>
                                </div>
                            </div>
                            <div className="container-botoes">
                                <button>Alterar Senha</button> <button onClick={exibirModalInfo}>Editar Informações</button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Rodape/>
        </main>
    )
}