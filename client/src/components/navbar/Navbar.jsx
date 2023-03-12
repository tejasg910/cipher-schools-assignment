import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ isAuthenticated }) => {
    return (
        <div className="navbar">
            <img className="navbar__logo" src="assets/logo.png" alt="Logo" />
            {!isAuthenticated ? <Link to={"/register"}>
                <button className="navbar__button">Register</button>
            </Link> : <Link to={"/"}>
                <button className="navbar__button">Log out</button>
            </Link>}
        </div>

    )
}

export default Navbar