import './index.scss';

export default function BarraLateral(props){
    return(
        <section className='barra'>
        <div className={props.cor1}>       <div><img  className='img' src="./casa.png" alt="img logo" /></div>  <div className="t">Home</div> </div>
        <div className={props.cor2}>       <div><img  className='img1' src="./mais.png" alt="img logo" /></div>  <div className="t3">Cadastrar Jogos</div> </div>
        <div className={props.cor3}>       <div><img  className='img1' src="./lupa.png" alt="img logo" /></div>  <div className="t3">Consultar Jogos</div> </div>
        <div className={props.cor4}>       <div><img  className='img1' src="./pendentes.png" alt="img logo" /></div>  <div className="t1">Pedidos pendentes</div> </div>
        <div className={props.cor5}>       <div><img  className='img1' src="./concluidos.png" alt="img logo" /></div>  <div className="t1">Pedidos concluidos</div> </div>
        <div className={props.cor6}>       <div><img  className='img1' src="./sair.png" alt="img logo" /></div>  <div className="t2">Sair</div> </div>

        </section>
    )
}