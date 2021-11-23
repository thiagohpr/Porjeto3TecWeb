import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lista from "./screens/lista";
import Pesquisa from "./screens/pesquisa";
import PaginaFilme from "./screens/paginaFilme";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} />
        <Stack.Screen name="Filme" component={PaginaFilme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;