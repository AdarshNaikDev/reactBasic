import React, {useState}   from "react";
import {Text,View,Button,StyleSheet, FlatList} from 'react-native';


const ColorScreen = () =>
{
    const [ranColor, setColors] = useState([]); 
    console.log(ranColor);
    //style is a object inside which height width backgroundColor are readily available properties r
    return (
        <View>
        <Text>Hi from Color Screen</Text>
        <Button 
        title="Add a color" 
        
        onPress = { () => {
            setColors([...ranColor, randomColorGenerator ()])
            
        }}
        />
        
        <FlatList 
          keyExtractor={item => item}
          data= {ranColor}//data is a prop
          renderItem = {({item}) => {
            return (  
            <View 
                style = {{ height:100, width :370, backgroundColor: item }}
            />
            );
                
             }}

        
        />
        </View>
    );
}
//use of spread operator is to copy an array completetly here rancolor array was [] it was copied and then set a random color by calling 
// randomColorGenerator function

const style = StyleSheet.create({});

//function to generate random colors

const randomColorGenerator = () =>
{
    const red = Math.floor((Math.random() * 254)+1);
    const green = Math.floor((Math.random() * 254)+1);
    const blue = Math.floor ((Math.random() * 254)+1);

    return `rgb(${red},${green},${blue})`
}

export default ColorScreen;