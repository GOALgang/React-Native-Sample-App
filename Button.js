import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableHighlight, Text, TextInput, View, FlatList, TouchableOpacity} from 'react-native';
const Stack = createNativeStackNavigator();

const Button = ({ label, style, onPress, setDesc, navigation }) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, style, {fontFamily: 'Signika-VariableFont.wght'}]} onPress= {onPress}>
            <Text style={styles.textDesign}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    textDesign: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },
    buttonContainer: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderRadius: 50,
        width: '45%',
        marginLeft: 90,
        margin: 15,
        backgroundColor: "#000000",
        color: "#20232a",
        align: "center",
        fontSize: 30,
        fontWeight: 'bold',
    },
})

export default Button;