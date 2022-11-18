import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Login from './pages/admin/loginAdmin/'

import AdminCadastro from './pages/admin/cadastrarJogos'
import Home from './pages/admin/Home'
import ConsultarJogos from './pages/admin/consultarJogos'
import LoginUsuario from './pages/usuario/loginUsuario'
import Pendentes from './pages/admin/pendentes'
import PedidosConcluidos from './pages/admin/pedidosConcluidos'
import CadastroUsuario from './pages/usuario/cadastroUsuario'
import LojaArea from './pages/loja/areaDaLoja'
import GuiaRodape from './pages/loja/GuiaRodape'
import AreaUsuario from './pages/usuario/areaUsuario/minhaConta'
import UserListaDesejos from './pages/usuario/areaUsuario/usuarioListaDesejos'
import UserPedidos from './pages/usuario/areaUsuario/usuarioPedidos'
import DetalhesProduto from './pages/loja/detalhesProduto'

import CarrinhoCompras from './pages/carrinhoCompras/carrinho'
import CarrinhoItem from './components/carrinhoItem'
import Boleto from './pages/FormaPagamento/boleto'
import Cartao from './pages/FormaPagamento/cartao'
import Pix from './pages/FormaPagamento/pix'
import CompraFinalizada from './pages/FormaPagamento/compraFinalizada'
import LandingPage from './pages/landingPage'
import Acompanhamento from './pages/usuario/areaUsuario/usuarioAcompanhamento'
//Nâo apagar o segundo AdminCadastro, ele faz parte do alterar
// import ModalAlteraInformacoes from './components/modal/modalUsuario/modalAlterarInformacoes'

export default function AppRoutes() {
    return(
    <BrowserRouter>
        <Routes>
                <Route path='/loja' element={<LojaArea/>} />
                <Route path='/' element={<LandingPage/>} />
                <Route path='/admin/login' element={<Login />} />
                <Route path='/admin/cadastro' element={<AdminCadastro />} />
                <Route path='/admin/cadastro/:id' element={<AdminCadastro />} />
                <Route path='/admin/home' element={<Home/>} />
                <Route path='admin/consulta' element={<ConsultarJogos/>} />
                <Route path='admin/pendentes' element={<Pendentes/>} />
                <Route path='/admin/concluidos' element={<PedidosConcluidos/>} />
                <Route path='/usuario/login' element={<LoginUsuario/>} />
                <Route path='/usuario/cadastro' element={<CadastroUsuario/>} /> 
                <Route path='/usuario/:id' element={<AreaUsuario/>} />
                <Route path='/usuario/listaDesejos/:id' element={<UserListaDesejos/>} />
                <Route path='/usuario/pedidos/ver/:id' element={<UserPedidos/>} />
                <Route path='/usuario/pedidos/:id' element={<Acompanhamento/>} />
                <Route path='/jogos' element={<LojaArea/>}/>
                <Route path='/ajuda' element={<GuiaRodape/>} />
                <Route path='/produto/:id/detalhe' element={<DetalhesProduto/>} />
                <Route path='/carrinho' element={<CarrinhoCompras/>} />
                <Route path='/carrinhoitem' element={<CarrinhoItem/>} />
                <Route path='/pagamento/boleto' element={<Boleto/>} />
                <Route path='/pagamento/cartao' element={<Cartao/>} />
                <Route path='/pagamento/pix' element={<Pix/>} />
                <Route path='/comprafinalizada' element={<CompraFinalizada/>} />
                {/* <Route path='/modalinformacoes' element={<ModalAlteraInformacoes/>} /> */}
            </Routes>
    </BrowserRouter>
    )
}