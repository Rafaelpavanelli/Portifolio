import { useLocation } from "react-router-dom"
import './Descricao_modules.css';

const Descricao = () =>{
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
        <h2>Linguagem utilizada</h2>
         <h3>{Infos.Linguagem}</h3>
      </div>
      <div className="estilo">
        <h2>Linguagem de estilo utilizada</h2>
        <h3>{Infos.Estilo}</h3>
      </div>

    </div>
  )
}
export default Descricao