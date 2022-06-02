//Hook is a function which adds extra functionality to it's function
import React  from 'react';
import { Text, StyleSheet, View , Button} from 'react-native';
import { useState } from 'react';

const CounterScreen  = () =>{
    //In react native on change of variable value it will not discover it magically and change it's state on screen rather you should 
    // do by yourself
    //first step is to set a default value for a state changing variable using useState function
    const [counter, setmadovalue] = useState(0);//this line initiates the counter variable as 0
    //in the above line counter is declared as zero using useState to manage state
    //counter is the name of the variable
    //setmadovalue is a function which is used to change the value of counter
    //it is a syntax of array distructuring in array
    //simple eg: colors = ['red','pink','yellow']
    // const [ one, two ] = colors
    //console.log(one) // red will be printed
    return (
        <View>
            <Button
             title='increase' 
             onPress={()=>{
                setmadovalue(counter+1)
             }}
             />
            <Button 
            title='decrease'
            onPress={() => {
                setmadovalue(counter - 1)
            }}
             />
             <Text>Counter value is : {counter}</Text>
        </View>
    );
}

const style = StyleSheet.create({});

export default CounterScreen;