import './portifolio_modules.css'
import {SiReact,SiJavascript,SiPhp,SiNodedotjs,SiCss3,SiHtml5} from 'react-icons/si';

import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {BiWindowAlt} from 'react-icons/bi'
import { NavLink } from "react-router-dom";

import Consultar from '../../components/Data/Consultas';
const Portifolio=()=>{
  const project=Consultar();
  function Site(Site){
    switch(Site){
      case "":
        return(
          <div className="site">
          <p>desenvolvimento</p>
          </div>
        )
        break;
        default:
          return(
            <div className="site">
              <BiWindowAlt style={{color:"white"}}/>
              <a href={Site} target="_blank" rel="noreferrer"> Site</a>
            </div>
            
          )
    }
  }
  
  function Linguagem(Linguagem){
    switch(Linguagem){
      case "React":
        return(
          <FaReact style={{color:"blue"}} />
        )
        break;
        case "Javascript":
          return(
            <span ><IoLogoJavascript style={{color:"yellow "}}/></span>
          )
          break;
          case "PHP":
          return(
            <span ><SiPhp style={{color:"white "}}/></span>
          )
          break;
          case "PHP":
            return(
              <span ><SiPhp style={{color:"white "}}/></span>
            )
            break;
            case "HTML":
              return(
                <span ><SiHtml5 style={{color:"white"}}/></span>
              )
              break;
    }
  }
  return(
    <div className="portifa">
      <div>
        <h1>Projetos</h1>
      </div>
      <div className="Box">
      {
       project.map(project=>
        <div className="Project" key={project.id}>
        <h2 className='titulo'>{project.Nome}</h2>
        <p className='descricao'>{project.Descricao}</p>
        <p className="TituloLinguagem">Linguagem Principal</p>
        <p className='Linguagem'>{Linguagem(project.Linguagem)} {project.Linguagem}</p>
        <NavLink to={`/Portifolio:${project.id}`} state={project} className={"Page_descricao"}>Sobre</NavLink>
       </div>)
      }
      </div>

    </div>
  )
}
export default Portifolio