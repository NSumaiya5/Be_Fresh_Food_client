import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import img from '../../image/lo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  
    const handleGoogleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
  
    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          // Handle error
        });
    }
    return (
      <main style={{height:'600px'}} className="row d-flex align-items-center w-100 ">
      <div className="col-md-7 offset-md-1 ">
          <h1 style={{color: '#3A4256'}}><span style={{color: '#dd7140'}} >PLEASE SING IN</span> </h1>
          <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
          <button  className="btn-style border rounded p-2" style={{backgroundColor:'#497438',color:'white'}} onClick={handleGoogleSignIn} ><FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon> Google Sign in</button>
      </div>
      <div className="col-md-4">
          <img  src={img} alt="" className="img-fluid"/>
      </div>
      <div className=" mt-3 text-center">
            
          </div>
  </main>  
    
    );
};

export default Login;