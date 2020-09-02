import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
    return (
        <div className="SignedInLinks">
            <ul className="right hide-on-med-and-down black-text">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/">Log Out</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating  blue darken-4">BS</NavLink></li>
            </ul>
            <ul className="sidenav grey lighten-2" id="mobile-menu">
                <div><NavLink to="/" className="btn btn-floating blue darken-4">BS</NavLink></div>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/">Log Out</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks;