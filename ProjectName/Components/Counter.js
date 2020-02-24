// import React, { Component } from 'react'
// import { Text, View, TouchableWithoutFeedback, Button } from 'react-native'

// export default class Counter extends Component {
//     constructor(){
//         super();
//         this.state = {
//             num : 0,
//         }
//     }
//     press = ()=>{
//         // let i = this.state.num;
//         // i++;
//         this.setState((state)=>{
//             return {
//                 num : ++state.num
//             }
//         })
//     }
//     render() {
//         return (
//             <View>
//                 <Text>{this.state.num}</Text>
//                 <Button title="aaa" onPress={this.press}/>
//             </View>
//         )
//     }
// }
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

const Counter = () => {
    const [num, setNum] = useState(0);
        return (
            <View>
                <Text>{num}</Text>
                <Button title="aaa" onPress={()=>{setNum(num+1)}}/>
            </View>
        )
}
export default Counter;
