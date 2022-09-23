import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableHighlight, Text, TextInput, View, Button, FlatList, TouchableOpacity} from 'react-native';


const Stack = createNativeStackNavigator();


const ScreenA = ({ name, navigation }) => {

  const [mandela, setMandela] = useState(0)
  const [messi, setMessi] = useState(0)
  const [bezos, setBezos] = useState(0)
  
  const [text, setText] = useState('Click on each person to learn more!')

  useEffect(() => {
    if (mandela > 0 && messi > 0 && bezos > 0) {
      setText('You have learned about each person at least once.')
    }
  }); 

  return (
    <View style={styles.container}>
      <Text style={styles.timer}> 
        {text}
      </Text>
      <View style={styles.description}>
        <Button
          title='Nelson Mandela'
          onPress={() => {
            navigation.navigate('ScreenB', {desc: 'Nelson Mandela was a South-African apartheid leader. He lived from 1918-2013.'})
            setMandela(mandela + 1)
          }}
        />
      </View>
      <View style={styles.description}>
        <Button 
          title='Lionel Messi'
          onPress={() => {
            navigation.navigate('ScreenB', {desc: 'Lionel Messi is a soccer forward currently playing for PSG. He is known for his stellar tenure at FC Barcelona.'})
            setMessi(messi + 1)
          }}
        />
      </View>
      <View style={styles.description}>
        <Button
          title='Jeff Bezos'
          onPress={() => {
            navigation.navigate('ScreenB', {desc: 'Jeff Bezos is the founder of Amazon and BlueOrigin. He is worth around 150 billion dollars.'})
            setBezos(bezos + 1)
          }}
        />
      </View>
      <Text style={styles.counter}>
          You clicked on Nelson Mandela {mandela} times.
      </Text>
      <Text style={styles.counter}>
          You clicked on Lionel Messi {messi} times.
      </Text>
      <Text style={styles.counter}>
          You clicked on Jeff Bezos {bezos} times.
      </Text>
    </View>
  )
}
      

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginBottom: 50,
    },
    description: {
        margin: 30,
        paddingHorizontal: 7,
        paddingVertical: 8,
        borderWidth: 6,
        borderRadius: 10,
        borderColor: '#0096FF',
        backgroundColor: '#F0E68C',
        color: '#20232A',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    counter: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    timer: {
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
    },
});

const ScreenB = ({ route, navigation }) => {
  return (
      <View style={styles.description}>
          <Text>{ route.params.desc }</Text>
      </View>
  )
}

const appNav = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{ title: 'Pick a person!'}}
        />
        <Stack.Screen 
        name="ScreenB" 
        component={ScreenB} 
        options={{ title: 'Learn more about this person!'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default appNav;