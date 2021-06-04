import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './src/Component/Slider/Slider.js'
import Categorey from './src/Component/Catagorey/Catagorey.js'

const App =()=>{
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20,fontWeight: "bold"}}>Medeic</Text>
      <StatusBar style="auto" />
     <Slider/>
     <Categorey/>
    </View>
    
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
});
