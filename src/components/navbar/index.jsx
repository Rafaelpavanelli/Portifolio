import { NavLink } from 'react-router-dom';
import {FiMenu} from 'react-icons/fi'
import './navbar_modules.css'
const Navbar=()=>{
  return(
    <div className="Navbar">
      <div className="logo">
        <NavLink to='/' ><h1>Portifólio</h1></NavLink>
      </div>
     
      <div className="buttons"> 
       <ul>
          <NavLink to="/">Menu</NavLink> 
          <NavLink to="/Portifolio">Portifolio</NavLink> 
          <NavLink to="/Contato"> Contato </NavLink> 
          
      </ul>
     </div>
   
    </div>
  )
}
export default Navbar;