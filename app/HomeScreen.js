import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Menu Principal</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Post')} style={styles.button}>
        Postar Promoção
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Promotions')}>
        Ver Promoções
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  button: { marginBottom: 10 }
});
