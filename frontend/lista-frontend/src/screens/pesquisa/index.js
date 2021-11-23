import { useEffect, useState } from "react";
// import "./index.css";
// import axios from "axios";

import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Pesquisa({navigation}) {
    return (
        <View>
          <Text>Pesquisa</Text>
          <Button
            title="Ir ao Filme"
            onPress={() => navigation.navigate('Filme')}
          />
        </View>
      );
    }