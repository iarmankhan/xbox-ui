import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

interface UserGamesProps {
  games: any[];
}

const UserGames: React.FC<UserGamesProps> = ({games}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      decelerationRate="fast"
      snapToInterval={300}
      snapToAlignment="start">
      {games.map(game => (
        <View key={game.id} style={styles.game}>
          <ImageBackground
            source={{uri: game.screenshots[0]}}
            style={styles.cover}>
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
              style={styles.overlay}>
              <Text style={styles.title}>{game.title}</Text>
              <Text style={styles.editor}>{game.editor}</Text>
            </LinearGradient>
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 15,
  },
  title: {color: 'white', fontSize: 34},
  editor: {
    color: 'white',
  },
});

export default UserGames;
