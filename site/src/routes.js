import {BrowserRouter, Route, Routes} from 'react-router-dom'

 
import Login from './pages/admin/loginAdmin/'


import AdminCadastro from './pages/admin/cadastrarJogos'


export default function AppRoutes() {
    return(
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/admin/cadastro' element={<AdminCadastro />} />
        </Routes>
    </BrowserRouter>        
    )
}