import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

import { NavigationContainer } from '@react-navigation/native';
import Filme from "../../components/filme";
import { Button} from 'react-native';
export default function Lista({navigation}) {


  const [filmes, setFilmes] = useState([]);


const loadData = () => {
    axios
      .get("http://localhost:8000/api/listas/")
      .then((res) => {
        setFilmes(res.data)
        console.log(res.data)});
        console.log(filmes)
    }
const enviarFilme = (childId) => {
  navigation.navigate('Filme',{url_id:childId,load:loadData})
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
            <Filme chave={filme.id} title={filme.title} score={filme.score} state={filme.state} onSubmitFormulario={loadData} url={filme.url} editar={enviarFilme}>
            </Filme>
          ))}
        </div>
        <Button
            title="Ir à Pesquisa"
            onPress={() => navigation.navigate('Pesquisa',{load:loadData})}
          />
        </main>
        </div>
      );
    }