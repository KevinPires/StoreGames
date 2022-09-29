import './index.scss'
import '../../../common/common.scss'

export default function BarraVantagens(){
    return(
        <section className='comp-vantagens'>
            <div className='conteudo'>
                <div className='box'>
                    <img src='/iconsrelogio32.png' alt='a'></img>
                    <p>Receba sua entrega muito mais rápido</p>
                </div>
                <div className='box'>
                    <img src='/pontodeexclamacao.png' alt='a'></img>
                    <p>Fique sabendo sobre o lançamento dos jogos</p>
                </div>
                <div className='box'>
                    <img src='/percentagem.png' alt='a'></img>
                    <p>Jogos com mais de 50% de desconto</p>
                </div>
                <div className='box'>
                    <img src='/iconscontrole.png' alt='a'></img>
                    <p>Vários jogos exclusivos de multiplas plataformas</p>
                </div>
            </div>
        </section>
    )
}