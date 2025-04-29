import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigation.replace('Home'))
      .catch(error => alert(error.message));
  };

  const register = () => {
    if (password.length !== 6) return alert('Senha deve ter 6 dígitos');
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigation.replace('Home'))
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Promo Hunter</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Senha (6 dígitos)" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <Button mode="contained" onPress={login} style={styles.button}>Entrar</Button>
      <Button onPress={register}>Criar Conta</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 8 },
  button: { marginTop: 12 }
});
