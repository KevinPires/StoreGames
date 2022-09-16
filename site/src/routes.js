import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/loginAdmin/'
import AdminCadastro from './pages/CadastrarJogos'


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