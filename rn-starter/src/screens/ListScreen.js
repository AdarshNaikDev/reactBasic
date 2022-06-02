import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {

    const friends = [
        {name : "Adarsh", age: '29'}, // key error can be resolved by adding an extra property inside each object and giving it a unique string
        // like this {name : "Atal", age: '52' , id:01}
        {name : "Manoj", age: '22'},
        {name : "Bharath", age: '10'},
        {name : "Prasad",age: '20'},
        {name : "Divaker",age: '20'},
        {name : "Raghu",age: '26'},
        {name : "Akash",age: '20'},
        {name : "Sharath",age: '20'},
        {name : "Rakshith",age: '20'},
        {name : "Abhishek",age: '26'},
        {name : "Vardhan",age: '26'},
        {name : "Sunil",age: '50'}
        
    ];
    return (
        <FlatList //key error can be eliminated by adding keyextractor prop
        keyExtractor={(friend) => friend.name}
        data= {friends}//data is a prop
        renderItem = {({item}) => {
            return <Text style = {styles.text}>{item.name} - {item.age}</Text> ;
                
            
            
        }}
        //element == {item:{name: 'data'}, index: 0} instead of mentioning element we can just use curly brackets to access the data from item only
        /> 
    );

}

const styles = StyleSheet.create({
    text : {
        fontSize : 20,
        marginVertical : 30
    } 
});

export default ListScreen;