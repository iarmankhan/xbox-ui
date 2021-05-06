import React from 'react';
import {BlurView} from 'expo-blur';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';
import {StyleSheet} from 'react-native';

interface BlurryBottomBarProps extends BottomTabBarProps {}

const BlurryBottomBar: React.FC<BlurryBottomBarProps> = props => {
  return (
    <BlurView intensity={100} tint="dark" style={styles.root}>
      <BottomTabBar {...props} />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BlurryBottomBar;
