import './menu.css';
import { BsLinkedin, BsInstagram} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className="menu">
           <a className="social" href="www.linkedin.com/in/katriel-araújo-b509a61b0">
               <BsLinkedin color="#FFF" size={24}/>
           </a>
           <a className="social" href="https://www.instagram.com/katrielaraujo/">
               <BsInstagram color="#FFF" size={24}/>
           </a>
           <Link className="menu-item" to="/links">
            Meus Links
           </Link>
        </div>
    )
}