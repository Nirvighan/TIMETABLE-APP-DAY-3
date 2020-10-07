import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,ScrollView ,KeyboardAvoidingView} from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class ResultScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            monday:"MONDAY",
            tuesday:"TUESDAY",
            wednesday:"WEDNESDAY",
            thursday:"THURSDAY",
            friday:"FRIDAY",
            saturday:"SATURDAY",
            sunday:"SUNDAY"
        }
    }
    render(){
        return(
            <View style = {styles.Container}>
                <Text style = {styles.heading}>As per your information I think this is the best Time-Table for your self study</Text>


                <Text style = {styles.subHeading}>{this.state.monday}</Text>


                <Text style = {styles.subHeading}>{this.state.tuesday}</Text>


                <Text style = {styles.subHeading}>{this.state.wednesday}</Text>


                <Text style = {styles.subHeading}>{this.state.thursday}</Text>


                <Text style = {styles.subHeading}>{this.state.friday}</Text>


                <Text style = {styles.subHeading}>{this.state.saturday}</Text>


                <Text style = {styles.subHeading}>{this.state.sunday}</Text>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        color:'#1A237E',
        backgroundColor:'#FFF176',
        justifyContent:'center'
    },
    heading:{
        fontSize:30,
        color:'#1A237E',
        marginBottom:50
    },
    subHeading:{
        fontSize:25,
        fontWeight:'bold',
        color:'#1A237E',
        marginTop:30
    }
})