import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../ts/types';
import * as Storage from '../ts/storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { TeamSummary } from '../ts/types';

type LoadingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

async function setupTestData() {
  const teamList = [
    {name: "Cheetahs FC"},
    {name: "Tigers FC"},
    {name: "Lions FC"},
  ]
  await Storage.saveData('teamList', teamList);
}

function LoadingScreen(): React.JSX.Element {
  Storage.saveData('teamList', []);
  const navigation = useNavigation<LoadingScreenNavigationProp>();

  const handleManageGames = () => {
    navigation.navigate('GameManager');
  };

  const handleManageTeams = () => {
    navigation.navigate('TeamManager');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CheetahTSX</Text>
      <Text style={styles.subtitle}>The Youth Soccer Sub Planner</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('./images/cheetah.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Manage Games" onPress={handleManageGames} />
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
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  imageContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 663,
    height: 400,
    maxWidth: '100%',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    height: 80,
  },
});

export default LoadingScreen;
