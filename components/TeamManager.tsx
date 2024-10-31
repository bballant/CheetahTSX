import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Modal } from 'react-native';

import { Team, Player } from '../ts/types';

const initialTeam: Team = {
  name: 'Cheetahs FC',
  players: [
    { name: 'John Doe', number: 7 },
    { name: 'Jane Smith', number: 10 },
    { name: 'Mike Johnson', number: 4 }
  ]
};

const TeamManager = () => {
  const [team, setTeam] = useState<Team>(initialTeam);
  const [newPlayerName, setNewPlayerName] = useState<string>('');
  const [newPlayerNumber, setNewPlayerNumber] = useState<string>('');
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [tempTeamName, setTempTeamName] = useState<string>(team.name);

  const addPlayer = () => {
    if (!newPlayerName || !newPlayerNumber) {
      Alert.alert('Error', 'Please enter both player name and number');
      return;
    }

    const number = parseInt(newPlayerNumber, 10);
    if (isNaN(number) || number < 0) {
      Alert.alert('Error', 'Please enter a valid player number');
      return;
    }

    const newPlayer: Player = { name: newPlayerName, number };

    if (team.players.find(player => player.number === number)) {
      Alert.alert('Error', 'Player with this number already exists');
      return;
    }

    setTeam(prevTeam => ({
      ...prevTeam,
      players: [...prevTeam.players, newPlayer]
    }));

    // resets the form
    setNewPlayerName('');
    setNewPlayerNumber('');
  };

  // Function to remove a player from the team
  const removePlayer = (number: number) => {
    setTeam(prevTeam => ({
      ...prevTeam,
      players: prevTeam.players.filter(player => player.number !== number)
    }));
  };

  // Function to open the modal for editing the team name
  const openModal = () => {
    setTempTeamName(team.name); // Pre-fill the modal with the current team name
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Function to save the new team name
  const saveTeamName = () => {
    setTeam(prevTeam => ({
      ...prevTeam,
      name: tempTeamName
    }));
    closeModal();
  };

  // Render function for individual players with a remove button
  const renderPlayer = ({ item }: { item: Player }) => (
    <View style={styles.playerContainer}>
      <Text style={styles.playerText}>#{item.number} - {item.name}</Text>
      <TouchableOpacity onPress={() => removePlayer(item.number)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Team Name with Edit Icon */}
      <View style={styles.teamNameContainer}>
        <Text style={styles.teamName}>
          {team.name}
          {/* Place the Unicode edit icon within the Text component */}
          <Text onPress={openModal} style={styles.editIcon}> ✎</Text>
        </Text>
      </View>

      {/* Players List */}
      <FlatList
        data={team.players}
        keyExtractor={(item) => item.number.toString()}
        renderItem={renderPlayer}
        style={styles.list}
      />

      {/* Input fields for adding new players */}
      <TextInput
        style={styles.input}
        placeholder="Player Name"
        value={newPlayerName}
        onChangeText={setNewPlayerName}
      />
      <TextInput
        style={styles.input}
        placeholder="Player Number"
        value={newPlayerNumber}
        onChangeText={setNewPlayerNumber}
        keyboardType="numeric"
      />

      <Button title="Add Player" onPress={addPlayer} />

      {/* Modal for editing team name */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Team Name</Text>
            <TextInput
              style={styles.modalInput}
              value={tempTeamName}
              onChangeText={setTempTeamName}
              placeholder="Enter team name"
            />
            <View style={styles.modalButtons}>
              <Button title="Save" onPress={saveTeamName} />
              <Button title="Cancel" onPress={closeModal} color="red" />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  teamNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  editIcon: {
    fontSize: 16,
    color: 'blue', // Styling for the Unicode icon
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
  removeButton: {
    backgroundColor: 'pink',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  modalInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TeamManager;
