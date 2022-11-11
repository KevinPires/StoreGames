import { useEffect, useState } from 'react'
import './index.scss'
import storage from 'local-storage'
import {useNavigate} from 'react-router-dom'

export default function HeaderAdmin () {

    const Navigate = useNavigate();

    const [nome, setNome] = useState('')

     function exibirNome () {
        const taLogado =  storage('admin-logado')
        setNome(taLogado.login)
    }

    useEffect(() => {
        exibirNome()
    }, [])

    return (
        <section className="headerAdmin">
            <img className="config-btn"onClick={() => Navigate('/')} src="/storegamesmini.svg" alt="img logo" />
            <div className="boxText"> <p>Seja bem vindo, <span id='adm'> {nome} </span></p> </div>
        </section>
    )
}