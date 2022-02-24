/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  ScrollViewBase,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Champions List</Text>
    </View>
  );
};

const Champion = () => {
  return (
    <View style={styles.championContainer}>
      <Text style={styles.championName}>Aatrox</Text>
      <Image source={require('./static/images/Aatrox.png')} />
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.mainScrollView}}>
      <ScrollView
        style={styles.mainScrollView}
        contentInsetAdjustmentBehavior="automatic">
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Title />
        <Champion />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScrollView: {
    flex: 1,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    width: '80%',
    marginVertical: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 3,
    color: 'black',
    backgroundColor: '#61dafb',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
  },
  championContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  championName: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
