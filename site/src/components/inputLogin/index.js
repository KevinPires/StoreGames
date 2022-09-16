import './index.scss'

export default function InputLogin (props) {

    return (
        <section className="input-Login" >
            <input className="input-login-format" type="text" placeholder={props.nome} value={props.valor} />
        </section>
    )
}