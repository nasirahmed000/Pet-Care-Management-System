import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './sidenav.css'
import { FaUserTie,FaPlus,FaAlignLeft,FaListUl,FaShoppingCart,FaThList,FaRocketchat,FaLongArrowAltLeft} from 'react-icons/fa';

const SideNav = () => {

    const {id}=useParams()
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [isAdmin,setIsAdmin]=useState(false);

    let history=useHistory()

    useEffect(() =>{
        fetch('http://localhost:5000/adminEmail',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[loggedInUser.email])

    const handleClick=()=>{
        setLoggedInUser({})
        history.push('/home')
    }

    return (
        <div>
           { isAdmin ? <ul class="nav justify-content-center bg-dark p-3" >
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                   <Link to="/orderList" style={{color:'white'}}><FaListUl/>Order list</Link>
                </li>
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                   <Link to="/addService" style={{color:'white'}}><FaPlus/>Add Service</Link>
                </li>
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                   <Link to="/makeAdmin" style={{color:'white'}}> <FaUserTie/>Make Admin</Link>
                </li>
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                   <Link to="/manageService" style={{color:'white'}}><FaAlignLeft/>Manage Services</Link>
                </li>
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                   <Link to="/addToLostAndFound" style={{color:'white'}}><FaAlignLeft/>Add Lost & Found</Link>
                </li>
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                     <Link onClick={handleClick} style={{color:'white'}}><FaLongArrowAltLeft/>Log Out</Link>
                </li>
            </ul>:
            <ul class="nav justify-content-center bg-dark p-3">
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                    <Link to={`/book/${id}`} style={{color:'white'}}><FaShoppingCart/>Book</Link>
                </li>
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                    <Link to="/bookingList" style={{color:'white'}}><FaThList/>Booking List</Link>
                </li>
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                   <Link to="/addToLostAndFound" style={{color:'white'}}><FaAlignLeft/>Add Lost & Found</Link>
                </li>
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                     <Link to="/review" style={{color:'white'}}><FaRocketchat/>Review</Link>
                </li>
                <li class="nav-item" style={{color:'white',padding:'10px'}}>
                     <Link onClick={handleClick} style={{color:'white'}}><FaLongArrowAltLeft/>Log Out</Link>
                </li>
            </ul>}
        </div>
    );
};

export default SideNav;