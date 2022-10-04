import './index.scss'

export default function InputTextArea (props) {

    return (
        <main className='input-text-container'>
            <textarea 
            className="input-text-area"
            maxLength={props.maxLength}
            style={props.style}
            
            cols={props.cols}
            rows={props.rows}
            value={props.value}
            onChange={props.onChange}>
            </textarea>
        </main>
    )
}


