import './ListaSuspensa.css';

const ListaSuspense = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspense;