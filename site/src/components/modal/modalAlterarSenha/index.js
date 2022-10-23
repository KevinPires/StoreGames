import './index.scss'




export default function ModalAlteraSenha({exibir , fecha}) {
    if(!exibir){
        return <> </>
    }

    return (
        <main className="comp-modal-senha">
            <div className={`modal-informacoes`}>
                <div className='conteudo'>
                    <h2>Alterar Senha </h2>
                    <div>

                        <div className="form-meio">
                            <form>
                                <label>Senha atual:</label>
                                <input type="password" />
                            </form>
                        </div>

                        <div className="form-meio">
                            <form>
                                <input type='password' />
                            </form>
                        </div>

                        <div className="form-meio">
                            <form>
                                <label>Nova senha</label>
                                <input type="password" />
                            </form>
                        </div>


                    </div>
                    <button onClick={fecha}>Salvar</button>
                </div>
            </div>
        </main>
    )
}