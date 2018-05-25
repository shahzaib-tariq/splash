import {View,Text,Image} from 'react-native';
import React,{Component} from 'react';


export default class Splash extends  Component{
    static navigationOptions ={
        header:null
    }
    componentWillMount() {
        setInterval(()=>{
            this.props.navigation.navigate('main')
        },1000)
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
                backgroundColor:'red',
                flex:1,alignItems:'center',
                justifyContent:'center'}}>
                <Text style={{ fontSize:30
                }}>welcome splash screen</Text>
            </View>
        )
    }
};

