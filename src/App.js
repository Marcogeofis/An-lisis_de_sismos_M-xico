import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Análisis sismico de México
        </h1>
      </header>
      <section>
        <article>
          <h4>
            ¿Qué es un sismo o temblor?
          </h4>
          <p>Experimentamos una leve vibración en el suelo cuando un camión pesado pasa cerca de nuestra ubicación. Aunque esta perturbación en el suelo es percibida como una vibración ligera, solemos denominarla temblor o sismo cuando la sensación es más intensa y prolongada. Sin embargo, es importante destacar que un temblor no es causado por el paso de un camión pesado. ¿Entonces, cuál es la causa de un temblor?</p>
          <p>Los sismos son ocasionados por el movimiento de las placas tectónicas, que constituyen la parte de la superficie de nuestro planeta en la que habitamos. Estas placas se encuentran sometidas a fuerzas considerables en los límites donde entran en contacto. En estas zonas de contacto, se manifiestan diversos procesos geológicos, tales como <a href='https://es.wikipedia.org/wiki/Borde_convergente'>divergencia</a>, <a href='https://es.wikipedia.org/wiki/Borde_divergente'>convergencia</a> y <a href='https://es.wikipedia.org/wiki/Subducci%C3%B3n'>subducción</a>.</p>
          <p>Los fenómenos de subducción y desplazamiento lateral son responsables de la actividad sísmica, ya que se manifiestan en las placas Norteamericana, Cocos, Rivera y del Pacífico, situadas en las proximidades de México. Como resultado, el país se ubica en una región conocida como el Cinturón de Fuego, caracterizada por una elevada incidencia de movimientos sísmicos.</p>
        </article>
        
        <article>
          <h4>
            Obtención de los datos
          </h4>
          <p>Los datos se obtubieron de la página del Servicio Sismológico Nacional http://www.ssn.unam.mx/sismicidad/ultimos/.</p>
          <p>El periodo que se tomó para el análisis de sismos en México fue de 2011 a 2021. Se le realizó una limpieza y los ajustes necesarios.
          </p>
        </article>
        <article>
          <h4>
            Dashboards de los sismos por Estado.
          </h4>
          <p>dashboards</p>
        </article>
      </section>
    </div>
  );
}

export default App;
