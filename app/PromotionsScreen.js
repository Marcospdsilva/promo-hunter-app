import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function PromotionsScreen() {
  const [promocoes, setPromocoes] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'promocoes'), snapshot => {
      const dados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPromocoes(dados);
    });
    return () => unsubscribe();
  }, []);

  const filtradas = promocoes.filter(p => p.categoria.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput placeholder="Filtrar por categoria" value={filtro} onChangeText={setFiltro} style={styles.input} />
      <FlatList
        data={filtradas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco}</Text>
            {item.imagem && <Image source={{ uri: item.imagem }} style={styles.image} />}
            <Text>Categoria: {item.categoria}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 8 },
  card: { marginBottom: 16, borderBottomWidth: 1, paddingBottom: 10 },
  image: { height: 150, marginVertical: 8 }
});
