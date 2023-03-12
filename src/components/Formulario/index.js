import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../../components/CampoTexto/index.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import Botao from '../Botao';


const Formulario = () => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    // vai retornar o valor em si + o set, que é pra quando eu quiser alterar, essa função set será chamada
    // não posso alterar o valor direto por atribuição, é preciso passar pelo set

    // hook: é algo que o React entrega pra gente para gente conseguir manter um estado dentro de uma função,
    // porque originalmente uma função não tem estado, porque ela é uma função

    const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        // previne o comportamento padrão de recarregar a página
        console.log('Form foi submetido  =>', nome, cargo, imagem, time)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    // o aoAlterado recebe a função Set para mudar
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Insira uma imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    itens={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;