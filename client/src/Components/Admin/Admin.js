import React from 'react';
import SideNav from './SideNav/SideNav';
import NavTop from '../Home/Navbar/NavTop';

const Admin = () => {

    return (
        <div>
            <NavTop/>
            <SideNav/>
            <div style={{textAlign:'center',marginTop:'100px'}}>
                <h1>Welcome to Pet Lover dashboard.</h1>
            </div>
        </div>
    );
};
export default Admin;