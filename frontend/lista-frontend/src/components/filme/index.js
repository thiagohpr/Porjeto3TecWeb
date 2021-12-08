import "./index.css";
import axios from "axios";
export default function Filme(props) {
  const DeleteFilme = (event) => {
    event.preventDefault();
    axios
        .delete(`http://localhost:8000/api/listas/${props.chave}`)
        .then((response) => {
            props.onSubmitFormulario();
        });
}
    const Editar = () => {
      props.editar(props.url)

    }
    return (
        <div className="card">
          <div className="header"> <h3 className="card-title">{props.title}</h3>
          <form  onSubmit={DeleteFilme}>
            <button className="botao" type="submit">Deletar</button></form>
            <button className="botao" onClick={Editar}>Editar</button></div>
         
            <div className="card-content">{props.state}</div>
            <div className="card-content">{props.score}</div>
          </div>
      );
    }