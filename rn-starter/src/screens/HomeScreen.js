import React from 'react';
import { Text, StyleSheet, View , Button, Touchable, TouchableOpacity} from 'react-native';
//title is a prop for button element in react
const HomeScreen = (props) => {
  
  const yourname = 'Adarsh Naik'
  return (
    <View>
    <Text style = {styles.text}>Getting started with react native</Text>
    <Text style = {styles.subheading}>My name is {yourname}</Text>
   
    <Button 
    
    title='Go To Components screen'
    onPress = {() => props.navigation.navigate('Component')}

    /> 
    <Button 
    
    title='Go To List screen'
    onPress = {() => props.navigation.navigate('List')}

    /> 

<Button 
    
    title='Go To Image screen'
    onPress = {() => props.navigation.navigate('Image')}

    /> 

    
<Button 
    
    title='Go To Counter app'
    onPress = {() => props.navigation.navigate('Counter')}

    /> 

<Button 
    
    title='Go To Color app'
    onPress = {() => props.navigation.navigate('Color')}

/>

<Button 
    
    title='Go To Example screen'
    onPress = {() => props.navigation.navigate('EgState')}

/>

<Button 
    
    title='Go To Square state changing screen'
    onPress = {() => props.navigation.navigate('Square')}

/>

<Button 
    
    title='Go To Square state changing screen (Reducer)'
    onPress = {() => props.navigation.navigate('Square')}

/>

<Button 
    
    title='Counter app using Reducer'
    onPress = {() => props.navigation.navigate('CounterReducer')}

/>


<Button 
    
    title='Text Input screen'
    onPress = {() => props.navigation.navigate('TextInput')}

/>
    
    {/* <TouchableOpacity onPress = { () => props.navigation.navigate('List')}>
      
      <Text>Go to List Screen</Text> a button with more features can be created using touchableopacity
    </TouchableOpacity> */} 
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

export default HomeScreen;
