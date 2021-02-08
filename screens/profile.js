import * as React from 'react'
import {Text, TextInput,TouchableOpacity,View} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import {Avatar} from 'react-native-elements'

export default class Profile extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            monthlySalary:'',
            limitOfExpenditure:'',
            amountOnWhichNotificationBeSent:'',
            messageOnNotification:'',
            image:'#',
            email:firebase.auth().currentUser.email
        }
    }
    render(){
        return(
            <View>
                <TextInput
                  placeholder='Name'
                  onChangeText={(info)=>{
                      this.setState({
                          name:info
                      })
                  }}
                ></TextInput>

                <TextInput
                  placeholder='Monthly Salary'
                  onChangeText={(info)=>{
                      this.setState({
                          monthlySalary:info
                      })
                  }}
                ></TextInput>

                <TextInput
                  placeholder='Limit of Expenditure'
                  onChangeText={(info)=>{
                      this.setState({
                          limitOfExpenditure:info
                      })
                  }}
                ></TextInput>

                <TextInput
                  placeholder='Amount on which notification must be sent'
                  onChangeText={(info)=>{
                      this.setState({
                          amountOnWhichNotificationBeSent:info
                      })
                  }}
                ></TextInput>

                <TextInput
                  placeholder='Message on Notification'
                  onChangeText={(info)=>{
                      this.setState({
                          messageOnNotification:info
                      })
                  }}
                ></TextInput>

                <TouchableOpacity>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
    componentDidMount(){
        this.fetchImage()
        this.getUserData()
    }

    fetchImage=()=>{
        var reference = firebase.storage().ref().child('userProfile/'+this.state.email)
        reference.getDownloadURL()
        .then((uri)=>{
            this.setState({
                image:uri
            })
        })
        .catch((error)=>{
            this.setState({
                image:'#'
            })
        })
    }

   /* getUserData=()=>{
        db
        .collection()
    }*/
}