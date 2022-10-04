import './index.scss'

export default function InputCadastro (props) {

    return (
        <section className="input-Login">
            <input 
            className='input-cadastro'
            value={props.value}
            type={props.type} 
            onChange={props.onChange}/>
        </section>
    )
}