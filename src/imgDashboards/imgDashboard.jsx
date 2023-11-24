import React from "react";
import './imgDashboard.css';

function Dashboard(props) {
    return (
        <div className="container__img--dashboard">
            <figure className="img--dashboard__figure">
                <img className="img--dashboard" src={props.img} alt='Imagen de los sismos en méxico' />
            </figure>
        </div>
    )
}

export default Dashboard;