import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableHighlight, Text, TextInput, View, Button, FlatList, TouchableOpacity} from 'react-native';

 const ScreenA = ({ navigation }) => {

    const [person, setPerson] = useState([
      { name: 'Nelson Mandela', body: 'Nelson Mandela was a South-African apartheid leader. He lived from 1918-2013.', key: '1' },
      { name: 'Lionel Messi', body: 'Lionel Messi is a soccer forward currently playing for PSG. He is known for his stellar tenure at FC Barcelona. ', key: '2' },
      { name: 'Jeff Bezos', body: 'Jeff Bezos is the founder of Amazon and BlueOrigin. He is worth around 150 billion dollars.', key: '3' },
    ]);
  
    return (
    <View>
      <Text>
        Hi There! click on any of the people below to learn more about them!
      </Text>
      <View> 
      <FlatList
        data={person} 
        render Item={({ item }) => ( 
        <TouchableOpacity onPress={() => navigation.navigate('Screen_B', item)}>
          <Text style={styles.container}>
            { item.name }
          </Text> 
        </TouchableOpacity> 
        )} 
      /> 
      </View>
    </View>
    )
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        align: center,
        padding: 24,
        color: '#000000',
        backgroundColor: '#eaeaea',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default ScreenA;