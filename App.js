import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutScreen from "./screens/AboutScreen"
import SoundboardScreen from "./screens/SoundboardScreen"

export default function App(){
  const Stack = createNativeStackNavigator();
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="SoundboardScreen" 
            component={SoundboardScreen} 
            options={{ headerShown : false}}
            />
          <Stack.Screen 
            name="AboutScreen" 
            component={AboutScreen} 
            options={{ headerShown : false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59584c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});