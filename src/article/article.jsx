import react from 'react';
import './article.css';

function Article(props) {
    return (
        <div className='container__article'>
            <h4 className='article_title'>{props.title}</h4>
            <p className='article_text'>Experimentamos una leve vibración en el suelo cuando un camión pesado pasa cerca de nuestra ubicación. Aunque esta perturbación en el suelo es percibida como una vibración ligera, solemos denominarla temblor o sismo cuando la sensación es más intensa y prolongada. Sin embargo, es importante destacar que un temblor no es causado por el paso de un camión pesado. ¿Entonces, cuál es la causa de un temblor?</p>
            <p className='article_text'>Los sismos son ocasionados por el movimiento de las placas tectónicas, que constituyen la parte de la superficie de nuestro planeta en la que habitamos. Estas placas se encuentran sometidas a fuerzas considerables en los límites donde entran en contacto. En estas zonas de contacto, se manifiestan diversos procesos geológicos, tales como <a className='article_link' target="_blank" rel="noopener noreferrer" href='https://es.wikipedia.org/wiki/Borde_convergente'>divergencia</a>, <a className='article_link' target="_blank" rel="noopener noreferrer" href='https://es.wikipedia.org/wiki/Borde_divergente'>convergencia</a> y <a className='article_link' target="_blank" rel="noopener noreferrer" href='https://es.wikipedia.org/wiki/Subducci%C3%B3n'>subducción</a>.</p>
            <p className='article_text'>Los fenómenos de subducción y desplazamiento lateral son responsables de la actividad sísmica, ya que se manifiestan en las placas Norteamericana, Cocos, Rivera y del Pacífico, situadas en las proximidades de México. Como resultado, el país se ubica en una región conocida como el Cinturón de Fuego, caracterizada por una elevada incidencia de movimientos sísmicos.</p>
        </div>
    )
}


export default Article;