import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <>
            <div className="footer">
                <img id="logo" src="src/assets/SchiaviBikerHouseLogo.png" alt="Schiavi Biker House Shield" />
                <p>2024 © Schiavi Biker House - Todos os direitos reservados</p>
                <div className="socialmedia">
                    <a target="_blank" href="https://api.whatsapp.com/send/?phone=5511973791109&text&type=phone_number&app_absent=0"><img src="src/assets/Whatsapplogo.png" alt="" /></a>
                    <a target="_blank" href="https://www.instagram.com/schiavibikerhouse/"><img src="src/assets/Instagramlogo.png" alt="" /></a>
                </div>
            </div>
        </>
    )

}
export default Footer;