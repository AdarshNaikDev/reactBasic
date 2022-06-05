import React  from 'react';
import { Text, StyleSheet, View , Button, TextInput} from 'react-native';
import { useState } from 'react';

const TextInputScreen = () => {
    const [name, setName] = useState(' ');
    const [password, setPassword] = useState('');


    return(
        <View>
        <Text>
            Welcome, Enter your Name:
        </Text>
    <TextInput 
    style = {styles.text_input}
    autoCapitalize= "none"//very important kind of mandatory prop to avoid auto capitalizing
    autoCorrect = {false}
    value = {name}
    onChangeText = {
        (newvalue)=>{
            setName(newvalue);
    }
}
    />
    <Text>entered name is : {name}
    </Text>
    <Text>
        Enter you Password:
    </Text>
    <TextInput 
    style = { styles.text_input}
    autoCapitalize = "none"
    autoCorrect = {false}
    value = {password}
    onChangeText = {
        (newPassword) =>{
                setPassword(newPassword) 
        }
    }

    />
   
    {/* {false ? <Text>some text</Text> : null} 
    this is a ternery operator written inside jsx element */}
    {(password.length>8) ? null : <Text>Your Password must be greater than 8 digits</Text>}
      
    </View>
    );
}
//one can use to curly braces inside jsx to execute javascript expresstions like if ternery etc
const styles = StyleSheet.create({
    //text_input is an object to decorate the textInput or text box
    text_input: {
            margin: 25,
            borderColor: 'red',
            borderWidth: 2
    }
})

export default TextInputScreen