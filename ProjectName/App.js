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
import {Scene, Router, Tabs, Drawer, Lightbox, Modal} from 'react-native-router-flux'
import Msg from './Components/Msg'
import Doc from './Components/Doc'
import Mybox from './Components/Mybox'
import MsgDetails from './Components/MsgDetails'
import ShowMyName from './Components/ShowMyName'
import Home from './Components/Home'
import Login from './Components/Login'
import { Grid, Icon } from '@ant-design/react-native';
import { outlineGlyphMap } from '@ant-design/icons-react-native/lib/outline';


const App = () => {
  return (
      <Router>
        <Modal key="modal" hideNavBar>
              <Lightbox key="lightbox">
                <Drawer
                  key="drawer"
                  contentComponent={()=><Text>drawer</Text>}
                  drawerIcon={()=><Icon name="menu"/>}
                  drawerWidth={400}
                >
                  <Scene key="root">
                    <Tabs key="tabbar" hideNavBar
                      activeTintColor='red'
                      inactiveTintColor='blue'
                    >
                      {/* 首页 */}
                      <Scene 
                        key='home'
                        title="首页"
                        icon={
                          ({focused})=><Icon color={focused?'red':'green'} name="home"/>
                        }
                        component={Home}
                      >
                      </Scene>
                      {/* 消息栏 */}
                      <Scene 
                        key='msg'
                        title="消息"
                        icon={
                          ({focused})=><Icon color={focused?'red':'green'} name="home"/>
                        }
                      >
                        <Scene key='ms' component={Msg}/>
                        <Scene key='msgdetails' hideTabBar component={MsgDetails}/>
                      </Scene>
                      {/* 文档栏 */}
                      <Scene 
                        key='doc'
                        title="文档"
                        icon={
                          ({focused})=><Icon color={focused?'red':'green'} name="file"/>
                        }
                      >
                        <Scene key='docs' component={Doc}/>
                      </Scene>
                    </Tabs>
                  </Scene>
                </Drawer>
                <Scene key="light" component={Mybox}/>
              </Lightbox>
              <Scene key="login" component={Login}/>
              <Scene key="login1" component={ShowMyName}/>
        </Modal>
      </Router>
  );
};
const styles = StyleSheet.create({

})

export default App;
