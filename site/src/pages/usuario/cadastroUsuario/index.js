import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import {cadastrarUsuario} from'../../../api/usuario'
import {useNavigate} from'react-router-dom'

export default function CadastroUsuario() {
    const [nome, setNome]= useState('');
    const [cep, setCep]= useState('');
    const [nascimento, setNascimento] = useState('')
    const [cpf ,setCpf] = useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha] = useState('');
    

    const [erro,setErro] = useState([]);
    const navigate = useNavigate();

    async function botaoCadastro(){
        try {
            const r = await cadastrarUsuario(nome, email, senha, cep , nascimento, cpf)

            if(r.status === 401){
                setErro(r.data.erro)
            }else{
                navigate('/usuario/login')
            }
        } catch (err) {
            setErro(err.response.data.erro)
        }
    }


    return(
        <main className='page-usuario-cadastro'>

            <section className='conteiner-page-1'>
             <div className='titulo'> <h1>Já possui conta?</h1></div>
             <div className='subtitulo'>Caso já possua uma conta, realize o login pressionando o botão abaixo</div>
             <Link to='/usuario/login' className='botaodiv'> <button className='botao'><b>Realizar Login</b></button></Link>
            </section>

            <section className='conteiner-page-2'>
                <div className='titulo2'> <h1>Criar conta</h1> </div>

                <div className='boxtext'><input placeholder='Nome' type='text' className='textbox' value={nome} onChange={e => setNome(e.target.value)}></input ></div>
                <div className='boxtext'><input placeholder='Email' type='text' className='textbox' value={email} onChange={e => setEmail(e.target.value)}></input ></div>
                <div className='boxtext'><input placeholder='Senha' type='password' className='textbox' value={senha} onChange={e => setSenha(e.target.value)}></input ></div>
                <div className='boxtext'><input placeholder='Cep' type='text' className='textbox' value={cep} onChange={e => setCep(e.target.value)}></input ></div>
                <div className='boxtext'><input placeholder='Data de nascimento' type='date' className='textbox' value={nascimento} onChange={e => setNascimento(e.target.value)} ></input ></div>
                <div className='boxtext'><input placeholder='CPF' type='text' className='textbox' value={cpf} onChange={e => setCpf(e.target.value)}></input ></div>
                <button className='botao2' onClick={botaoCadastro}>Cadastrar</button>
                <div className='msg-erro'>
                    { <ul>
                        {erro.map(e => 
                            <li> {e.Erro} </li>
                        )}
                    </ul> }
                    
                </div>
             </section>
        </main>
    )
}



