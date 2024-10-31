import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Modal } from 'react-native';
import * as Storage from "../ts/storage";

import { Team, Player } from '../ts/types';

const TeamList = () => {
  const [teams, setTeams] = useState<string[]>([]); // Start with an empty array as the initial state

  useEffect(() => {
    // Load data asynchronously when the component mounts
    const fetchTeams = async () => {
      const loadedTeams = await Storage.loadData<string[]>('teamList');
      if (loadedTeams) {
        setTeams(loadedTeams); // Update the state with loaded teams
      }
    };

    fetchTeams();
  }, []); // Empty dependency array ensures this runs only once on mount

  const renderTeam = ({ item }: { item: string }) => (
    <View style={styles.playerContainer}>
      <Text style={styles.playerText}>#{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Team List */}
      <FlatList
        data={teams}
        keyExtractor={(item) => item}
        renderItem={renderTeam}
        style={styles.list}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  list: {
    marginTop: 10,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  playerText: {
    fontSize: 18,
  },
});

export default TeamList;
