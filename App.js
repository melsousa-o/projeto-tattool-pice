import 'react-native-gesture-handler'; // <--- ESSA LINHA CORRIGE O ERRO "setNativeProps"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Voltamos para o Stack JS
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importação das Telas
import Home from './src/screens/Home.jsx';
import TatuadoraAna from './src/screens/TatuadoraAna.jsx';

// Criação do Stack (Versão JS, compatível com Snack)
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false // Esconde o header padrão
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TatuadoraAna" component={TatuadoraAna} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}