import { useState } from "react";
import Banner from "./components/Banner/Banner.js";
import Formulario from "./components/Formulario/index.js";
import Time from "./components/Time/index.js";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ]);
  // times deixou de ser um array e virou um array de objetos, porque cada time tem sua cor primária e secundária

  const [colaboradores, setColaboradores] = useState([]);
  // estado + sua função de setter para mudar o estado, porque não é possivel mudá-lo diretamente,
  // é necessário passar pela função de setter

  function deletarColaborador() {
    console.log('função deletar colaborador');
  }

  // function mudarcorDoTime(cor, id) {
  //   setTimes(times.map(time => {
  //     if(time.id === id) {
  //       time.corSecundaria = cor;
  //     }
  //     return time;
  //   }));
  // }

  function mudarcorDoTime(corPrimaria, corSecundaria, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        return { ...time, corPrimaria, corSecundaria };
      }
      return time;
    }));
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    // função de setter para fazer uma cópia do array antigo de colaboradores, passando o novo colaborador
  };

  // função para exibir o novo colaborador adicionado, que recebe como parâmetro um colaborador
  // na linha 18, estamos passando essa função para dentro do Formulário, para conseguir acessar lá dentro através das props

  // a chave key é usada para controlar a renderização
  return (
    <div className="App">
      <Banner />
      <Formulario
        nomesDosTimes={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => (
        <Time
          mudarCor={mudarcorDoTime}
          key={time.id}
          id={time.id}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      ))}
    </div>
  );
}
// sobre o filter dos colaboradores: filtrar os colaboradores de acordo com o time: 
// o time do colaborador precisa ser igual ao nome do time
// dessa forma, cada colaborador vai parar no na sua seção do site de acordo com o time do qual faz parte
export default App;
