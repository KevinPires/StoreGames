import './index.scss'
import HeaderAdmin from '../../components/adminHeader'
import BarraLateral from '../../components/BarraLateral'


export default function CadastratJogos(){
    return (
  
        <section className="page">
            
        <section>
        <BarraLateral 
        cor1= "box1"
        cor2= "box2red"
        cor3= "box3"
        cor4= "box4"
        cor5= "box5"
        cor6= "box6"/>
        </section>
        
        <section className="cabeca"> <HeaderAdmin alinhamento = "headerAdmin2"/>

        <div className="faixa1" > <img className='fundo' src="./fundoCadastrar.jpg" alt="hihihiha" />  <div className="h1">Cadastrar Jogos</div></div>

        <section className="caixa">
          
          <div className="linha1">
            <div className=""> <b>Nome: </b> <input  className="" type="text"/></div>
            <div className="put"> <b>Gêneros:</b> <input  className="" type="text"/></div>
            <div className="put"> <b>Plataformas:</b> <input  className="" type="text"/></div>
          </div>

          <div className="linha1">
            <div> <div><b>Descrição:</b></div> <input  className="input" type="text"/></div>
            <div className="put2"> <div><b>Requisitos:</b></div> <input  className="input" type="text"/></div>
            <div className="put3"> <div><b>Imagem:</b></div> <div > <img className="imagem" src="./imagem.png"></img></div></div>
            </div>

            <div className="linha1">
            <div className=""> <b>Disponivel: </b> <input  className="" type="text"/></div>
            <div className="put0"> <b>Valor:</b> <input  className="" type="text"/></div>
            <div className="put02"> <b>Qtd:</b> <input  className="" type="text"/></div>
            </div>

            <div className="botaofaixa">
            <button className="botao"> Cadastrar Jogo</button>
              </div>

            
        </section>


        </section>

        
      </section>



       
    )
}