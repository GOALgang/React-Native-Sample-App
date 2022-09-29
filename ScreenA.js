import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableHighlight, Text, TextInput, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Button from './Button';

const Stack = createNativeStackNavigator();


const ScreenA = ({ name, navigation }) => {

  const [mandela, setMandela] = useState(0)
  const [messi, setMessi] = useState(0)
  const [bezos, setBezos] = useState(0)
    
  const [count, counterVar] = useState(0)
  const [text, setText] = useState('Click on each person to learn more!')

  const pressMethod = (setDesc) => {
    navigation.navigate('ScreenB', {desc: setDesc})
  }
  useEffect(() => {
    if (mandela > 0 && messi > 0 && bezos > 0 ) {
      setText('You have learned about each person at least once.')
    }
  }); 

  return (
    <View style={styles.initialContainer}>
        <Image
            style = {{ width: 90, height: 90, marginTop: 80, marginBottom: 10, marginLeft: 117,}}
            source={require('./Images/newlightbulb.png')}
        />
    <View>
      <Text style={[{fontFamily: 'BungeeSpice-Regular'}, styles.firstText]}> 
        {text}
      </Text>
    <View>
        <Button
          label={'Nelson Mandela'}
          onPress={() => {
            setMandela(mandela + 1)
            pressMethod("Nelson Rolihlahla Mandela was a South African anti-apartheid activist who served as the first president of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election. His government focused on dismantling the legacy of apartheid by fostering racial reconciliation. Ideologically an African nationalist and socialist, he served as the president of the African National Congress (ANC) party from 1991 to 1997.");
          }}
        />
        <Button 
          label={'Lionel Messi'}
          onPress={() => {
            setMessi(messi + 1)
            pressMethod("Lionel Andrés Messi is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d'Or awards, a record six European Golden Shoes, and in 2020 was named to the Ballon d'Or Dream Team. Until leaving the club in 2021, he had spent his entire professional career with Barcelona, where he won a club-record 35 trophies, including ten La Liga titles, seven Copa del Rey titles and four UEFA Champions Leagues.")
          }}
        />
        <Button
          label={'Jeff Bezos'}
          onPress={() => {
            setBezos(bezos + 1)
            pressMethod("Jeffrey Preston Bez is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut. He is the founder, executive chairman and former president and CEO of Amazon. With a net worth of around US$136 billion as of September 2022, Bezos is the second-wealthiest person in the world and was the wealthiest from 2017 to 2021 according to both Bloomberg's Billionaires Index and Forbes.Born in Albuquerque and raised in Houston and Miami, Bezos graduated from Princeton University in 1986. He holds a degree in electrical engineering and computer science. He worked on Wall Street in a variety of related fields from 1986 to early 1994. Bezos founded Amazon in late 1994 on a road trip from New York City to Seattle.")
          }}
        />
      </View>   
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    firstText: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 12,
    },
    initialContainer: {
        margin: 30,
        height: '80%',
        marginBottom: 10,
        borderWidth: 6,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
    },
    countText: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 12,
        margin: 20,
    }
});

export default ScreenA;