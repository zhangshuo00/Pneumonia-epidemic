/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import ShowMyName from './Components/ShowMyName'
import Counter from './Components/Counter'
import ImageBack from './Components/ImageBack'

const App = () => {
  const [num, setNum] = useState('121');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>

          {/* flex布局 */}
          {/* 在rn中，view默认设置了flex属性， */}
          <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <View style={styles.search}>
              <Image style={{marginLeft:5,marginTop:5}} source={require('./assets/客户公海.png')}/>
              <TextInput placeholder="搜索"/>
            </View>
            <TouchableOpacity style={{
                width:40,
                height:40,
                backgroundColor:'#ADD8E6',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:20,
                marginLeft:10,
                marginTop:20
              }}>
              <Text>+</Text>  
            </TouchableOpacity>
          </View>
          
        </ScrollView>
        {/* 受控组件 */}
        {/* <Text>{num}</Text>
        <TextInput
          onChangeText={(val)=>{setNum(val)}}
          style={{
            borderColor:'black',
            borderWidth:1,
            borderRadius:10,
          }}
        /> */}
        {/* <ImageBackground style={{width:300,height:300}} source={require('./cake.jpg')}>
          <View style={styles.box}></View>
          <Text style={[styles.txt]}>hello,world</Text>
        </ImageBackground> */}
        {/* 自定义背景图组件 */}
        {/* <ImageBack style={{width:300,height:300}} source={require('./cake.jpg')}>
          <View style={styles.box}></View>
          <Text style={[styles.txt]}>hello,world</Text>
        </ImageBack> */}
        {/* <View style={styles.box}>
          <Text style={styles.txt}>
            <Text>inner1</Text>
            <Text>inner2</Text>
          </Text>
        </View>
        <View>
          <Image resizeMode="cover" source={require('./assets/客户公海.png')}/>
        </View> */}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  box:{
    width:100,
    height:100,
    marginBottom:10,
    backgroundColor:'yellow'
  },
  txt:{
    fontSize:20,
    color:'white'
  },
  input:{
    width:200,height:40,borderColor:'black',borderWidth:0.5,borderRadius:10
  },
  search:{
    flexDirection:'row',borderColor:'black',borderWidth:1,borderRadius:20,
    width:250,
    height:50,
    marginLeft:10,
    marginTop:20
  }
})

export default App;
