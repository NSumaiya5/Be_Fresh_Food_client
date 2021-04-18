import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCommentDots, faBook, faThLarge, faList, faPlus, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkAdmin, setCheckAdmin] = useState(false);


    useEffect(() => {
        fetch('http://localhost:5000/checkAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setCheckAdmin(data));
    }, [loggedInUser.email]) 
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 " style={{ height: "100vh" }}>
            <ul className="list-unstyled ms-5">
               
               { !checkAdmin  &&
                <div>
                <li>
                    <Link to="/order" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faBook}/> <span>Order Food</span>
                    </Link>
                </li>
                <li>
                    <Link to="/view-order" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faList} /> <span>View Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCommentDots} /><span>Review</span>
                    </Link>
                </li>
                </div>}

                { checkAdmin  &&
                    <div>

                

                <li>
                    <Link to="/orderList" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Food Orders List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/add-food" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Food </span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white text-decoration-none" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>

                <li>
                    <Link to="/manageService" className="text-white text-decoration-none" >
                        <FontAwesomeIcon icon={faThLarge} /> <span>Manage Service</span>
                    </Link>
                </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;