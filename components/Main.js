import {View,Text,Image} from 'react-native';
import React,{Component} from 'react';


export default class Main extends  Component{
    static navigationOptions ={
        header:null
    }
    constructor() {
        super()
        this.state = {
            showMe: true
        }
    }
    render(){
        return(

            <View style={{
                backgroundColor:'#F8F8F8',
                flex:1,
                alignItems:'center',
                justifyContent:'center'}}>
                <Text style={{fontSize:30
                    }}>welcome main screen</Text>
            </View>
        )
    }
};

