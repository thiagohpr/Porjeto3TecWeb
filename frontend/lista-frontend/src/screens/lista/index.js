import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

import { NavigationContainer } from '@react-navigation/native';
import Filme from "components/filme";
import { Button} from 'react-native';
export default function Lista({navigation}) {


  const [filmes, setFilmes] = useState([]);


const loadData = () => {
    axios
      .get("http://localhost:8000/api/listas/")
      .then((res) => {
        setFilmes(res.data)
        console.log(res.data)});
    }

  useEffect(() => {
    loadData();
  }, []);


    return (
      <div className="App">
      <div className="appbar">
        <span className="subtitle">Minha Lista</span>
      </div>
      <main className="container">
        <div className="card-container">
          {filmes.map((filme) => (
            // <Filme key={`filme__${ingrediente.id}`} title={filme.title} score={filme.score} state={filme.state} id={ingrediente.id} onSubmitFormulario={loadData}>
            // </Filme>
            <div>{filme.title}</div>
          ))}
        </div>
        <Button
            title="Ir à Pesquisa"
            onPress={() => navigation.navigate('Pesquisa')}
          />
        </main>
        </div>
      );
    }