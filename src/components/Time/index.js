import "./Time.css";
import Colaborador from "../Colaborador";

const Time = (props) => {
  return (
    // dentro das chaves do style={} abrimos outra chave {} para indicar que há uma variável ali dentro
    // assim, colocamos as estilizações que, nesse caso, está no App.js
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => {
          return <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            aoDeletar={props.aoDeletar}
          />
        })}
      </div>
    </section>
  );
};

export default Time;
