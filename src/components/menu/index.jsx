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
            <div>
                <img id="logo" src="src/assets/SchiaviBikerHouseLogo.png" alt="Schiavi Biker House Shield" />
                <button className="menu-button" onClick={toggleMenu}>
                        &#9776;
                </button>
            </div>
            <div className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div className="socialmedia">
                <a><img src="src/assets/Whatsapplogo.png" alt="" /></a>
                <a><img src="src/assets/Instagramlogo.png" alt="" /></a>
            </div>
        </div>
            
        </>
    );
};

export default Menu;
