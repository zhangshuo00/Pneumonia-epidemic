import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput,StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import { Icon } from '@ant-design/react-native'

const {swidth,sheight} = Dimensions.get('window')
const data = ['账户管理','收货地址','我的信息','我的订单','我的二维码','我的积分','我的收藏']
const data1 = ['居家维修保养','出行接送','我的受赠人','我的住宿优惠','我的活动','我的发布']

export default class Personal extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{width:swidth,height:200,justifyContent:'center',alignItems:'center',backgroundColor:'#f23030'}}>
                    <Image style={{width:60,height:60}} resizeMode="cover" source={require('../assets/images/touxiang_03.jpg')}/>
                    <Text style={{color:'white',marginTop:20}}>BINNU DHILLON</Text>
                </View>
                <View style={{marginTop:2,backgroundColor:'white',flexDirection:'row'}}>
                    <Image style={{width:30,height:30,marginLeft:10}} source={require('../assets/images/icon_07.jpg')}/>
                    <Text style={{marginLeft:20,marginTop:5}}>我的个人中心</Text>
                </View>
                <View>
                    <FlatList
                        data={data}
                        numColumns={3}
                        style={{marginTop:3}}
                        renderItem={({item})=>(
                            <View style={{width:'33%',height:100,backgroundColor:'white',alignItems:'center'}}>
                                <Image source={require('../assets/images/icon_07.jpg')}/>
                                <Text>{item}</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={{marginTop:2,backgroundColor:'white',flexDirection:'row'}}>
                    <Image style={{width:30,height:30,marginLeft:10}} source={require('../assets/images/icon_07.jpg')}/>
                    <Text style={{marginLeft:20,marginTop:5}}>E族活动</Text>
                </View>
                <View>
                    <FlatList
                        data={data1}
                        numColumns={3}
                        style={{marginTop:3}}
                        renderItem={({item})=>(
                            <View style={{width:100,height:100,backgroundColor:'white',alignItems:'center',justifyContent:'space-around',flex:1}}>
                                <Image source={require('../assets/images/icon_07.jpg')}/>
                                <Text>{item}</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                    <Text style={{color:'#a4a4a4'}}>BINNU DHILLON</Text>
                    <Text style={{marginLeft:5,marginRight:5,color:'#a4a4a4'}}>|</Text>
                    <Text style={{color:'#a4a4a4'}}>退出</Text>
                </View>
            </ScrollView>
        )
    }
}
