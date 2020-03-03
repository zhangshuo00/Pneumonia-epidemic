import React, { Component } from 'react'
import { Text, View, ScrollView,StyleSheet, Dimensions, FlatList } from 'react-native'
import Button from 'react-native-button'
import {MessageBarManager} from 'react-native-message-bar'

const {width} = Dimensions.get('window')

export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=0;i<10;i++){
            data.push({tit:i,key:i})
        }
        this.state = {
            data
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                {/* <ScrollView horizontal={true} pagingEnabled={true}>
                    <View style={styles.slide}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>3</Text>
                    </View>
                </ScrollView> */}
                {/* horizontal:实现水平滚动 */}
                {/* numColumns:实现分栏布局 */}
                <FlatList
                    ListHeaderComponent={<Button onPress={()=>{
                        MessageBarManager.showAlert({
                            title:'提示标题',
                            message:'具体信息',
                            alertType: 'info',
                            stylesheetInfo:{backgroundColor:'blue'}
                        })
                    }} style={styles.btn}>头部</Button>}
                    ListFooterComponent={<Button>尾部</Button>}
                    numColumns={2}
                    data={this.state.data}
                    renderItem={
                        ({item})=><View style={styles.slide}>
                            <Text>{item.tit}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    slide:{
        width:width*0.4,
        height:200,
        marginLeft:25,
        marginTop:10,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:80,
        height:40,
        backgroundColor:'red',
        borderRadius:20,
        textAlignVertical:'center'
    }
})
