import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import { Grid, Icon } from '@ant-design/react-native';
import Prodescrip from './Components/Prodescrip'


const App = () => {
  return (
    <ScrollView style={{backgroundColor:'#f4f4f4'}}>
      <View style={{marginTop:10,justifyContent:'center',flexDirection:'row',flexWrap:'wrap'}}>
        <TextInput placeholder="请输入商品名称" style={styles.search}/>
        <Icon style={{position:'absolute',right:50,top:8}} name="search"/>
      </View>
      <View style={{marginTop:15,justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap'}}>
        <Text style={{color:'red'}}>综合</Text>
        <Text>销量</Text>
        <Text>新品</Text>
        <Text>价格</Text>
        <Text>信用</Text>
      </View>
      <Prodescrip/>
      <Prodescrip/>
      <Prodescrip/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  search:{
    width:'85%',
    height:40,
    backgroundColor:'#eeeeee',
    borderRadius:10,
  },
  box:{
    width:'45%',
    backgroundColor:'white'
  },
  descrip:{
    marginLeft:5,
    color:'#666666'
  },
  price:{
    marginTop:5,
    marginLeft:10,
    color:'#f23030'
  }
});

export default App;
