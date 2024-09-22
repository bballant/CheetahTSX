import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook for navigation
import { RootStackParamList } from './types';
import { StackNavigationProp } from '@react-navigation/stack';

type LoadingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

function LoadingScreen(): React.JSX.Element {
  const navigation = useNavigation<LoadingScreenNavigationProp>();

  const handleNewGame = () => {
    // Navigate to the NewGame screen
   navigation.navigate('NewGame');
  };

  const handleLoadGame = () => {
    // Placeholder logic for Load Game
    console.log('Load Game Pressed');
  };

  const handleManageTeams = () => {
    // Placeholder logic for Manage Teams
    console.log('Manage Teams Pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title at the top */}
      <Text style={styles.title}>Soccer Game</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="New Game" onPress={handleNewGame} />
        <Button title="Load Game" onPress={handleLoadGame} />
        <Button title="Manage Teams" onPress={handleManageTeams} />
      </View>
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
    marginBottom: 50,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    height: 150,
  },
});

export default LoadingScreen;
