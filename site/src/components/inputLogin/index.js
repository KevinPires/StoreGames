import './index.scss'
import storage from 'local-storage'
import { useState } from 'react'


export default function InputLogin (props) {

    function handleChange(event) {
        props.valor(event.target.value);
      }

 
    


      
    return (
        <section className="input-Login" >
            <input className="input-login-format" type="text" placeholder={props.nome} value={props.valor} />
            
        </section>
    )
   
}