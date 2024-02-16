import React from "react";
import { NavLink } from "react-router-dom";
import './Sublink.css'

const Sublinlk = () => {
    return (
        <>
            <div className="sub-line">
                <ul>
                    <li><NavLink to="/">JS</NavLink></li>
                    <li><NavLink to="/course">HTML</NavLink></li>
                    <li><NavLink to="/subscription">CSS</NavLink></li>
                    <li><NavLink to="/blog">REACT JS</NavLink></li>
                    <li><NavLink to="/contact">PHP</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Sublinlk; 