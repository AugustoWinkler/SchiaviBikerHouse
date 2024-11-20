import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <>
            <div className="footer">
                <img id="logo" src="src/assets/SchiaviBikerHouseLogo.png" alt="Schiavi Biker House Shield" />
                <p>2024 © Schiavi Biker House - Todos os direitos reservados</p>
                <div className="socialmedia">
                    <a><img src="src/assets/Whatsapplogo.png" alt="" /></a>
                    <a><img src="src/assets/Instagramlogo.png" alt="" /></a>
                </div>
            </div>
        </>
    )

}
export default Footer;