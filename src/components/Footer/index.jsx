import './footer_modules.css'
import { NavLink } from 'react-router-dom'
const Footer=()=>{
  return(
    <div className="footer">
      <div className="Link">
      <ul>
      <li><NavLink to='/'>Menu</NavLink></li>
      <li><NavLink to='/Portifolio'>Portifolio</NavLink></li>
      <li><NavLink to='/Contato'>Contato</NavLink></li>
     </ul>
      </div>
     <div className="criado">
      <p>Criado por Rafael Pavanelli</p>
     </div>
    </div>
  )
}
export default Footer