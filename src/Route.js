import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './pages/main'
import Portifolio from './pages/Portifolio'
import Navbar from './components/navbar'
import Contato from './pages/Contato'
import Footer from './components/Footer'
import AddProject from './pages/AddProject'
import Descricao from './pages/Descricao'


const route=()=>{
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/Portifolio' element={<Portifolio />}/>
        <Route path='/Contato' element={<Contato />}/>
        <Route path='/CadastrarProjeto' element={<AddProject/>}/>
        <Route path='/Portifolio:id' element={<Descricao />} />
       
        
      </Routes>
      <Footer /> 
    </BrowserRouter>
  )}
  export default route
  

