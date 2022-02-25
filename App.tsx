/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
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
import Champion from './components/champion';

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Champions List</Text>
    </View>
  );
};

type championDetails = {name: string; imageName: string};

const isChampion = (
  championEntry: any,
): championEntry is {name: string; image: {full: string}} =>
  championEntry.hasOwnProperty('name') && championEntry.hasOwnProperty('image');

const App = () => {
  const [search, setSearch] = useState('');
  const [champions, setChampions] = useState<championDetails[]>([]);

  const getChampions = async () => {
    try {
      const response = await fetch(
        'https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json',
      );
      const json = await response.json();
      const championDetails = Object.entries(json.data);

      setChampions(
        championDetails.map(championEntry =>
          isChampion(championEntry[1])
            ? {
                name: championEntry[1].name,
                imageName: championEntry[1].image.full,
              }
            : {name: 'name_not_found', imageName: 'image_name_not_found'},
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChampions();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const filteredChampions = champions.filter((champion: championDetails) =>
    champion.name.toLowerCase().includes(search.toLowerCase()),
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
          {filteredChampions.map((champion, index) => (
            <Champion
              key={champion.name + index}
              name={champion.name}
              imageName={champion.imageName}
            />
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
});

export default App;
