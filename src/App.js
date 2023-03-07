import Banner from './components/Banner/Banner.js';
import CampoTexto from './components/CampoTexto/index.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
      <CampoTexto label="Imagem" placeholder="Insira uma imagem" />
    </div>
  );
}

export default App;
