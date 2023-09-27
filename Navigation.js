
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PlayGame from './src/screens/PlayGame';
import Setting from './src/screens/Setting';
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator  >
        <Tab.Screen name="Play" component={PlayGame} options={{headerShown: false}}/>
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
