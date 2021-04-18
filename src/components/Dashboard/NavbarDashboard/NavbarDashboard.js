
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../image/images.png';

const NavbarDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <Link class="navbar-brand text-white" to="#"><img style={{height:'60px',weight:'40px'}} class="ms-5" src={logo} alt=""/>BE FRESH FOOD</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
                    <Link class="nav-link active text-white mx-2" aria-current="page" to="/home">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-white mx-2" aria-current="page" to="#">{loggedInUser.name}</Link>
                </li>
                <li class="nav-item">
                    <Link type="button" class="nav-link text-white btn-danger" aria-current="page" to="#">Logout</Link>
                </li>
            </ul>
        </div>
    </nav>
</div>

    );
};

export default NavbarDashboard;






