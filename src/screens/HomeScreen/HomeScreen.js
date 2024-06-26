import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OsController from "./OsController";
import VlcController from "./VlcController";
import YtController from "./YtController";

const osContName = 'OS';
const vlcContName = 'VLC';
const ytContName = 'WEB';

const Tab = createBottomTabNavigator();

function HomeScreen({ route }) {
    const { baseUrl} = route.params;
  return (
      <Tab.Navigator
        initialRouteName={osContName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            size = 30

            if (rn === osContName) {
              iconName = focused ? 'desktop' : 'desktop-outline';
              // color = focused ? 'lightgreen' : color;
            } else if (rn === vlcContName) {
              iconName = focused ? 'videocam' : 'videocam-outline';

            } else if (rn === ytContName) {
              iconName = focused ? 'logo-youtube' : 'logo-youtube';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }, headerShown: false,
        })}
        >

        <Tab.Screen name={vlcContName} component={VlcController} initialParams={{baseUrl}}/>
        <Tab.Screen name={osContName} component={OsController} initialParams={{baseUrl}}/>
        <Tab.Screen name={ytContName} component={YtController} initialParams={{baseUrl}}/>

      </Tab.Navigator>
  );
}

export default HomeScreen;