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
import {Scene, Router, Tabs} from 'react-native-router-flux'
import Msg from './Components/Msg'
import Doc from './Components/Doc'
import MsgDetails from './Components/MsgDetails'


const App = () => {
  return (
      <Router>
        <Scene key="root">
          <Tabs key="tabbar" hideNavBar
            activeTintColor='red'
            inactiveTintColor='blue'
          >
            {/* 消息栏 */}
            <Scene 
              key='msg'
              title="消息"
            >
              <Scene key='ms' component={Msg}/>
              <Scene key='msgdetails' hideTabBar component={MsgDetails}/>
            </Scene>
            {/* 文档栏 */}
            <Scene 
              key='doc'
              title="文档"
            >
              <Scene key='docs' component={Doc}/>
            </Scene>
          </Tabs>
        </Scene>
      </Router>
  );
};
const styles = StyleSheet.create({

})

export default App;
