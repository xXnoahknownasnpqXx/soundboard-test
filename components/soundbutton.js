import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native'
import Emoji from 'react-native-emoji';
//React Native Emoji https://github.com/EricPKerr/react-native-emoji

class soundButton extends Component {
  render() {
    const { emojiName, onPress } = this.props;
    
    //sets specfic emoji for a button
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
        <Emoji name={emojiName} style={{fontSize:30}} />
      </TouchableOpacity>
    );
  }
}

//prop types
soundButton.propTypes = {
  emojiName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

//button styling
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#21b8a5',
    padding:15,
    margin:3,
    borderRadius: 15,
  }
});

export default soundButton;