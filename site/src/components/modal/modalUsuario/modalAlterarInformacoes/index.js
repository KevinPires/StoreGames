import { useState } from 'react'
import './index.scss'
import Storage from 'local-storage'
import { alterarInformacoes } from '../../../../api/usuario'



export default function ModalAlteraInformacoes({ exibir , fecha}){

    const [infoStorage, setInfostorage] = useState('')
    const [usuario, setUsuario] = useState('')
    const [cep, setCep] = useState('')


    if (!exibir) {
        return <> </>
    }


    function exibirNome() {
        const taLogado = Storage('usuario-logado')
        setInfostorage(taLogado)
    }

    async function alterarInfo(){
        try {
            exibirNome()
            if(!usuario){
                alert('Digite um campo para altera')
            }else{
                const r = await alterarInformacoes(infoStorage.id, usuario, cep)
                alert('alterado com sucesso')
                fecha()
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