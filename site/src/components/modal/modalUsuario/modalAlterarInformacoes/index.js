import './index.scss'




export default function ModalAlteraInformacoes({ exibir , fecha}){

    if(!exibir){
        return <> </>
    }

    return(
        <main className="comp-modal-informacoes">
            <div className={`modal-informacoes`}>
                <div className='conteudo'>
                    <h2>Editar informações </h2>
                    <div>
                        <div className="form">
                            <form>
                                <label>Nome:</label>
                                <input type="txt"/>
                            </form>
                            <form>
                                <label>Data de nascimento:</label>
                                <input type="date"/>
                            </form>
                        </div>

                        <div className="form-meio">
                            <form>
                                <label>Email:</label>
                                <input type="txt"/>
                            </form>
                        </div>

                        <div className="form">
                            <form>
                                <label>cep:</label>
                                <input type="txt"/>
                            </form>
                            <form>
                                <label>Cpf:</label>
                                <input type="txt"/>
                            </form>
                        </div>

                        
                    </div>
                    <button onClick={fecha}>Salvar</button>
                </div>
            </div>
        </main>
    )
}