import React from "react";
import './Container.css';

const Container = (props) => {
    return(
        <div className="container" style={{ backgroundImage: `url(${props.url})` }}>
            <h1>{props.nome}</h1>
            
        </div>   
    );
}
export default Container