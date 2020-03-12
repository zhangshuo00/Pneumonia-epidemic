/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native'
import {Scene, Router, Tabs } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native';
import ListSort from './Components/ListSort'
import Service from './Components/Service';
import Personal from './Components/Personal';

console.disableYellowBox = true;


const App = () => {
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
						component={Personal}
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
