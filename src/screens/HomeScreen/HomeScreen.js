import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OsController from "./OsController";
import VlcController from "./VlcController";
import YtController from "./YtController";

const osContName = 'Os';
const vlcContName = 'Vlc';
const ytContName = 'Yt';

const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
      <Tab.Navigator
        initialRouteName={osContName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === osContName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === vlcContName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === ytContName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }, headerShown: false,
        })}
        >

        <Tab.Screen name={vlcContName} component={VlcController} />
        <Tab.Screen name={osContName} component={OsController} />
        <Tab.Screen name={ytContName} component={YtController} />

      </Tab.Navigator>
  );
}

export default HomeScreen;