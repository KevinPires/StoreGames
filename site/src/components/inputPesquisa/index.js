import './index.scss'
import storage from 'local-storage'
import { useState } from 'react'


export default function InputPesquisa (props) {




      
    return (
        <section className="input-Pesquisa" >
            <input className="input-pesquisa-format" type={props.type} placeholder={props.nome} onChange={props.onChange} value={props.valor} />
            
        </section>
    )
   
}