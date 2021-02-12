import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return(

        <nav>
            <NavLink to="/" >
                Home
            </NavLink>
            <NavLink to="/pictures/new"  >
                Picture Generator
            </NavLink>
            <NavLink to="/bios/new"  >
                Bio Generator
            </NavLink>
            <NavLink to="/profile" >
                My Profile
            </NavLink>
            {/* <NavLink>
                LogOut
            </NavLink> */}
        </nav>



        // <div className="navbar" >
        //     <button>Home</button>
        //     <button>Pictures</button>
        //     <button>Bio's</button>
        //     <button>My Profile</button>
        //     <button>LogOut</button>
        // </div>
    )
}

export default NavBar