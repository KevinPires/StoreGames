import {BrowserRouter, Route, Routes} from 'react-router-dom'

 
import Login from './pages/admin/loginAdmin/'


import AdminCadastro from './pages/admin/cadastrarJogos'
import Home from './pages/admin/Home'
import ConsultarJogos from './pages/admin/consultarJogos'

import LoginUsuario from './pages/usuario/loginUsuario'
import pedidosPendentes from './pages/admin/pedidosPendentes'


export default function AppRoutes() {
    return(
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/admin/cadastro' element={<AdminCadastro />} />
                <Route path='/admin/home' element={<Home/>} />
                <Route path='/admin/consultar' element={<ConsultarJogos/>} />
                <Route path='/admin/pendentes' element={<pedidosPendentes/>} />
                <Route path='/usuario/login' element={<LoginUsuario/>} />
              
        </Routes>
    </BrowserRouter>        
    )
}