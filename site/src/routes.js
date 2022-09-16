import {BrowserRouter, Route, Routes} from 'react-router-dom'

 
import Login from './pages/admin/loginAdmin/'


import AdminCadastro from './pages/admin/cadastrarJogos'
import Home from './pages/admin/Home'


export default function AppRoutes() {
    return(
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/admin/cadastro' element={<AdminCadastro />} />
                <Route path='/admin/home' element={<Home/>} />
        </Routes>
    </BrowserRouter>        
    )
}