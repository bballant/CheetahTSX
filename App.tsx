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
import TeamEditor from './components/TeamEditor';
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
        <Stack.Screen
          name="GameManager"
          component={GameManager}
          options={{ title: 'Manage Games' }}
        />
        <Stack.Screen
          name="TeamManager"
          component={TeamManager}
          options={{ title: 'Manage Teams' }}
        />
        <Stack.Screen
          name="TeamEditor"
          component={TeamEditor}
          options={{ title: 'Edit Team' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
