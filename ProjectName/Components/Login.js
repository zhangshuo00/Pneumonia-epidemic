import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
                <View
                style={{ alignItems: 'center'}}>
                <View
                    style={{
                    width: '80%',
                    marginRight: 10,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 20,
                    }}>
                    <Icon name="user" color="red"/>
                    <TextInput placeholder="搜索" />
                </View>
                <View
                    style={{
                    width: '80%',
                    marginRight: 10,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 20,
                    }}>
                    <Icon name="user" color="red"/>
                    <TextInput placeholder="搜索" />
                </View>
                    <TouchableOpacity 
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={Actions.pop}>
                        <Text>登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
