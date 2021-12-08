import {useState} from "react";
import axios from "axios";

// import "./index.css";
export default function Formulario(props){
    const [nota, setNota] = useState("");
    const [state, setState] = useState("");
    

    const notaChanged = (event) =>{
        setNota(event.target.value);
    }
    const stateChanged = (event) =>{
        setState(event.target.value)
    }


    const CreateLista = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/listas/", {title:props.title,score:nota,state:state,url:props.url})
            .then((response) => {
                setNota("");
                setState("");
                props.onSubmitFormulario();
            });
        console.log(event)
    }

    return (
        <form className="form-card" onSubmit={CreateLista}>
            <label>Dê sua nota:</label>
            <input
            className="form-card-title"
            type="text"
            name="titulo"
            placeholder="Nota"
            value={nota}
            onChange={notaChanged}
            />

            <select id="state" name="statelist" onChange={stateChanged}>
                <option value="Pretendo Assistir" selected>Pretendo Assistir</option>
                <option value="Assistindo">Assistindo</option>
                <option value="Completo">Completo</option>
            </select>
            <button className="btn" type="submit">Adicionar</button>
        </form>
    );
}