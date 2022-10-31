import { useEffect, useState } from 'react'
import { alterarSenhaUsuario, carregarUsuario } from '../../../api/usuario'
import Storage from 'local-storage'
import './index.scss'
import { useParams } from 'react-router-dom'



export default function ModalAlteraSenha({ exibir, fecha }) {
    const { id } = useParams()
    const [senha, setSenha] = useState('')
    const [ dados, setDados] = useState({info:[], infoLogin:[] })

    if (!exibir) {
        exibirUsuario()
        return <> </>
    }

    async function exibirUsuario() {
        const x = await carregarUsuario(id)
        setDados(x)
    }


    async function salvarAlteracao() {
        try {
            exibirUsuario()

            if (!senha) {
                alert('Insira um valor valido no campo de senha')
            } else {
                const r = await alterarSenhaUsuario(dados.info.id, senha)
                alert('alterado com sucesso')
                fecha()
            }

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <main className="comp-modal-senha">
            <div className={`modal-informacoes`}>
                <div className='conteudo'>
                    <h2>Alterar Senha <img className='img-close' src='/closeicon.png' alt='' onClick={fecha} /> </h2>
                    <div>
                        <div className="form-meio">
                            <form>
                                <label>Nova senha</label>
                                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                            </form>

                        </div>
                    </div>
                    <button onClick={salvarAlteracao}>Salvar</button>
                </div>
            </div>
        </main>
    )
}