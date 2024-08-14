import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Section from './components/Section';
import SoccerField from './components/SoccerField';
import SimpleCanvas from './components/SimpleCanvas';

function unused(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
    <SafeAreaView style={backgroundStyle}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <SoccerField
          offsetX={10}
          offsetY={10}
          width={300}
          height={500}
          formation={442}
          playerNames={playerNames}
        />
      </View>   
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step Well.. What?">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <SimpleCanvas />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
