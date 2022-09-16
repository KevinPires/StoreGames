import {BrowserRouter, Route, Routes} from 'react-router-dom'
<<<<<<< HEAD
import Login from './pages/admin/loginAdmin/'
=======
import Login from './pages/admin/loginAdmin'
>>>>>>> 2205c3e0e3bbcf70fea3128bdf822bb09c2051ea
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