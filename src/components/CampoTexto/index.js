import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    // o value é atrelado ao estado: se o value muda, o estado muda. e vice-versa
    // capturando o valor do input, cada letra que for digitada(incluindo os espaços) aparecerão no event.target.value
    // conseguimos ver todos os valores, cada letra digitada, no console

    /*
        Para entender melhor todo o ciclo de vida e o poder do React é importante entender os disparos eo evento,
        e também como gerenciamos o estado das nossas variáveis e como o estado da nossa variável interna associada aos componentes visuais
    */

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default CampoTexto;