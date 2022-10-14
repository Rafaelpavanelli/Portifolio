import db from "../../components/Data/Connection";
import Cadastrar from "../../components/Cadastrar";
import { useState } from "react";
import './AddProject.css'
const AddProject=()=>{
  const [nome,setNome]=useState('');
  const [descricao,setDescricao]=useState('');
  const [linguagem,setLinguagem]=useState('React');
  const [resumo,setResumo]=useState('');
  const [estilo,setEstilo]=useState('CSS');
  const [link,setLink]=useState('');
  const [git,setGit]=useState('');
 
  return(
    <div className="Cadastrar">
      <h1>Cadastrar Projeto</h1>
      <div className="box-cadastrar">
        <form>
          <label>
            <h2>Nome do Projeto</h2>
            <input type="text" value={nome} onChange={e=>{setNome(e.target.value)}}/>
          </label>
          <label>
            <h2>Resumo</h2>
            <textarea rows="10" cols="30" value={resumo} onChange={e=>{setResumo(e.target.value)}}/>
          </label>
          <label>
            <h2>Descrição</h2>
            <textarea rows="10" cols="30" value={descricao} onChange={e=>{setDescricao(e.target.value)}}/>
          </label>
          <label>
            <h2>Linguagem Utilizada</h2>
            <select value={linguagem} onChange={e=>{setLinguagem(e.target.value)}}>
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
              <option value="HTML">HTML</option>
              <option value="PHP">PHP</option>
            </select>
          </label>
          <label>
            <h2>Estilização</h2>
            <select value={estilo} onChange={e=>{setEstilo(e.target.value)}}>
            <option value="CSS">CSS</option>
            <option value="SCSS">SCSS</option>
            <option value="TailWind">TailWind</option>
            <option value="Bootstrap">Bootstrap</option>
            </select>
          </label>
          <label>
            <h2>Link para o Projeto</h2>
            <input type="url"  value={link} onChange={e=>{setLink(e.target.value)}}/>
          </label>
          <label>
            <h2>Git</h2>
            <input type="url"  value={git} onChange={e=>{setGit(e.target.value)}}/>
          </label>
        </form>
        <button onClick={(e)=>{{
          e.preventDefault();
          Cadastrar({nome,resumo,descricao,estilo,linguagem,link,git})}}}>Testar</button>
      </div>
    </div>
  )
    
  
}
export default AddProject