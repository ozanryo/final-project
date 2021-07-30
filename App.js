import React, { Component } from 'react'
import {View, } from 'react-native';
import {OrderCompletion} from './src/page/'
import Navigator from './src/components/navigation';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './src/reducer'

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <Provider store={createStore(allReducers)}>
        <View style={{flex: 1}}>
          <Navigator />
          {/* <OrderCompletion /> */}
        </View>
      </Provider>
    )
  }
}


export default App;
