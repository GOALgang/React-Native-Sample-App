import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableHighlight, Text, TextInput, View, FlatList, TouchableOpacity} from 'react-native';
import Button from './Button';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';


const Stack = createNativeStackNavigator();


const appNav = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign: "center"
      }}>
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