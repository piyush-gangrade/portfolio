import React, { useState } from "react";
import menu from "../assets/menu-hamburger.svg";
import close from "../assets/close.svg";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);

    return <>
        <div className="navbar">
            <div className={`nav-items ${showNav?"unhidden": ""}`}>
                <a className="nav-item" href="#home"><span className="purple">#</span>home</a>
                <a className="nav-item" href="#about"><span className="purple">#</span>about</a>
                <a className="nav-item" href="#skills"><span className="purple">#</span>skills</a>
                <a className="nav-item" href="#work"><span className="purple">#</span>work</a>
                <a className="nav-item" href="#contact"><span className="purple">#</span>contact</a>
            </div>
            <button className={`menu-btn ${showNav?"rotate":""}`} onClick={()=>{setShowNav(!showNav)}}><img src={showNav?close:menu} alt="menu-hamburger"/></button>
        </div>
    </>
}