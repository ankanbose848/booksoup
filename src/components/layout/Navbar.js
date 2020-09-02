import React from 'react'
import SignedInLinks from './SignedInLInks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="nav-wrapper teal lighten-2">
                <Link to="/" className="brand-logo"><img src="img/logo.png" alt=""/></Link>
                <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                    <i className="material-icons">menu</i>
                </a>
                <SignedInLinks />
                <SignedOutLinks />
        </nav>
    )
}

export default Navbar;