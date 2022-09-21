import { useEffect, useState } from 'react'
import './index.scss'
import storage from 'local-storage'

export default function HeaderAdmin () {

    const [nome, setNome] = useState('Administrador')

     function exibirNome () {
        const taLogado =  storage('usuario-logado')
        setNome(taLogado.login)
    }

    useEffect(() => {
        exibirNome()
    }, [])

    return (
        <section className="headerAdmin">
            <img src="/logoStoreGames.png" alt="img logo" />
            <div className="boxText"> <p>Seja bem vindo, <span id='adm'> {nome} </span></p> </div>
        </section>
    )
}