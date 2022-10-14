import './main_modules.css';
import Perfil from './../../Image/IMG_20211206_152141.jpg';
import {SiReact,SiJavascript,SiPhp,SiNodedotjs,SiCss3} from 'react-icons/si';
import { NavLink } from 'react-router-dom';
const Main=()=>{
  return(
  <>
    <div className="Main">
      <div className='Primeira'>
    <div className="foto">
    <img src={Perfil} alt=""/>
    </div>
    <div className="sobre">
      <h2>Olá, me chamo Rafael Pavanelli e sou um desenvolvedor <span>Front-End web.</span>
      <br/> estudo todo dia para ser o melhor desenvolvedor que eu posso ser.</h2>
      <h2>Estudo atualmente na Faculdade Eduvale Avaré, aonde estou cursando <span>Analise e desenvolvimento de sistemas.</span><br/></h2>
    </div>
    </div>
    <div className="Segunda">
    <div className="curso">
     
      <h2>A Faculdade Eduvale Avaré conquistou a nota 4 no ENADE em 2021 em Analise e desenvolvimento de Sistema</h2>
    </div>
    <div className="fotoFacul">
    <p>Faculdade Eduvale, Localizada em Avaré, Interior de São Paulo</p>
    </div>
    </div>
  
    <div className="Habilidades">
      <h3>As linguagens que eu mais conheço são focadas em Front-end UI/UX</h3>
      <h3>Algumas delas são:</h3>
      <div className='Linguagens'>
        <h4 alt="React"><SiReact />React</h4>
        <h4><SiJavascript/>Javascript</h4>
        <h4><SiPhp /> PHP</h4>
        <h4><SiNodedotjs/> Node</h4>
        <h4><SiCss3/> CSS</h4>
      </div>
    </div>
    <div className="buttons">
      <h1>Aonde deseja ir agora?</h1>
      <div>
    <NavLink to={'/Portifolio'}>Portifolio</NavLink>
    <NavLink to={'/Contato'}>Contato</NavLink>
    </div>
    </div>
    </div>
  </>
  )
}
export default Main