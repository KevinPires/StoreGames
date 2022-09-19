import {BrowserRouter, Route, Routes} from 'react-router-dom'

 
import Login from './pages/admin/loginAdmin/'


import AdminCadastro from './pages/admin/cadastrarJogos'
import Home from './pages/admin/Home'

import LoginUsuario from './pages/usuario/loginUsuario'


export default function AppRoutes() {
    return(
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/admin/cadastro' element={<AdminCadastro />} />
                <Route path='/admin/home' element={<Home/>} />
                <Route path='/usuario/login' element={<LoginUsuario/>} />
        </Routes>
    </BrowserRouter>        
    )
}