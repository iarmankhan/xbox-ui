import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';
import {StyleSheet} from 'react-native';

interface BlurryBottomBarProps extends BottomTabBarProps {}

// @todo find blur fix for android as well

const BlurryBottomBar: React.FC<BlurryBottomBarProps> = props => {
  return (
    <BlurView
      blurAmount={100}
      overlayColor=""
      blurType="dark"
      style={styles.root}>
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
