/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native'
import {Scene, Router} from 'react-native-router-flux'
import Msg from './Components/Msg'
import Doc from './Components/Doc'
import MsgDetails from './Components/MsgDetails'


const App = () => {
  return (
      <Router>
        <Scene key="root">
          <Scene 
            key="msg"
            title="消息"
            titleStyle={{flex:1,textAlign:'center'}}
            component={Msg} 
          />
          <Scene 
            key="msgdetails"
            title="消息详情页"
            backButtonImage={require('./assets/客户公海.png')}
            component={MsgDetails}
          />
          <Scene 
            key="doc" 
            title="文档" 
            titleStyle={{flex:1,textAlign:'center'}} 
            renderRightButton={<View></View>} 
            component={Doc}
          />
        </Scene>
      </Router>
  );
};
const styles = StyleSheet.create({

})

export default App;
