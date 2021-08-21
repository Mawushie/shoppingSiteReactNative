import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToCart from './src/screens/AddToCart';
import OnlineShopping from './src/screens/OnlineShopping';
import PaymentSuccessful from './src/screens/PaymentSuccessful';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Online Shopping' component = {OnlineShopping} />
        <Stack.Screen name = 'Add to Cart' component = {AddToCart} />
        <Stack.Screen name = 'Payment Successful' component = {PaymentSuccessful} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
