import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedHeader from 'src/components/header/AnimatedHeader';
import gamesData from '../../assets/games.json';
import UserGames from 'src/components/games/UserGames';

interface HomeScreenProps {}

const GAMES = gamesData.games;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.root} edges={['right', 'bottom', 'left']}>
      <AnimatedHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <UserGames games={GAMES} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#222',
  },
});

export default HomeScreen;
