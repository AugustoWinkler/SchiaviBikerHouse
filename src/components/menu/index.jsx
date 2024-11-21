import React, { useState } from "react";
import './Menu.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            
        <div className="header">
                <button className="menu-button" onClick={toggleMenu}>
                        &#9776;
                </button>
            <div className="menu-logo">
                <img id="logo" src="public/assets/SchiaviBikerHouseLogo.png" alt="Schiavi Biker House Shield" />
                
            </div>
            <div className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#scrollService">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
            <div className="socialmedia">
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=5511973791109&text&type=phone_number&app_absent=0"><img src="public/assets/Whatsapplogo.png" alt="" /></a>
            <a target="_blank" href="https://www.instagram.com/schiavibikerhouse/"><img src="public/assets/Instagramlogo.png" alt="" /></a>
            </div>
        </div>
            
        </>
    );
};

export default Menu;
