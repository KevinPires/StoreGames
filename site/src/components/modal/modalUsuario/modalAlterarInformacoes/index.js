import { useState } from 'react'
import './index.scss'
import Storage from 'local-storage'
import { alterarInformacoes, carregarUsuario } from '../../../../api/usuario'
import { useParams } from 'react-router-dom'



export default function ModalAlteraInformacoes({ exibir , fecha}){
    const { id } = useParams()
    const [ dados, setDados] = useState({info:[], infoLogin:[] })
    const [usuario, setUsuario] = useState('')
    const [cep, setCep] = useState('')

    if (!exibir) {
        exibirUsuario()
        return <> </>
    }

    async function exibirUsuario() {
        const x = await carregarUsuario(id)
        setDados(x)
    }

    async function alterarInfo(){
        try {
            

            if(!usuario){
                alert('Digite um campo para altera')
            }else{
                const r = await alterarInformacoes(dados.info.id, usuario, cep)
                alert('alterado com sucesso')
            }
            
        } catch (err) {
            console.log(err)
        }
    }
    return(
        <main className="comp-modal-informacoes">
            <div className={`modal-informacoes`}>
                <div className='conteudo'>
                    <h2>Editar informações <img className='img-close' src='/closeicon.png' alt='' onClick={fecha} /></h2>
                    <div>
                        <div className="form-meio">
                            <form>
                                <label>Nome:</label>
                                <input type="txt" value={usuario} onChange={e => setUsuario(e.target.value)}/>
                            </form>
                        </div>


                        <div className="form-meio">
                            <form>
                                <label>cep:</label>
                                <input type="txt" value={cep} onChange={e => setCep(e.target.value)}/>
                            </form>
                        </div>

                        
                    </div>
                    <button onClick={alterarInfo}>Salvar</button>
                </div>
            </div>
        </main>
    )
}