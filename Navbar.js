// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// function Navbar (){
//     return(
//         <div>
//      <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <Link className="navbar-brand" href="#">
//     <img src="https://logos-world.net/wp-content/uploads/2023/01/Limeroad-Logo.jpg" alt="" width="120" height="40"/>
//     </Link>

    

//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link " aria-current="page" href="#">Women</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link " aria-current="page" href="#">Men</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link " aria-current="page" href="#">Kids</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link " aria-current="page" href="#">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link " aria-current="page" href="#">Offers</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" aria-current="page" href="#">Vmart</Link>
//         </li>
       
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
// <Outlet/>

//         </div>
//     )
// }
// export default Navbar

import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

import "./styles.css"; 

function Navbar() {
  return (

   

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/01/Limeroad-Logo.jpg"
              alt="Limeroad Logo"
              width="120"
              height="40"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/women">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/men">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kids">
                  Kids
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/offers">
                  Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vmart">
                  Vmart
                </Link>
              </li>
            </ul>

            {/* Search Input with Icon */}
            <div className="d-flex align-items-center me-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
                <span className="input-group-text">
                  <FaSearch />
                </span>
              </div>
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="nav-link me-3">
              <FaShoppingCart size={22} />
            </Link>

            {/* Profile Icon */}
            <Link to="/profile" className="nav-link">
              <FaUser size={22} />
            </Link>
          </div>
        </div>
       
      </nav>
      <Outlet />
    </div>
    
   
  );
}

export default Navbar;
