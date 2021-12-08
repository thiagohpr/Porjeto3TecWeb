import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AutoComplete from "../../components/auto-complete";

export default function Pesquisa({route,navigation}) {
  const {load} = route.params;
  const [title, setTitle] = useState("");
  const [filmes, setFilmes] = useState();

  const botao=(childId)=>{
    navigation.navigate('Filme',{url_id:childId,load:load})

  }


  const verificaId=(obj)=>{
    var lista=[]
    for (var i in obj){
      var id = obj[i].id
      if (id.slice(0,2)=='tt'){
        lista.push(obj[i])
        // console.log(obj[i])
      }

    }
    return lista
  }

  const titleChanged = (event) =>{
    setTitle(event.target.value);
    if (title==""){
      setFilmes("")
    }
    else{
      var options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: title},
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': '84f35370dcmsh6351e46ff30d233p118dd7jsnf6ab319f1209'
      }
    };

    axios.request(options).then(function (response) {
      setFilmes(Array.from(verificaId(response.data.d)))
      console.log(filmes)

    }).catch(function (error) {
      console.error(error);
    });}
}

  const verificaUndefined=(filmes)=>{
    if (filmes!=undefined && filmes!=""){
      return (<div>{filmes.map((filme) => (
        <AutoComplete key={`filme__${filme.id}`} l={filme.l} id={filme.id} botao={botao}>
        </AutoComplete>
        
            ))}</div>)
    }
  }

    return (    

      <div>
        <Button
            title="Voltar"
            onPress={() => navigation.navigate('Lista')}
          />
      <h1>Pesquisa</h1> 
      <form className="form-card">
          <input
          className="form-card-title"
          type="text"
          name="titulo"
          placeholder="Título"
          value={title}
          onChange={titleChanged}
          />
  </form>
      {verificaUndefined(filmes)}
  </div>

/*           
          <Button
            title="Ir ao Filme"
            onPress={() => navigation.navigate('Filme')}
          /> */
        
      );
    }