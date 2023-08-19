import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import NavTop from './NavTop';

const Navbar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const history=useHistory()

    return (
        <div>
            <NavTop/>
             <div class="container-fluid p-0">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <Link to="/" class="nav-item nav-link">Home</Link>
                            <Link to="/about" class="nav-item nav-link">About</Link>
                            <Link to="/service" class="nav-item nav-link">Service</Link>
                            <Link to="/pricing" class="nav-item nav-link">Price</Link>
                            <Link to="/booking" class="nav-item nav-link">Booking</Link>
                            <Link to="/blog" class="nav-item nav-link">Blog</Link>
                            <Link to="/lostAndFound" class="nav-item nav-link">Lost & Found</Link>
                            <Link to="/contact" class="nav-item nav-link">Contact</Link>
                            <Link to="/admin" class="nav-item nav-link">Dashboard</Link>
                        </div>
                        {/* <a href="#" class="btn btn-lg btn-primary px-3 d-none d-lg-block mr-5">Registration</a> */}
                        {loggedInUser.email?<a href="#" class="btn btn-lg btn-primary px-3 d-none d-lg-block" onClick={()=>setLoggedInUser({})}>Log Out</a>:
                        <div className='d-flex'>
                            <Link to="/signup" class="btn btn-lg btn-primary px-3 d-none d-lg-block">Register</Link>
                            <Link to="/login" class="btn btn-lg btn-primary px-3 d-none d-lg-block ml-3">Login</Link>
                        </div>}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;