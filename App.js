import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import InputBar from './components/InputBar';
import LogoImage from './components/LogoImage';
import UserText from './components/UserText';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      displayedName: ''
    }
  }

  setUserName() {
    const userName = this.state.userName;
    this.setState({ displayedName: userName });
    this.setState({ userName: '' });
  }
  
  render() {
    return (
        <LinearGradient colors={['#ec3b77', '#fc675c']} style={styles.container}>
          <LogoImage />

          <UserText displayedName={this.state.displayedName} />
          
          <InputBar
            userNameChange={userName => this.setState({ userName })}
            setUserName={() => this.setUserName()}
            userName={this.state.userName}
          />
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});