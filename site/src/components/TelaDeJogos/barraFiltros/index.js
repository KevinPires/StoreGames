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
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value='1'/> <p>Menos de R$50,00</p></div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value='2'/> <p>de R$ 51,00 à R$100,00 </p> </div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value='3'/> <p>de R$ 101,00 à R$200,00 </p> </div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value='4'/> <p>de R$ 201,00 à cima</p> </div>
                    </div>
                </div>
                <div className="box-filtro">                
                    <h4>Filtrar por plataforma</h4>
                    <div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value="pc"/> <p>Computador</p></div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value="xbox"/> <p>Xbox</p></div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value="ps4"/> <p>Ps4</p></div>
                    </div>
                </div>
                <div className="box-filtro">
                    <h4>Filtrar por gênero</h4>
                    <div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value="acao"/> <p>Ação</p> </div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value="aventura"/> <p>Aventura</p></div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value="simulacao"/> <p>Simulação</p></div>
                        <div className="camp-filtro"> <input type="radio" name="valor" className="checkbox-round" onClick={props.filtro} value="rpg"/> <p>RPG</p></div>
                    </div>  
                </div>
            </div>
        </div>
    )
}