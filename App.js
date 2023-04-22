import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Audio } from 'expo-av';
import SoundButton from './components/soundbutton';
//Expo audio https://docs.expo.dev/versions/latest/sdk/audio/
//Code inspriation from https://github.com/simonandrew/react-native-soundboard

export default function App(){
  const [sound, setSound] = React.useState();
  
  async function playSound(soundName) {
    console.log(`playSound: ${soundName}`);
    const { sound } = await Audio.Sound.createAsync(sounds[soundName]);
    setSound(sound);
    await sound.playAsync();
    /*try {
      await soundObject.loadAsync(sounds[soundName]);
      setSound(sounds[soundName]);
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }*/
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Soundboard {"\n"}App</Text>
        <View style={styles.wrapper}>
          <SoundButton emojiName='clapper' onPress={() => playSound('clap')}></SoundButton>
          <SoundButton emojiName='ticket' onPress={() => playSound('ticketPrint')}></SoundButton>
          <SoundButton emojiName='video_game' onPress={() => playSound('gameNoise')}></SoundButton>
          <SoundButton emojiName='8ball' onPress={() => playSound('ballClack')}></SoundButton>
          <SoundButton emojiName='bowling' onPress={() => playSound('strike')}></SoundButton>
        </View>
        <View style={styles.wrapper}>
          <SoundButton emojiName='saxophone' onPress={() => playSound('sax')}></SoundButton>
          <SoundButton emojiName='guitar' onPress={() => playSound('guitarRiff')}></SoundButton>
          <SoundButton emojiName='musical_keyboard' onPress={() => playSound('piano')}></SoundButton>
          <SoundButton emojiName='trumpet' onPress={() => playSound('trumpetSound')}></SoundButton>
          <SoundButton emojiName='violin' onPress={() => playSound('violinString')}></SoundButton>
        </View>
        <Text style={styles.heading}>{"\n"}Tap an icon to {"\n"}play that sound!</Text>
      </View>
    );
  

  

}

//Sounds from https://freesound.org/
const sounds = {
  'clap': require('./assets/mixkit-one-clap-481.wav'),
  'ticketPrint': require('./assets/461140__15gpanskahladikova_danuse__11_ticketing.wav'),
  'gameNoise': require('./assets/495002__evretro__unlocked-video-game-sound.wav'),
  'ballClack': require('./assets/539854__za-games__billiard-ball-clack.wav'),
  'strike': require('./assets/514385__sieuamthanh__bowling-strike.wav'),
  'sax': require('./assets/620499__omegagroove__sax-ten-phrase3.wav'),
  'guitarRiff': require('./assets/181425__serylis__guitar-chord.wav'),
  'piano': require('./assets/428237__vmstrlocalhost__sound3.wav'),
  'trumpetSound': require('./assets/194625__harbour11__trumpet1.wav'),
  'violinString': require('./assets/641703__theflyfishingfilmmaker__violin-single-note-swell.wav'),
};

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