import React from 'react'
import SignedInLinks from './SignedInLInks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="nav-wrapper teal lighten-2">
            <div className="container">
                <Link to="/" className="brand-logo">BookSoup</Link>
                <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                    <i className="material-icons">menu</i>
                </a>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;