import React from 'react'
import Image from 'next/image';
import "./navbar.css"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Image className="logo" src="/epsilon.png" width={50} height={50} alt="Logo" />
                    <a className="item" href="#">Rubrique 1</a>
                    <a className="item" href="#">Rubrique 2</a>
                    <a className="item" href="#">Rubrique 3</a>
                </div>
            </nav>
        </div>
    )
}