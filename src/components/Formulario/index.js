import './Formulario.css';
import CampoTexto from '../../components/CampoTexto/index.js';
import ListaSuspense from '../ListaSuspensa/index.js';

const Formulario = () => {

    const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira uma imagem" />
                <ListaSuspense itens={times}/>
            </form>
        </section>
    )
}

export default Formulario;