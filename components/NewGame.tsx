import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

function NewGame(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>New Game Screen</Text>
      {/* Add more UI elements for your NewGame screen */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default NewGame;
