import '../../../../common/common.scss'
import OptionsUser from '../../../../components/AreaUsuario/menuLateral'
import HeaderLoja from '../../../../components/headerLoja'
import Rodape from '../../../../components/Rodapé'
import './index.scss'


export default function AreaLoja () {

    return (
        <main className='usuario-page'>

            <HeaderLoja/>
 
            <section className="container-user">
                <div className="options">
                    <OptionsUser/>  
                </div>

                <div className="box-info">
                    <div className="container-informacoes">
                        
                        <div className="boxusuario">
                            <img id='user-icon' src='./icon-user.jpg'/>
                            <div className="containerinfos">
                                <h1>Bem vindo, <span>Luan R!</span></h1>
                                <h1>emaildocara@gmail.com</h1>
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
                                <b for='nome'>Nome: </b> <span id='nome'>Luan Reinhold</span>
                                <b for='endereco'>Endereço: </b> <span id='endereco'>Rua Aneis de Netuno</span>
                                <b for='cpf'>Cpf: </b> <span id='cpf'>049839029</span>
                            </div>

                            <div className="flexboxcolumn">
                                <b for='cep'>Cep: </b> <span id='cep'>048992-390</span>
                                <b for='nascimento'>Nascimento: </b> <span id='nascimento'>10/10/1997</span>
                            </div>
                        </div>
                            <h1>Informações da Conta:</h1>
                        <div className="container-conta">
                            <div className="box-info-conta">
                                <div className="flexboxcolumn">
                                    <b for='email'>Email: </b> <span id='email'>emaildocara@gmail.com</span>
                                    <b for='compra'>Data ultima compra: </b> <span id='endereco'>09/05/2022</span>
                                    <b for='senha'>Senha: </b> <span id='senha'>*******</span>
                                </div>
                            </div>
                            <div className="container-botoes">
                                <button>Alterar Senha</button> <button>Editar Informações</button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Rodape/>
        </main>
    )
}