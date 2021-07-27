import React, { Component } from 'react'
import {View, } from 'react-native';
import {Home} from './src/page/'
import Navigator from './src/components/navigation';

class App extends Component {
  render(){
    return(
      <View style={{flex: 1}}>
        <Navigator />
        {/* <Home /> */}
      </View>
    )
  }
}


export default App;
