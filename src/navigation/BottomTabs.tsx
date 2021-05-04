import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from 'src/screens/Home.screen';
import EmptyScreen from 'src/screens/Empty.screen';
import Icon from 'react-native-vector-icons/Ionicons';
import BlurryBottomBar from 'src/navigation/BlurryBottomBar';

const Tab = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={BlurryBottomBar}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? 'white' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'people' : 'people-outline'}
              size={size}
              color={focused ? 'white' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'search' : 'search-outline'}
              size={size}
              color={focused ? 'white' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'library' : 'library-outline'}
              size={size}
              color={focused ? 'white' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={focused ? 'white' : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
