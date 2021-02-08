import * as React from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import db from '../config.js'
import firebase from 'firebase'

export default class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            name:'',
            comfirmPassword:'',
        }
    }
    render(){
       return(
           <View>
               <Text>Sign Up</Text>
                        <TextInput placeholder='Name' onChangeText={(info)=>{
                          this.setState({
                            name:info
                          })
                         }}></TextInput>

                        <TextInput placeholder='Email ID' onChangeText={(info)=>{
                          this.setState({
                            email:info
                          })
                         }}></TextInput>

                        <TextInput placeholder='Password' onChangeText={(info)=>{
                          this.setState({
                            password:info
                          })
                         }}></TextInput>

                        <TextInput placeholder='Confirm Password' onChangeText={(info)=>{
                          this.setState({
                            confirmPassword:info
                          })
                         }}></TextInput>

                         <TouchableOpacity onPress={this.signUp} style={styles.button}>
                             <Text>Sign Up</Text>
                         </TouchableOpacity>

                         <TouchableOpacity onPress={()=>{
                           this.props.navigation.navigate('Login')
                         }} style={styles.button}>
                           <Text>
                             Go to login screen
                           </Text>
                         </TouchableOpacity>
           </View>
       )
    }

    signUp=async ()=>{
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((response)=>{
           db
           .collection('users')
           .add({
            name:this.state.firstName,
            email:this.state.email,
           })
        })
        .catch((error)=>{
           var code = error.code
           var message = error.message
           Alert.alert(code+' : '+message)
        })
     }
}
const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:"center"
  },
  modalContainer:{ 
      flex:1,
      //borderRadius:20,
      justifyContent:'center', 
      alignItems:'center', 
      backgroundColor:"green", 
      marginRight:30, 
      marginLeft : 30, 
      marginTop:10, 
      marginBottom:10,
  },
  button:{
      width:100, 
      height:50, 
      justifyContent:'center', 
      alignItems:'center', 
      borderRadius:10, 
      backgroundColor:"#ff5722", 
      shadowColor: "#000", 
      shadowOffset: { width: 0, height: 8, }, 
      shadowOpacity: 0.44, 
      shadowRadius: 10.32, 
      elevation: 16, 
      marginTop:20 
  },
  input:{
     marginTop:50,
     borderColor:'white'
  },    
  formTextInput:{ 
      width:"75%", 
      height:35, 
      alignSelf:'center', 
      borderColor:'#ffab91', 
      borderRadius:10, 
      borderWidth:1, 
      marginTop:20, 
      padding:10, 
  }, 
})