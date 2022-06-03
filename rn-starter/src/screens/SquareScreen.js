import React from 'react';
import { Text, StyleSheet, View , Button} from 'react-native';
import { useState } from 'react';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;
//capital letter decleration referes to global variables
const SquareScreen = () =>
{

    const  [red, setRed] = useState(0);
    const [blue,setBlue] = useState(0);
    const [green,setGreen] = useState(0);
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
                    
                   setRed(red + COLOR_INCREMENT);
                }
            }}
            onDecrease = {()=>{
                if(red+COLOR_INCREMENT < 0)
                {
                    return;
                }
                else
                {
                    
                setRed(red - COLOR_INCREMENT);
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
                    
                setBlue(blue + COLOR_INCREMENT);
                 }
            }}
            onDecrease = {()=>{
                if(blue+COLOR_INCREMENT < 0)
                {
                    return;
                }
                else
                {
                    
                    setBlue(blue - COLOR_INCREMENT);
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
                setGreen(green + COLOR_INCREMENT);
             }
            }}
            onDecrease = {()=>{
                if(green + COLOR_INCREMENT < 0)
                {
                    return;
                }
                else
                {
                
                    setGreen(green - COLOR_INCREMENT);
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

export default SquareScreen;