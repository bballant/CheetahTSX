import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SoccerField from './components/SoccerField';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './components/LoadingScreen';
import NewGame from './components/NewGame';
import GameManager from './components/GameManager';
import TeamManager from './components/TeamManager';
import TeamList from './components/TeamList';
const Stack = createStackNavigator<RootStackParamList>();

import { RootStackParamList } from './ts/types';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        {/* Loading Screen */}
        <Stack.Screen 
          name="Loading" 
          component={LoadingScreen} 
          options={{
            title: 'Welcome to CheetahTSX',
            headerShown: false,
          }}
        />
        {/* New Game Screen */}
        <Stack.Screen 
          name="NewGame" 
          component={NewGame} 
          options={{ title: 'New Game' }}
        />
        {/* New Game Screen */}
        <Stack.Screen 
          name="GameManager" 
          component={GameManager} 
          options={{ title: 'Manage Games' }}
        />
        <Stack.Screen 
          name="TeamManager" 
          component={TeamManager} 
          options={{ title: 'Manage Team' }}
        />
        <Stack.Screen 
          name="TeamList" 
          component={TeamList} 
          options={{ title: 'List Teams' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function unused(): React.JSX.Element {
  const [formation, setFormation] = useState(433);

  const playerNames = new Map([
    ['GK', 'Goalkeeper'],
    ['LB', 'Left Back'],
    ['CB', 'Center Back'],
    ['RB', 'Right Back'],
    ['LM', 'Left Midfield'],
    ['CM', 'Center Midfield'],
    ['RM', 'Right Midfield'],
    ['LF', 'Left Forward'],
    ['ST', 'Striker'],
    ['RF', 'Right Forward'],
  ]);
  
  const backgroundStyle = Colors.darker;

  return (
    <SafeAreaView style={[backgroundStyle]}>
      <View>
        {/* SoccerField component */}
        <SoccerField
          formation={formation}
          playerNames={playerNames}
        />
      </View>

      <View>
        <Picker
          selectedValue={formation}
          onValueChange={(v) => setFormation(v)}
          style={{ height: 50, width: 150 }}
        >
          <Picker.Item label="4-3-3" value={433} />
          <Picker.Item label="4-4-2" value={442} />
        </Picker>
      </View>
    </SafeAreaView>
  );
}

