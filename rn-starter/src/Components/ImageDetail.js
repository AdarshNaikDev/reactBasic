import React from 'react';
import { Text, StyleSheet, View , Image } from 'react-native';

const ImageDetail =  props => {
    console.log(props)
    return (
        <View>
            <Image source={props.imageSource}/>
        <Text>{props.imageName}</Text>
        <Text>Image Score = {props.imageScore}</Text>
        </View>
    );
}

const style = StyleSheet.create({});

export default ImageDetail;