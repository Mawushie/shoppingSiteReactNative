import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToCart from './src/screens/AddToCart';
import OnlineShopping from './src/screens/OnlineShopping';
import PaymentSuccessful from './src/screens/PaymentSuccessful';


export default function App() {
  return (
    <View style={styles.container}>
        {/* <AddToCart /> */}
        {/* <OnlineShopping /> */}
        <PaymentSuccessful />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
