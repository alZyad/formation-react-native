/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Images from './static/images/index';

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Champions List</Text>
    </View>
  );
};

type championNames =
  | 'Aatrox'
  | 'Ashe'
  | 'Ahri'
  | 'Asol'
  | 'Ryze'
  | 'Viego'
  | 'Zeri';

const champions: championNames[] = [
  'Aatrox',
  'Ashe',
  'Ahri',
  'Asol',
  'Ryze',
  'Viego',
  'Zeri',
];
const Champion: React.FC<{
  name: championNames;
}> = Props => {
  const {name} = Props;
  return (
    <View style={styles.championContainer}>
      <Text style={styles.championName}>{name}</Text>
      <Image source={Images[name]} />
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [search, setSearch] = useState('');
  const filteredChampions = champions.filter((champion: championNames) =>
    champion.includes(search),
  );
  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.mainScrollView}}>
      <ScrollView
        style={styles.mainScrollView}
        contentInsetAdjustmentBehavior="automatic">
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Title />
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearch}
          value={search}
          placeholder="Search..."
        />
        <View style={styles.championsContainer}>
          {filteredChampions.map(champion => (
            <Champion key={champion} name={champion} />
          ))}
        </View>
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
  searchInput: {
    width: '40%',
    height: 40,
    marginVertical: 16,
    marginHorizontal: 32,
    borderWidth: 1,
    padding: 10,
  },
  championsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  championContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 10,
  },
  championName: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
