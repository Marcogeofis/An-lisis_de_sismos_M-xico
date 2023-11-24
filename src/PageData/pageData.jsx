import react from 'react';
import './pageData.css'
function Article2(props) {
    return (
        <div className='container__dataInformation'>
            <h4 className='dataInformation__title'>{props.title}</h4>
            <p className='dataInformation__text'>Los datos se obtubieron de la página del Servicio Sismológico Nacional <a className='pageData_link' target="_blank" rel="noopener noreferrer" href='http://www.ssn.unam.mx'>http://www.ssn.unam.mx</a>.</p>
            <p className='dataInformation__text'>El periodo que se tomó para el análisis de sismos en México fue de 2011 a 2021. Se le realizó una limpieza y los ajustes necesarios.
            </p>
        </div>
    )
}


export default Article2;