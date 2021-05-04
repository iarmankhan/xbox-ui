import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import BottomTabs from 'src/navigation/BottomTabs';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />

      <NavigationContainer theme={DarkTheme}>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
