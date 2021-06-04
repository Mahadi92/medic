import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './src/Component/Slider/Slider.js'

const App =()=>{
  return (
    // <View style={styles.container}>
    //   <Text>yoyoyoyoyoyooyoyooyo</Text>
    //   <StatusBar style="auto" />
     
    // </View>
    <Slider/>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
