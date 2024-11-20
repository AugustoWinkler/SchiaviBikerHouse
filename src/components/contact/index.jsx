import React, { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        // Carrega o script do Instagram após o componente ser montado
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script); // Remove o script ao desmontar o componente
        };
    }, []);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh", // Preenche toda a altura da tela
            padding: "20px",
            textAlign: "center",
        }}>
            <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/schiavibikerhouse/"
                data-instgrm-version="12"
                style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "10px auto",
                    maxWidth: "540px",
                    padding: "0",
                }}
            ></blockquote>
        </div>
    );
};

export default Contact;
