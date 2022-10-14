import db from '../Data/Connection'
import {addDoc, collection} from 'firebase/firestore'
async function Cadastrar({nome,resumo,descricao,estilo,linguagem,link,git}){
  const Data= collection(db,"Projeto")
  await addDoc(Data,{
    Git: git,
    Nome:nome,
    Link:link,
    Linguagem:linguagem,
    Descricao:descricao,
    Estilo:estilo,

  })
  console.log("Cadastrado")
 }
 export default Cadastrar;