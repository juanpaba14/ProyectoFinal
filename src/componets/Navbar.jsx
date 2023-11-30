import { NavLink } from "react-router-dom"
import Logo from "../assets/desing/LOGO.png"
import Inicio from "./Inicio"
const NavBar = () => { 
    return(
        <div className="container">
<div >
 <a href="/"> <img src={Logo} alt="" className="Logo forms" /></a>
      <header className="d-flex justify-content-center py-3 ">
        
        <ul className="nav nav-pills">
          <li className="nav-item"><NavLink to="/" className="btn btn-outline-segundary me-2 text-white btn-vert" >Home</NavLink></li>
          <li className="nav-item"><NavLink to="/informacion" className="btn btn-outline-segundary me-2 text-white btn-vert">Informacion</NavLink></li>
          <li className="nav-item"><NavLink to="/contacto" className="btn btn-outline-segundary me-2 text-white btn-vert">Contacto</NavLink></li>
  
        </ul>
      </header>
</div>
  </div>
  
    )
 }
 export default NavBar