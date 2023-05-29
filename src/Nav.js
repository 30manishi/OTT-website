import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav(){
    const [show,handleShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }   
    };

    useEffect(() => {
        
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
        // this return part says that whenever useEffect gets fired off.. before u get fired it off again remove the event listener
        // so we will not get many listeners
    }, []); //Above we hve added effect in which when we r scrolling down the navbar's backgrond turn black

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
            />
            <img 
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix logo"
            />
        </div>
    )
}

export default Nav