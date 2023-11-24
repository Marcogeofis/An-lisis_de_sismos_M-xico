import React from "react";
import './imgGeo.css';

function ImgGeo(props) {
    return (
        <div className="container__img--geo">
            <h4 className="img--geo__title">{props.title}</h4>
            <figure className="img--geo__figure">
                <img className="img--geo" src={props.img} alt={`Imagenes geológica de ${props.img}`}  />
            </figure>
        </div>
    )
}

export default ImgGeo;