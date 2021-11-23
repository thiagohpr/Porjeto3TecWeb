import "./index.css";
export default function Filme(props) {
    return (
        <div className="card">
          <h3 className="card-title">{props.title}</h3>
            <p className="card-content">{props.state}</p>
            <p className="card-content">{props.score}</p>
          </div>
      );
    }