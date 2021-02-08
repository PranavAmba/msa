import * as React from 'react'
import {StyleSheet , Text ,View ,TextInput ,TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native'
import db from '../config'
import firebase from 'firebase'


export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
        }
    }
    render(){
        return(
            <View>
                <TextInput
                placeholder='Email'
                onChangeText={(info)=>{this.setState({email:info})}}
                ></TextInput>
                <TextInput
                placeholder="Password"
                onChangeText={(info)=>{this.setState({password:info})}}
                ></TextInput>
                <TouchableOpacity onPress={()=>{
                   this.loginFunction()
                    }}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('SignUp')
                }}>
                    <Text>Signup</Text>
                </TouchableOpacity>
            </View>
        )
    }
    loginFunction =async ()=>{
        if (this.state.email&&this.state.password){
            try{
                const response = await firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email,this.state.password)
                if(response){
                    this.props.navigation.navigate('Profile')
                }
                
            }
            catch(errorResponse){
                switch(errorResponse.code){
                    case 'auth/user-not-found':Alert.alert('User does not exist');break
                    case 'auth/invalid-email':Alert.alert('Incorrect email or password');break
                    default:Alert.alert('Error:Something went wrong. Please try again');break
                }
            }
        }
        else{
            Alert.alert("Please enter email and password")
        }
    }
}