import './index.scss'
import storage from 'local-storage'
import { useState } from 'react'


export default function InputLogin (props) {




      
    return (
        <section className="input-Login" >
            <input className="input-login-format" type={props.type} placeholder={props.nome} onChange={props.onChange} value={props.valor} />
            
        </section>
    )
   
}