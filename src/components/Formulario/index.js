import './Formulario.css';
import CampoTexto from '../../components/CampoTexto/index.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import Botao from '../Botao';

const Formulario = () => {

    const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
    ]

    const aoSalvar = (event) => {
        event.preventDefault();
        // previne o comportamento padrão de recarregar a página
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira uma imagem" />
                <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;