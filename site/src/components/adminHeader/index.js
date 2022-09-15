import './index.scss'

export default function HeaderAdmin (props) {

    return (
        <section className={props.alinhamento}>
            <img src="./logoStoreGames.png" alt="img logo" />
            <div className="boxText"> <p>Seja bem vindo, <span id='adm'>Administrador</span></p> </div>
            
        </section>
    )
}