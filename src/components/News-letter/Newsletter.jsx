import React from "react";
import './Newsletter.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
    return (
        <>
        <div className="newsmain">
            <h3 className="news-title">Subscribe Our Newsletter </h3>
            <div className="newsletter">
                <input type="email" name="newsletter" placeholder="Enter Your Email..." />
                <button className="button-sub"><FontAwesomeIcon icon={faMailForward}/></button>
            </div>
            </div>
        </>
    )
}

export default Newsletter;