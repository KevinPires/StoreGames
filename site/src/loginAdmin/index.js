import './index.scss';

export default function LoginAdmin(){

    return (
        <section className="page">
       
        <section className="caixa">

            <div className="faixa1">
                <div className="t1"> Área Administrativa</div>
                
            </div>
             
            <div className="faixa2">

                <div className="campo1">  

                <div className="input1"> <input  className="box" type="text" placeholder=" email"/></div>
                <div className="input1"> <input  className="box" type="password" placeholder=" senha"/></div>
                <div className="input2"> <u>Lembre-me</u> </div>
                <button className="botao"> Login</button>

                </div>
            </div>
            <img  className='img' src="./logo.png" alt="img logo" />
            
        </section>
    </section>
    )
} 