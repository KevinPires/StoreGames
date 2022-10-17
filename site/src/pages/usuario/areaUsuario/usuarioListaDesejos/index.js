import '../../../../common/common.scss'
import OptionsUser from '../../../../components/AreaUsuario/menuLateral'
import HeaderLoja from '../../../../components/headerLoja'
import Rodape from '../../../../components/Rodapé'
import './index.scss'


export default function AreaLoja () {

    return (
        <main className='usuario-page-desejos'>

            <HeaderLoja/>
 
            <section className="container-user">
            
                <div className="options">
                    <OptionsUser
                    escolhido='desejo'/>  
                </div>

                <div className="box-info">
                    <section className="detalhes">

                        <div className='item-lista-desejos'>
                            <img id='capa-wishlist' src='/capagta.jpg' alt='capa'/>
                            <div className='flexboxcolumn'>
                                <span className='info'>Nome Jogo</span>
                                <span className='info'>Multpiplataforma</span>
                                <span className='info'>Gêneros</span>
                            </div>
                            <span className='descricao'>Descrição: Terraria é um jogo eletrônico RPG de ação-aventura independente produzido pela desenvolvedora de jogos Re-Logic.
                            Possui como características a exploração, artesanato, construção de estruturas e combate a monstros perigosos em um mundo 2D gerado proceduralmente </span>
                            <div className='flexboxcolumn'>
                                <button>Ir Loja</button>
                                <span>Valor</span>
                            </div>
                        </div>
                        
                    </section>
                </div>
            </section>
            <Rodape/>
        </main>
    )
}