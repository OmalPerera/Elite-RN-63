import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Minimal code</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    color: 'black',
  },
});

export default App;
