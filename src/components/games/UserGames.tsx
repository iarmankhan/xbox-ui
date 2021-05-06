import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

interface UserGamesProps {
  games: any[];
}

const UserGames: React.FC<UserGamesProps> = ({games}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {games.map(game => (
        <View key={game.id} style={styles.game}>
          <ImageBackground
            source={{uri: game.screenshots[0]}}
            style={styles.cover}>
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
              style={styles.overlay}
            />
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {},
  contentContainer: {
    paddingTop: 120,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  game: {
    marginRight: 15,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 1,
  },
  cover: {
    height: 300,
    width: 300,
    borderRadius: 6,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
  },
});

export default UserGames;
