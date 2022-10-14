import { useEffect, useState } from "react";
import  {collection, getDocs, getFirestore} from 'firebase/firestore'
import db from "./Connection.js";
const Consultar=()=>{
  const [project,setProject]=useState([])
  const ProjectCollection= collection(db,"Projeto")
  useEffect(()=>{
    const getProject=async ()=>{
      const data=await getDocs(ProjectCollection)
      setProject(data.docs.map((doc)=>({
          ...doc.data(),id:doc.id
      })))
    }
    getProject()
  },[])
  return project
}
export default Consultar
