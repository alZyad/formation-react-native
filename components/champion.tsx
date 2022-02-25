import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type Props = {name: string; imageName: string};

const Champion: React.FC<Props> = ({name, imageName}: Props) => {
  const formattedImageName = imageName.replace(/\s+/g, '');

  const championImageUri = `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${formattedImageName}`;

  return (
    <View style={styles.championContainer}>
      <Text style={styles.championName}>{name}</Text>
      <Image style={styles.championImage} source={{uri: championImageUri}} />
    </View>
  );
};

const styles = StyleSheet.create({
  championContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 10,
  },
  championName: {
    textAlign: 'center',
    fontSize: 16,
  },
  championImage: {
    width: 90,
    height: 90,
  },
});

export default Champion;
