import Header from './heades/header';
import Article from './article/article';
import Article2 from './PageData/pageData';
import Dashboard from './imgDashboards/imgDashboard';
import ImgGeo from './imgGeologicos/imgGeo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='container__intro'>
        <Article 
          title='¿Qué es un sismo o temblor?'
        />
        <section className='container__imgGeo'>
          <ImgGeo 
            title='Convergencia - imágen tomada de wikipedia'
            img='https://i.imgur.com/06MGOO4.png'
          />
          <ImgGeo 
            title='Subdución - imágen tomada de wikipedia'
            img='https://i.imgur.com/wT2DC6Q.png'
          />
          <ImgGeo 
            title='Divergencia - imágen tomada de wikipedia'
            img='https://i.imgur.com/sI5jU8Y.png'
          />
          <ImgGeo 
            title='Desplazamiento lateral - imágen tomada de wikipedia'
            img='https://i.imgur.com/LHEbVb5.png'
          />
          <ImgGeo 
            title='Cinturón de fuego - imágen tomada de wikipedia'
            img='https://i.imgur.com/TLDpOZf.png'
          />
        </section>
        <Article2
          title='Obtención de los datos'
        />
      </section>
      <section className='container__section--dashboard'>
        <h4 className='section__title--dashboard'>Dashboards de los sismos por Estado.</h4>
        <section className='container__imgDash'>
          <Dashboard 
            img='https://i.imgur.com/jMyFbUo.png'
          />
          <Dashboard 
            img='https://i.imgur.com/yWiagSG.png'
          />
          <Dashboard 
            img='https://i.imgur.com/8UqC09b.png'
          />
          <Dashboard 
            img='https://i.imgur.com/NROIWfh.png'
          />
          <Dashboard 
            img='https://i.imgur.com/hVEramq.png'
          />
          <Dashboard 
            img='https://i.imgur.com/igqhfIw.png'
          />
          <Dashboard 
            img='https://i.imgur.com/ZVzGdLz.png'
          />
          <Dashboard 
            img='https://i.imgur.com/Jdgcrwc.png'
          />
          <Dashboard 
            img='https://i.imgur.com/SOQkATS.png'
          />
          <Dashboard 
            img='https://i.imgur.com/ebRz9SB.png'
          />
          <Dashboard 
            img='https://i.imgur.com/hKuhaMG.png'
          />
          <Dashboard 
            img='https://i.imgur.com/GM0M9Hr.png'
          />
          <Dashboard 
            img='https://i.imgur.com/9jzlB66.png'
          />
          <Dashboard 
            img='https://i.imgur.com/uRJHHFC.png'
          />
          <Dashboard 
            img='https://i.imgur.com/OCJJ4HS.png'
          />
          <Dashboard 
            img='https://i.imgur.com/bd1GB7x.png'
          />
          <Dashboard 
            img='https://i.imgur.com/r07UGDh.png'
          />
          <Dashboard 
            img='https://i.imgur.com/JsNbv8b.png'
          />
        </section>
      </section>
    </div>
  );
}

export default App;
