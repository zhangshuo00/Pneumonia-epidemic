/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  Dimensions,
  BackHandler,
  ToastAndroid
} from 'react-native'
import {Scene, Router} from 'react-native-router-flux'
import Msg from './Components/Msg'
import Doc from './Components/Doc'
import MsgDetails from './Components/MsgDetails'


const App = () => {
  // let flag = false;
  // let now = 0;
  // BackHandler.addEventListener('back',()=>{
  //   console.log(new Date().getTime());
  //   if(new Date().getTime()-now<2000){
  //     BackHandler.exitApp();
  //   }else{
  //     ToastAndroid.show('确定要退出吗',100);
  //     now = new Date().getTime();
  //     return true;
  //   }
  // })
  // const width = Dimensions.get('window').width;
  // console.log(width);
  // px：图片中最小的一个格
  // dpi：每英寸有多少个小格（1px）
  // dp：在安卓开发中用的单位，1dp等于像素密度为160dpi时1px的大小
  // dpi：120   160   240   320   480
  //     0.75   1     1.5   2     3
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
  box1:{
    width:100,
    height:100,
    margin:10,
    borderColor:'red',
    borderWidth:1/1.5
  }
})

export default App;
