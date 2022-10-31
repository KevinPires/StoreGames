import './index.scss'
import { filtrarValorCem } from '../../../api/jogos'
import React, { useState } from "react"


export default function BarraFilto(props){

    const [filtro50, setFiltro50 ] = useState()

    async function filtroFifty(){
        const resposta = await filtrarValorCem()
    }
    return(
        <div className="comp-filtro">
            <div className="container">
                <div className="box-filtro">
                    <h4>Filtrar por preço</h4>
                    <div className="" >
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.preco} value='1'/> <p>Menos de R$50,00</p></div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.preco} value='2'/> <p>de R$ 51,00 até R$100,00 </p> </div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.preco} value='3'/> <p>de R$ 101,00 até R$200,00 </p> </div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.preco} value='4'/> <p>de R$ 201,00 </p> </div>
                    </div>
                </div>
                <div className="box-filtro">                
                    <h4>Filtra por plataforma</h4>
                    <div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round" onClick={props.preco}/> <p>Computador</p></div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round" onClick={props.preco}/> <p>Xbox</p></div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round" onClick={props.preco}/> <p>Ps4</p></div>
                    </div>
                </div>
                <div className="box-filtro">
                    <h4>filtra por gênero</h4>
                    <div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round" onClick={props.preco}/> <p>Ação</p> </div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round" onClick={props.preco}/> <p>Aventura</p></div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round" onClick={props.preco}/> <p>Casual</p></div>
                    </div>  
                </div>
            </div>
        </div>
    )
}