import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const RegistroTela = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00A896' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Registro</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ width: 300, marginBottom: 20 }}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ width: 300, marginBottom: 20 }}
      />
      <Button title="Voltar ao Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegistroTela;
