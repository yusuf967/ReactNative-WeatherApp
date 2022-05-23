import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth';


import Login from '../pages/auth/Login';
import Sign from '../pages/auth/Sign';
import Search from '../pages/Search/Search';
import Details from '../pages/Details/Details';


const Stack = createNativeStackNavigator();
const user = auth().currentUser;


export default () => {
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
        <Stack.Screen name="SearchPage" component={Search} />
        <Stack.Screen name="DetailsPage" component={Details} />
      </Stack.Navigator>
    );
  }
  const IndexStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SearchPage" component={Search} />
        <Stack.Screen name="DetailsPage" component={Details} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />

      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          !user
            ? <Stack.Screen name="AuthStack" component={AuthStack} />
            : <Stack.Screen name="IndexStack" component={IndexStack} />
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
