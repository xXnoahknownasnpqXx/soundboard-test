import * as React from 'react';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import screens
import AboutScreen from "./screens/AboutScreen"
import SoundboardScreen from "./screens/SoundboardScreen"

export default function App(){
  //Construct navigator method
  const Stack = createNativeStackNavigator();
  
    return (
      //navigation container
        //creates navigation
          //stack obj to hold screens
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
