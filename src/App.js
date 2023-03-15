import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Formulario from './components/Formulario/index.js';
import Time from './components/Time/index.js';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  // estado + sua função de setter para mudar o estado, porque não é possivel mudá-lo diretamente,
  // é necessário passar pela função de setter

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    // função de setter para fazer uma cópia do array antigo de colaboradores, passando o novo colaborador
  }
  
  // função para exibir o novo colaborador adicionado, que recebe como parâmetro um colaborador
  // na linha 18, estamos passando essa função para dentro do Formulário, para conseguir acessar lá dentro através das props
  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      <Time nome="Programação" />
      <Time nome="Front-end" />
      <Time nome="Data-Science" />
    </div>
  );
}

export default App;
