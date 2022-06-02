import React  from 'react';
import { Text, StyleSheet, View , Button} from 'react-native';
import { useState } from 'react';

const EgStateScreen = () =>
{
    const [colorkanla, setmadovalue] = useState([]);
    console.log(colorkanla)
    return (
        <View>
            <Button
             title='increase' 
             onPress={()=>{
                
                setmadovalue([...colorkanla, randomColorRiseGenerator ()])
             }}
             />
            <Button 
            title='decrease'
            onPress={() => {
                setmadovalue([...colorkanla, randomColorRiseGenerator ()])
            }}
             />
             <View 
             style = {{ height:100, width :370, backgroundColor: randomColorRiseGenerator() }}
             />
        </View>
    );
}

const style= StyleSheet.create({});

const randomColorRiseGenerator = () =>
{
    const red = Math.floor((Math.random() * 254)+1);
    const green = Math.floor((Math.random() * 254)+1);
    const blue = Math.floor ((Math.random() * 254)+1);

    return `rgb(${red},${green},${blue})`
}

const randomColorDecreaseGenerator = () =>
{
    const red = Math.floor((Math.random() * 254)+1);
    const green = Math.floor((Math.random() * 254)+1);
    const blue = Math.floor ((Math.random() * 254)+1);

    return `rgb(${red},${green},${blue})`
}

export default EgStateScreen;