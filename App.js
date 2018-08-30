import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Tester, TestHookStore} from 'cavy';
import ProfileSpecs from './specs/ProfileSpec'
import Profile from './components/Profile'


const testHookStore = new TestHookStore();

export default class App extends React.Component {
  render() {
    return (
      <Tester specs={[ProfileSpecs]} store={testHookStore} waitTime={1000}
        startDelay={3000} sendReport={true}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app! </Text>
          <Profile></Profile>
        </View>
      </Tester>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
