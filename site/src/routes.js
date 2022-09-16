import {BrowserRouter, Route, Routes} from 'react-router-dom'
<<<<<<< HEAD
 
import Login from './pages/admin/loginAdmin/'



=======

import Login from './pages/admin/loginAdmin/'


>>>>>>> b956835e4b5d5d02ba489e87982b1829cb97396d
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