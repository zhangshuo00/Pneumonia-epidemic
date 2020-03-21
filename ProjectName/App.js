/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {Scene, Router, Tabs } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native';
import ListSort from './Components/ListSort'
import Service from './Components/Service';
import Center from './Components/Center';

console.disableYellowBox = true;


const App = () => {
	useEffect(() => {
		SplashScreen.hide()
	}, [])
	return (
		<Router>
			<Scene hideNavBar headerMode="none" key="root">
				<Tabs>
					<Scene
						key="home"
						component={Service}
						title="首页"
						icon={
							({focused})=><Icon color={focused?'red':''} name="home"/>
						}
					/>
					<Scene
						key="sort"
						component={ListSort}
						title="分类"
						icon={
							({focused})=><Icon color={focused?'red':''} name="file"/>
						}
					/>
					<Scene
						key="personal"
						component={Center}
						title="个人中心"
						icon={
							({focused})=><Icon color={focused?'red':''} name="user"/>
						}
					/>
				</Tabs>
			</Scene>
		</Router>
	);
};


export default App;
