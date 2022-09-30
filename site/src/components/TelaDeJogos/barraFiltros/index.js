import './index.scss';
import './index.scss'


export default function BarraFilto(){
    return(
        <div className="comp-filtro">
            <div className="container">
                <div className="box-filtro">
                    <h4>Filtrar por preço</h4>
                    <div className="" >
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>Menos de R$50,00</p></div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>de R$ 51,00 até R$100,00 </p> </div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>de R$ 101,00 até R$200,00 </p> </div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>de R$ 201,00 </p> </div>
                    </div>
                </div>
                <div className="box-filtro">                
                    <h4>Filtra por plataforma</h4>
                    <div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>Computador</p></div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>Xbox</p></div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>Ps4</p></div>
                    </div>
                </div>
                <div className="box-filtro">
                    <h4>filtra por gênero</h4>
                    <div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>Ação</p> </div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>Aventura</p></div>
                        <div className="camp-filtro"> <input type="checkbox" className="checkbox-round"/> <p>Casual</p></div>
                    </div>  
                </div>
            </div>
        </div>
    )
}