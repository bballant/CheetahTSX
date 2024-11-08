import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Modal } from 'react-native';
import { RootStackParamList } from '../ts/types';
import * as Storage from '../ts/storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { TeamSummary } from '../ts/types';
import { useNavigation } from '@react-navigation/native';

type TeamManagerNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

const TeamManager = () => {
  const navigation = useNavigation<TeamManagerNavigationProp>();

  const [teams, setTeams] = useState<TeamSummary[]>([]);
  const [newTeamName, setNewTeamName] = useState<string>('');

  // load teams when the component mounts
  useEffect(() => {
    const loadTeams = async () => {
      const storedTeams = await Storage.loadData<TeamSummary[]>('teamList');
      if (storedTeams) {
        setTeams(storedTeams);
      }
    };
    loadTeams();
  }, []);

  // save teams whenever the teams state changes
  useEffect(() => {
    const saveTeams = async () => {
      await Storage.saveData('teamList', teams);
    };
    saveTeams();
  }, [teams]);

  const addTeam = () => {
    if (!newTeamName) {
      Alert.alert('Error', 'Please enter team name');
      return;
    }
    if (teams.find(team => team.name === newTeamName)) {
      Alert.alert('Error', 'Team with this name already exists');
      return;
    }
    const newTeam: TeamSummary = { name: newTeamName };
    setTeams(prevTeams => [...prevTeams, newTeam]);
    setNewTeamName('');
  }

  const removeTeam = (name: string) => {
    setTeams(prevTeams => ([
      ...prevTeams.filter(team => team.name !== name)
    ]));
  };

  const handleEditTeam = (teamName: string) => {
    navigation.navigate('TeamEditor', { teamName });
  };

  const renderTeam = ({ item }: { item: TeamSummary }) => (
    <View style={styles.teamContainer}>
      <Text style={styles.teamText}>{item.name}</Text>
      <TouchableOpacity onPress={() => handleEditTeam(item.name)} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Team List */}
      <FlatList
        data={teams}
        renderItem={renderTeam}
        style={styles.list}
      />

      <TextInput
        style={styles.input}
        placeholder="Team Name"
        value={newTeamName}
        onChangeText={setNewTeamName}
      />

      <Button title="Add Team" onPress={addTeam} />

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
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  teamText: {
    fontSize: 18,
  },
  editButton: {
    backgroundColor: 'pink',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TeamManager;
