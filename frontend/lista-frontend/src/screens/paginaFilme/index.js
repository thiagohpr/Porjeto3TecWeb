import { useEffect, useState } from "react";
// import "./index.css";
// import axios from "axios";

import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function PaginaFilme({navigation}) {
    return (
        <View>
          <Text>Filme</Text>
          <Button
            title="Ir ao Início"
            onPress={() => navigation.navigate('Lista')}
          />
        </View>
      );
    }