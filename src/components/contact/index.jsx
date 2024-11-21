import React from "react";
import './Contact.css'



const Contact = () => {
    return (
        <>
        <h1 id="contato">Contato</h1>
        <div className="contact">
            <div className="contactinfo">
                <p>Tel: +55 (11) 5464-6199</p>
                <p>Cel: +55 (11) 97379-1109</p>
                <p>Email: schiavibikerhouse@gmail.com</p>
                <p>Endr: Av. Ver. Narciso Yague Guimarães, 224, Mogi das Cruzes 08780500</p>
            </div>
            <div className="functionhour">
                <pre>Domingo:            Fechado</pre>
                <pre>Segunda-feira:      08:00 – 18:00</pre>
                <pre>Terça-feira:        08:00 – 18:00</pre>
                <pre>Quarta-feira:       08:00 – 18:00</pre>
                <pre>Quinta-feira:       08:00 – 18:00</pre>
                <pre>Sexta-feira:        08:00 – 18:00</pre>
                <pre>Sábado:             08:00 – 13:00</pre>
            </div>
        </div>
        </>
    );
};

export default Contact;
