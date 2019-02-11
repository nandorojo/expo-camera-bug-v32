import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import Record from './components/Record';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Record />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
