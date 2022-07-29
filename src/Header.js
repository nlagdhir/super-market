import {Link, NavLink} from 'react-router-dom';

export default function Header() {
    return <>
        <div className="hero_area1">
         <header className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <Link to="/" className='navbar-brand'><img width="250" src={process.env.PUBLIC_URL+'/images/logo.png'} alt="#" /></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/testimonials" className="nav-link">Testimonial</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/products" className="nav-link" >Products</NavLink>
                        </li>

                        <li class="nav-item">
                           <a class="nav-link" href="#">
                           <img width="250" src={process.env.PUBLIC_URL+'/SVGs/cart.svg'} alt="#" />
                           </a>
                        </li>
                        
                        {/* <form className="form-inline">
                           <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                           <i className="fa fa-search" aria-hidden="true"></i>
                           </button>
                        </form> */}
                     </ul>
                  </div>
               </nav>
            </div>
         </header>       
      </div>
    </>
}