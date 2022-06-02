import React from 'react';
import { Text, StyleSheet, View , } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen =  () => {
    return <View>
        <ImageDetail imageName = "forest" imageSource = {require('../../assets/forest.jpg')} imageScore = "10"/>
        <ImageDetail imageName = "Mountain" imageSource = {require ('../../assets/mountain.jpg')} imageScore = "07"/>
        <ImageDetail imageName = " Beach " imageSource = {require('../../assets/beach.jpg')} imageScore= "09"/>
    </View>
}

const style = StyleSheet.create({});

export default ImageScreen;