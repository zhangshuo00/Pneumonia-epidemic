import React, { Component } from 'react'
import { Text, View, AsyncStorage, Button } from 'react-native'

export default class LocalStorage extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    getData = ()=>{
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }

    render() {
        return (
            <View>
                <Button title="获取" onPress={this.getData}/>
                <View>
                {
                    this.state.data.map((item)=>{
                        <Text>{item.title}</Text>
                    })
                }
                </View>
                
            </View>
        )
    }
}
