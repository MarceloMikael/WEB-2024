import './App.css';
import MeusDados from './components/ativadade00/01MeusDados';
import MeusDados2 from './components/ativadade00/02MeusDados';
import Temperatura from './components/ativadade00/03Temperatura';

function App() {
  return (
    <div>
      <MeusDados/>
      <hr />
      <MeusDados2 nome="Marcelo & Elpidio" curso="Engenharia De Software" universidade="UFC"/>
      <hr />
      <Temperatura c="40" f="70" k="200" />
    </div>
  );
}

export default App;