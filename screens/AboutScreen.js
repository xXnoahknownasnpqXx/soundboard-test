import { View, Text, Button, StyleSheet} from 'react-native'
import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>About Screen</Text>
            <Text style={styles.Text}>Expo audio: {"\n"} https://docs.expo.dev/versions/latest/sdk/audio/
            {"\n"} Code inspriation from {"\n"} https://github.com/simonandrew/react-native-soundboard
            {"\n"} React Native Emoji {"\n"} https://github.com/EricPKerr/react-native-emoji
            {"\n"} React Navigation {"\n"} https://reactnavigation.org/docs/getting-started</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#59584c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      flexDirection: 'row',
    },
    heading: {
      color: '#ffffff',
      textAlignVertical: 'top',
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 60,
    },
    Text: {
      fontSize: 20,
      marginBottom: 60,
    },
  });

export default AboutScreen