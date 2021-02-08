import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Login from './screens/login'
import SignUp from './screens/signup'
import Profile from './screens/profile'

export default class App extends React.Component {
  render(){
    return (
    <View style={styles.container}>
      <AppContainer></AppContainer>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SwitchNavigator = createSwitchNavigator({
  Login:Login,
  SignUp:SignUp,
  Profile:Profile
})

const AppContainer = createAppContainer(SwitchNavigator)
