import { useLocation } from "react-router-dom"
import {SiGithub,SiSitepoint} from 'react-icons/si'
import {
  SiHtml5,
  SiReact,
  SiJavascript,
  SiPhp,
  SiCss3,
  SiSass,
  SiTailwindcss,

 } from 'react-icons/si';
import './Descricao_modules.css';

const Descricao = () =>{
  function getIcon(icon){
    switch(icon){
      case "HTML":
       return <SiHtml5 />
        break;
      case "React" :
        return <SiReact/>
        break;
      case "Javascript":
        return <SiJavascript />
        break;
      case "PHP":
        <SiPhp />
        break;
      case "CSS":
        return <SiCss3 />
        break;
      case "SCSS":
        return <SiSass />
        break;
      case "TailWind":
        return <SiTailwindcss />
        break;
        default:
          return <SiCss3 />
  }
  }
  const data=useLocation();
  const Infos=data.state
  return(
    <div className="Descricao">
      <h1>{Infos.Nome}</h1>
      <div className="descricao">
        <h2>Descrição</h2>
         <h3>{Infos.Descricao}</h3>
      </div>
      <div className="linguagem">
        <h2>Linguagens</h2>
         <h3>Linguagem de Front-end: {getIcon(Infos.Linguagem)} {Infos.Linguagem}</h3>
         <h3>Linguagem de Estilo: {getIcon(Infos.Estilo)} {Infos.Estilo == null ? "CSS" : Infos.Estilo}</h3>
      </div>
    <div className="buttons">
      <h2>Conheça mais </h2>
      <a href={Infos.Link} target="_blank" rel="noreferrer">< SiSitepoint/>Site</a>
      <a href={Infos.Git} target="_blank" rel="noreferrer"><SiGithub style={{color: "red"}} />GitHub</a>

    
    </div>
    </div>
  )
}
export default Descricao