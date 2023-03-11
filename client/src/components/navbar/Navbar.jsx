import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <img className="navbar__logo" src="path/to/logo.png" alt="Logo" />
            <Link to={"/register"}>
                <button className="navbar__button">Register</button>
            </Link>
        </div>

    )
}

export default Navbar