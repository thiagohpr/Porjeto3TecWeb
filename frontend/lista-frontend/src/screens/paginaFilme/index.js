import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Formulario from "../../components/formulario";
export default function PaginaFilme({route, navigation}) {
    const {url_id,load} = route.params;

    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [summary, setSummary] = useState();
    const [rating, setRating] = useState();
    const [ratio, setRatio] = useState();
    

    const loadData=()=> {
      var options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
        params: {tconst: url_id, currentCountry: 'US'},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': '84f35370dcmsh6351e46ff30d233p118dd7jsnf6ab319f1209'
        }
      };
      
      axios.request(options).then(function (response) {
        setTitle(response.data.title.title)
        setImage(response.data.title.image.url)
        setRatio(response.data.title.image.width/response.data.title.image.height)
        setSummary(response.data.plotSummary.text)
        setRating(response.data.ratings.rating)
        
        
      }).catch(function (error) {
        console.error(error);
      });
    }

    useEffect(() => {
      loadData();
    }, []);

    const onSubmitFormulario=(event)=>{
      load()
      navigation.navigate('Lista')
    }
    const tamanhoImagem=(altura)=>{
      var width=altura*ratio
      return (<img src={image} height={altura} width={width} alt="Imagem" />)
    }
    return (
        <div className="tudo">
          <Button
            title="Ir ao Início"
            onPress={() => navigation.navigate('Lista')}
          />
          <h1>{title}</h1>
          <div className="header"><div className="resumo">
            {tamanhoImagem(400)}
            <h3>Nota média: {rating}</h3>
            </div>
          <div className="sinopse">
            <h2>Sinopse:</h2>
            {summary}</div>
            </div>
          
          
          <div className="formulario"><Formulario onSubmitFormulario={onSubmitFormulario} title={title} url={url_id}></Formulario></div>

       </div>
      );
    }