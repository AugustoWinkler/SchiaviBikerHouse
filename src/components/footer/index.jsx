import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <>
            <div className="footer">
                <img id="logo" src="public/assets/SchiaviBikerHouseLogo.png" alt="Schiavi Biker House Shield" />
                <p>2024 © Schiavi Biker House - Todos os direitos reservados</p>
                <div className="socialmedia">
                    <a target="_blank" href="https://api.whatsapp.com/send/?phone=5511973791109&text&type=phone_number&app_absent=0"><img src="public/assets/Whatsapplogo.png" alt="" /></a>
                    <a target="_blank" href="https://www.instagram.com/schiavibikerhouse/"><img src="public/assets/Instagramlogo.png" alt="" /></a>
                </div>
            </div>
        </>
    )

}
export default Footer;