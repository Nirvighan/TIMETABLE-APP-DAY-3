import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,ScrollView ,KeyboardAvoidingView} from 'react-native';
import db from '../Config';
import firebase from 'firebase';


export default class QuestionnaireScreen extends React.Component{
    constructor(){
        super();
        this.state = {
          yourStudyTime:'',
          studyTimeInhours:'',
          subjectsYouStudy:'',
          Maths:'',
          Science:'',
          Hindi:'',
          English:'',
          SST:'',
          Computer:'',
          language:''
        }
    }

    AddInformation = () =>{
           db.collection("Questionnaire").add({
               "Study_time":this.state.yourStudyTime,
               "Study_Time_in_hours":this.state.studyTimeInhours,
               "Number_of_Subjects":this.state.subjectsYouStudy,
               "Maths_rate":this.state.Maths,
               "Science_rate":this.state.Science,
               "SST_rate":this.state.SST,
               "Language_rate":this.state.language,
               "English_rate":this.state.English,
               "Hindi_rate":this.state.Hindi,
               "Computer_rate":this.state.Computer
           })
           return Alert.alert("Information Added");
    }


    render(){
        return(
            <View style = {styles.container}>
            <View style = {styles.headingContainer}>
                <Text style = {styles.heading}>Tell us something about your studies</Text>
                
            </View>
            <View style = {styles.textboxContainer}>
                <TextInput
                style = {styles.inputBox}
                  placeholder = " Your Study Time"
                  onChangeText = {(text)=>{
                      this.setState({
                          yourStudyTime:text
                      })
                  }}
                />

<TextInput
style = {styles.inputBox}
                  placeholder = " Your Study Time In Hours"
                  keyboardType = {'numbers-and-punctuation'}
                  onChangeText = {(text)=>{
                      this.setState({
                          studyTimeInhours:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Total Subjects you study"
                  style = {styles.inputBox}
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{
                      this.setState({
                         subjectsYouStudy:text
                      })
                  }}
                />

<TextInput
                  placeholder = "How are you at maths weak/normal/great"
                  style = {styles.inputBox}
                  
                  onChangeText = {(text)=>{
                      this.setState({
                          Maths:text
                      })
                  }}
                />

<TextInput
                  placeholder = "How are you at science weak/normal/great"
                  style = {styles.inputBox}
                  
                  onChangeText = {(text)=>{
                      this.setState({
                          Science:text
                      })
                  }}
                />


<TextInput
                  placeholder = "How are you at english weak/normal/great"
                  style = {styles.inputBox}
                  
                  onChangeText = {(text)=>{
                      this.setState({
                          English:text
                      })
                  }}
                />


<TextInput
                  placeholder = "How are you at hindi weak/normal/great"
                  style = {styles.inputBox}
                  
                  onChangeText = {(text)=>{
                      this.setState({
                          Hindi:text
                      })
                  }}
                />


<TextInput
                  placeholder = "How are you at Computer weak/normal/great"
                  style = {styles.inputBox}
                  
                  onChangeText = {(text)=>{
                      this.setState({
                          Computer:text
                      })
                  }}
                />

<TextInput
                  placeholder = "How are you at SST weak/normal/great"
                  style = {styles.inputBox}
                  
                  onChangeText = {(text)=>{
                      this.setState({
                          SST:text
                      })
                  }}
                />

<TextInput
                  placeholder = "How are you at language weak/normal/great"
                  style = {styles.inputBox}
                  
                  onChangeText = {(text)=>{
                      this.setState({
                          language:text
                      })
                  }}
                />


                </View>
                <View style = {styles.buttonContainer}>
                   <TouchableOpacity
                   style = {styles.button}
                    onPress = {()=>{
                        this.AddInformation();
                        this.props.navigation.navigate("Result")
                    }} 
                    
                   >
                     <Text style = {styles.buttontext}>SUBMIT</Text>
                   </TouchableOpacity>

                   <TouchableOpacity
                     style = {styles.button}
                   >
                     <Text style = {styles.buttontext}>CANCEL</Text>
                   </TouchableOpacity>
                </View>

            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#FFF176',
        justifyContent:'center',
        flex:1,
        width:'100%',
        height:"100%"
    },
    headingContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        fontSize:25,
        color:'#1A237E',
        marginTop:10,
        fontWeight:'bold'
    },
    textboxContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox:{
        width:300,
        height:40,
        marginTop:15,
        borderColor:'#1A237E',
        borderWidth:1.5,
        fontSize:15,
        alignSelf:'center',
        color:'#1A237E'
    },
     buttonContainer:{
        alignItems:'center',
        justifyContent:'center'
     },
     buttonText:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:15,
        color:'#FFF176'
    },
    button:{
        alignItems:'center',
        alignSelf:'center',
        marginTop:25,
        width:250,
        height:50,
        backgroundColor:'#1A237E',
        justifyContent:'center',
        borderRadius:20,
        borderColor:'#1A237E'
    },
})