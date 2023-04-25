import { View, Text, Button, StyleSheet} from 'react-native'
import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>About Screen</Text>
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
  });

export default AboutScreen