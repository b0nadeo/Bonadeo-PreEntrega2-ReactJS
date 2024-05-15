import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.css"


const NavBar = () => {

    return(
        <div>
         
         <nav className="navbar navbar-expand-lg bg-secondary">
           <div className="container-fluid">
           <Link to="/" className="navbar-brand"><img style={{width: "100px"}} src="https://themangastore.in/cdn/shop/files/Logo_tilted_full_W.png?v=1691312945&width=340" alt="imagen" /></Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item">
               <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
               <Link to="/category/Shonen" className="nav-link">Shonen</Link>
            </li>
            <li className="nav-item">
               <Link to="/category/Shojo" className="nav-link">Shojo</Link>
            </li>
            <li className="nav-item">
              
            </li>
           </ul>
      
              
        </div>
        </div>
        <div>
          <CartWidget />
        </div>
        </nav>
        

        </div>
    )
}

export default NavBar