import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook for navigation
import { RootStackParamList } from '../ts/types';
import * as Storage from '../ts/storage';
import { StackNavigationProp } from '@react-navigation/stack';


type LoadingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

async function setupTestData() {
  const teamList = [
    "Cheetahs FC",
    "Tigers FC",
    "Lions FC",
  ]

  await Storage.saveData('teamList', teamList);
}

function LoadingScreen(): React.JSX.Element {
  setupTestData();
  const navigation = useNavigation<LoadingScreenNavigationProp>();

  const handleNewGame = () => {
   navigation.navigate('NewGame');
  };

  const handleLoadGame = () => {
    navigation.navigate('GameManager');
  };

  const handleManageTeams = () => {
    navigation.navigate('TeamManager');
  };

  const handleListTeams = () => {
    navigation.navigate('TeamList');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title at the top */}
      <Text style={styles.title}>CheetahTSX</Text>
      <Text style={styles.subtitle}>The Youth Soccer Sub Planner</Text>

      {/* Image centered below the title */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./images/cheetah.png')}
          style={styles.image}
          resizeMode="contain" // Ensures the image scales appropriately
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="New Game" onPress={handleNewGame} />
        <Button title="Load Game" onPress={handleLoadGame} />
        <Button title="List Teams" onPress={handleListTeams} />
        <Button title="Manage Teams" onPress={handleManageTeams} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Vertically center content
    alignItems: 'center', // Horizontally center content
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20, // Add some space between the title and image
  },
  imageContainer: {
    width: '80%', // Allow the image to be centered with some border
    alignItems: 'center',
    marginBottom: 30, // Space between image and buttons
  },
  image: {
    width: 663, // Original width
    height: 400, // Original height
    maxWidth: '100%', // Ensures image is responsive and doesn't overflow
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    height: 150,
  },
});

export default LoadingScreen;
