import "./Time.css";
import Colaborador from "../Colaborador";

const Time = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <input value={props.corPrimaria} onChange={(evento) => props.mudarCor(evento.target.value, props.corSecundaria, props.id)} type='color' className="input-cor" />
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

