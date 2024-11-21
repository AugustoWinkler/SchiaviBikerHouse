import React from "react";
import './service.css';
import Container from "../container";


const Service = () => {
    return (
    <>
        <div  id="scrollService" className="service">
            <h1>Serviços</h1>
            <p>A Schiavi Biker House é uma oficina especializada em Harley-Davidson®. Realizamos revisões completas, remapeamento de motores e diagnósticos precisos, além de cuidar de suspensão, pneus e freios para garantir o máximo desempenho e segurança. Também oferecemos peças e acessórios oficiais da Harley-Davidson®, incluindo capacetes, jaquetas e muito mais.</p>
            <div id="backgrounddeco">
                <img src="/assets/sbhlogoblack.png" alt="Logo Schiavi Biker House" />
            </div>
            <div className="containers">
                <Container url = '/assets/Manutencao.png'/>
                <Container url = '/assets/Suspensao.png'/>
                <Container url = '/assets/Dinamometro.png'/>
            </div>
        </div>
    </>
    )
}
export default Service;