import React from 'react';
import { Text, StyleSheet, View , Button} from 'react-native';
import { useReducer } from 'react';
import ColorCounter from '../Components/ColorCounterReducer';

const COLOR_INCREMENT = 15;
//capital letter decleration referes to global variables
//paramter state represents the initial value of useReducer 
//action is nothing but a function used to change the state 
const reducer = (state, action) =>
{
    //state === {red: number , green: number , blue: number}
    //action == {colorToChange:'red' || 'green'|| 'blue', amount :15 || -15}
    switch(action.colorToChange)
    {
        case 'red':
            return{
                ...state, red:state.red + action.amount
            };
        case 'green':
            return{
                ...state, green: state.green + action.amount
            };
        case 'blue':
            return{
                ...state, blue: state.blue + action.amount
            };
        default : 
            return state;
            
    }
}
const SquareScreenReducer = () =>
{
    //the below step is to initialize the state as the shown object in the argument of func useReducer

    const [state, dispatch] = useReducer(reducer, {red:0,green:0, blue:0});
    const {red,green,blue} = state;
    //console.log(state) // {red:0, green:0, blue:0}

    console.log("red"+red);
    console.log(`green ${green}`);
    console.log("blue" + blue);

    return(
//the plan is too use to function as a callback function from the component 
//here onIncrease and onDecrease will increase or decrease the color propery using set functions which is provided by usestate
        <View>
{/*             
            <ColorCounter color='red'  button_increase='Increase Red' button_decrease = 'Decrease Red'/>
            <ColorCounter color='blue'  button_increase='Increase Blue' button_decrease= 'Decrease Blue' />
            <ColorCounter color = ' green' button_increase='Increase Green' button_decrease='Decrease Green' /> 
            this was my method little complex but doable*/}

            
            <ColorCounter 
            onIncrease = {()=>{
                if(red+COLOR_INCREMENT > 255 )
                {
                    return;
                }
                else
                {
                  dispatch({ colorToChange:'red' , amount: COLOR_INCREMENT })  
                  
                }
            }}
            onDecrease = {()=>{
                if(red+COLOR_INCREMENT < 0)
                {
                    return;
                }
                else
                {
                    dispatch({colorToChange:'red', amount: -1 * COLOR_INCREMENT})
                
                }
            }}
             color='red'  />

            <ColorCounter 
             onIncrease = {()=>{
                 if(blue + COLOR_INCREMENT >255)
                 {
                    return;
                 }
                 else
                 {
                    dispatch({colorToChange:'blue', amount: COLOR_INCREMENT})
                
                 }
            }}
            onDecrease = {()=>{
                if(blue+COLOR_INCREMENT < 0)
                {
                    return;
                }
                else
                {
                    dispatch({colorToChange:'blue',amount: -1 *COLOR_INCREMENT})
                }
              
            }}
            color='blue'   />

            <ColorCounter
             onIncrease = {()=>{
                 if(green + COLOR_INCREMENT > 255)
                 {
                     return;
                 }
                 else
                 {
                    dispatch({colorToChange:'green' , amount: COLOR_INCREMENT})
                 }
            }}
            onDecrease = {()=>{
                if(green + COLOR_INCREMENT < 0)
                {
                    return;
                }
                else
                {
                
                    dispatch({colorToChange:'green', amount: -1 *COLOR_INCREMENT})    
                }
            }}
            color = ' green' />
        <View 
                style = {{ height:150, width :150, backgroundColor: `rgb(${red},${green},${blue})` }}
            />

        </View>
    );
}

const style = StyleSheet.create({})

export default SquareScreenReducer;