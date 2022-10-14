import './Contato_modules.css'
import {SiWhatsapp} from 'react-icons/si'
import {AiOutlineMail} from 'react-icons/ai'
const Contato=()=>{
  return(
    <div className="contato">
      <h1>Meios de contato</h1>
      <div className="whats">
        <p>Por Whatsapp</p>
        <a href="https://wa.me/5511957833962?text=Ol%C3%A1%2C+vi+seu+site+e+gostaria+de+conversar." target="_blank" rel="noreferrer"><SiWhatsapp/> Whatsapp</a>
      </div>
      <div className="email">
        <p>Por Email</p>
        <a href="mailto:gvxvvfbgx@gmail.com?Subject=Contrato" target="_blank" rel="noreferrer"><AiOutlineMail />Por Email</a>
      </div>
    </div>
  )
}
export default Contato