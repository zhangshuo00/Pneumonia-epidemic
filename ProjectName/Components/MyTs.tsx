import React, { Component } from 'react'
import { Text, View } from 'react-native'

let num: number = 100;
let arr: string[] = ['aaa','bbb'];
let obj: object = {name:'zhangsan'};
enum Lev {one,two,three}

//接口
interface Course{
    title:string,
    intro:string,
    num?:number
}
interface User{
    name:string,
    age:number,
    pwd:string
}

class User1 implements User{
    name='zhangsan';
    age=20;
    pwd='zhangsan';
}
console.log(new User1())
// 接口继承类
interface User2 extends User1{
    work:string,
}

export default class MyTs extends Component {
    render() {
        return (
            <View>
                <Text> {arr} </Text>
            </View>
        )
    }
}
