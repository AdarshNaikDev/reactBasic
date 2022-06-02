import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {

  return (
    <View>
    <Text style = {styles.text}>Welcome to Component Screen</Text>
    <Text style = {styles.subheading}> Make your dreams come true from react native</Text>
    </View>
  );
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  subheading:{
    fontSize: 20
  }
});

export default ComponentScreen;
