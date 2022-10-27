import { useEffect, useState } from 'react'
import { alterarSenhaUsuario } from '../../../api/usuario'
import Storage from 'local-storage'
import './index.scss'



export default function ModalAlteraSenha({ exibir, fecha }) {

    const [infoStorage, setInfostorage] = useState('')
    const [senha, setSenha] = useState('')

    if (!exibir) {
        return <> </>
    }


    function exibirNome() {
        const taLogado = Storage('usuario-logado')
        setInfostorage(taLogado)
    }

    async function salvarAlteracao() {
        try {
            exibirNome()

            if (!senha) {
                alert('Insira um valor valido no campo de senha')
            } else {
                const r = await alterarSenhaUsuario(infoStorage.id, senha)
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