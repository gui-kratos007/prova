import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginTela from './LoginTela';
import RegistroTela from './RegistroTela';
import RecuperacaoSenhaTela from './RecuperacaoSenhaTela';
import HomeTela from './HomeTela';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginTela} />
        <Stack.Screen name="Registro" component={RegistroTela} />
        <Stack.Screen name="Recuperacao de Senha" component={RecuperacaoSenhaTela} />
        <Stack.Screen name="Home" component={HomeTela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
