import React, {useRef} from 'react';
import {Animated, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

interface UserGamesProps {
  games: any[];
}

const UserGames: React.FC<UserGamesProps> = ({games}) => {
  const scroll = useRef(new Animated.Value(0)).current;

  return (
    <>
      {games.map((game, index) => (
        <Animated.Image
          key={game.id}
          source={{uri: game.screenshots[0]}}
          blurRadius={30}
          style={[
            styles.imageBackground,
            {
              opacity: scroll.interpolate({
                inputRange: [(index - 1) * 300, index * 300, (index + 1) * 300],
                outputRange: [0, 1, 0],
              }),
            },
          ]}
        />
      ))}

      <LinearGradient
        colors={['rgba(0, 0, 0, 0.3)', '#222']}
        style={styles.bgGradient}
      />

      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scroll}}}],
          {useNativeDriver: true},
        )}
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
      </Animated.ScrollView>
    </>
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
  imageBackground: {
    position: 'absolute',
    height: 400,
    width: '100%',
    zIndex: 0,
    left: 0,
    right: 0,
  },
  bgGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400,
  },
});

export default UserGames;
