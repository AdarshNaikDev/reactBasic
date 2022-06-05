//Hook is a function which adds extra functionality to it's function
import React  from 'react';
import { Text, StyleSheet, View , Button} from 'react-native';
import { useReducer } from 'react';

const COUNTER_VALUE = 1;
const reducer = (state , action) => {
//state === {counter: 0}
//action === {changeCounter: counter   amount :1 or -1}
switch(action.changeCounter)
{
    case 'counter':
        return{
            ...state , counter: state.counter + action.amount
        }
   
    default :
        return state;

}
}

const CounterScreenReducer  = () =>{

    const [state, dispatch] = useReducer(reducer, {counter : 0});
    const {counter} = state;
    return (
        <View>
            <Button
             title='increase' 
             onPress={()=>{
                dispatch({changeCounter:'counter' , amount: COUNTER_VALUE})
             }}
             />
            <Button 
            title='decrease'
            onPress={() => {
                dispatch({changeCounter:'counter', amount:-1 * COUNTER_VALUE})
            }}
             />
             <Text>Counter value from reducer is : {counter}</Text>
        </View>
    );
}

const style = StyleSheet.create({});

export default CounterScreenReducer;