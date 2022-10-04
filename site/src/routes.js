import {BrowserRouter, Route, Routes} from 'react-router-dom'

 
import Login from './pages/admin/loginAdmin/'

import AdminCadastro from './pages/admin/cadastrarJogos'
import Home from './pages/admin/Home'
import ConsultarJogos from './pages/admin/consultarJogos'
import LoginUsuario from './pages/usuario/loginUsuario'
import Pendentes from './pages/admin/pendentes'
import PedidosConcluidos from './pages/admin/pedidosConcluidos'
import CadastroUsuario from './pages/usuario/cadastroUsuario'
import LandingPage from './pages/usuario/landingPage'
import LojaArea from './pages/loja/areaDaLoja'
import GuiaRodape from './pages/loja/GuiaRodape'

//Nâo apagar o segundo AdminCadastro, ele faz parte do alterar

export default function AppRoutes() {
    return(
    <BrowserRouter>
        <Routes>
                <Route path='/loja' element={<LojaArea/>} />
                <Route path='/' element={<Login />} />
                <Route path='/admin/cadastro' element={<AdminCadastro />} />
                <Route path='/admin/cadastro/:id' element={<AdminCadastro />} />  
                <Route path='/admin/home' element={<Home/>} />
                <Route path='admin/consulta' element={<ConsultarJogos/>} />
                <Route path='admin/pendentes' element={<Pendentes/>} />
                <Route path='/admin/concluidos' element={<PedidosConcluidos/>} />
                <Route path='/usuario/login' element={<LoginUsuario/>} />
                <Route path='/usuario/cadastro' element={<CadastroUsuario/>} /> 
                <Route path='/landing' element={<LandingPage/>}/>
                <Route path='/jogos' element={<LojaArea/>}/> 
                <Route path='/ajuda' element={<GuiaRodape/>} />
                 
        </Routes>
    </BrowserRouter>        
    )
}