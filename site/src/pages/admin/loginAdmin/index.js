import './index.scss';
import InputLogin from '../../../components/inputLogin';
export default function LoginAdmin(){

    return (

    <main className="login-admin-page">

        <section className="containerLogin">
            <h1><span>Área Administrativa</span></h1>

            <div className="container-row">

                <div className="boxInputs">
                    <InputLogin nome="login" value="login"/>
                    <InputLogin nome="senha" value="senha"/>
                <div className="row">
                    <p>Lembrar-me</p> <button id="botao-login">Login</button>
                </div>
                    
                </div>
                <img id="logo-login" src="./logo.png" alt="logo" />
            </div>

           


        </section>

<<<<<<< HEAD
       
=======
        
>>>>>>> b956835e4b5d5d02ba489e87982b1829cb97396d

    </main>

  
    )
} 