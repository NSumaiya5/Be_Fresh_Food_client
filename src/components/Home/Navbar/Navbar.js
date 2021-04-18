import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../image/images.png';


const Navbar = () => {
    return (
      
        <nav class="navbar navbar-expand-lg navbar-light background">
        <div class="container-fluid">
        <img style={{height:'60px',weight:'40px'}} class="ms-5" src={logo} alt=""/>
        <Link  class="navbar-brand fw-bolder " to="/home">BE FRESH<br/>FOOD</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item active">
                        <a className="nav-link ms-5 text-dark" href="/home">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5 text-dark" href="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5 text-dark " href="/login">Login</a>
                    </li>
                </ul>
            </div>
            
            </div>
        </nav>
    );
};

export default Navbar;