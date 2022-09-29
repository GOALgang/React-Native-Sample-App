import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableHighlight, Text, TextInput, View, FlatList, TouchableOpacity} from 'react-native';
import Button from './Button';

const Stack = createNativeStackNavigator();


const ScreenB = ({ route, navigation }) => {
    return (
        <View style={styles.initialContainer}>
            <Text style={[{fontFamily: 'BungeeSpice-Regular'}, styles.firstText]}>{ route.params.desc }</Text>
        </View>
    )
  }


  const styles = StyleSheet.create ({
    textDesign: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    buttonContainer: {
        margin: 30,
        paddingHorizontal: 7,
        paddingVertical: 8,
        borderWidth: 6,
        borderRadius: 100,
        borderColor: '#FFFDD0',
    },
    firstText: {
        marginTop: 20,
        margin: 15,
        marginBottom: 15,
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
})

export default ScreenB;