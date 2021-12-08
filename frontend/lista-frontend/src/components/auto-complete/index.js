// import "./index.css";
export default function AutoComplete(props) {
    const clicou=()=>{
        props.botao(props.id)
    }
    return (
        <div>
          <h3>{props.l}</h3>
            
            <button onClick={clicou}>Ir!</button>

          </div>
      );
    }