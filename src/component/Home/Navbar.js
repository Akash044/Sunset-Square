import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import firebase from "firebase/app";

const Navbar = () => {
  const[loggedInUser, setLoggedInUser]=useContext(UserContext);
    const handleLogOut = ()=>{
        firebase.auth().signOut()
        .then(res=>{
           setLoggedInUser({})
        })
        .catch((error) => {  
          });
       }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <Link class="navbar-brand ms-5" to="#"><strong style={{color:'#82b440',fontSize:'40px'}}>SUNSET</strong> <small>SQUARE</small> </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <Link class="nav-link active me-4 fw-bold text-secondary"  aria-current="page" to="/home">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link me-4 fw-bold text-secondary" to="/about">About Us</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link me-4 fw-bold text-secondary" to="/services">Services</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link me-4 fw-bold text-secondary"  to="/reviews">Reviews</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link me-4 fw-bold text-secondary" to="/contact">Contact Us</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link me-4 fw-bold text-secondary" to="/admin">Admin</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link me-4 fw-bold text-secondary">{loggedInUser.name}</Link>
            </li>
            {loggedInUser.email?
                            <Link to="/login" onClick={handleLogOut}><button className="log">LogOut</button></Link>
                            :<Link to="/login"><button style={{backgroundColor:'skyblue',border:'none',padding:'8px 20px',color:'white'}} className="log">LogIn</button></Link>    
                        }
        </ul>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
