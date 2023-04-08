import React from 'react'
import Logo from "../assets/fauxica.svg"
import "../styles/Header.css"


const Header = () => {
    return (

        
            <header>
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
                <nav>
                    <ul>
                        <li><a className='active' href="/">Home</a></li>
                        <li><a href="/">Product</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header