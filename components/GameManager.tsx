import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import SoccerField from './SoccerField';

function GameManager(): React.JSX.Element {
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
  

  return (
    <SafeAreaView>
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

export default GameManager;