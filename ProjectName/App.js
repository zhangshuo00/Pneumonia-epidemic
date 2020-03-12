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
import {Scene, Router, Tabs, Drawer, Lightbox, Modal, Overlay} from 'react-native-router-flux'
import ListSort from './Components/ListSort'

console.disableYellowBox = true;


const App = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene
					key="home"
					component={}
					title="首页"
					initial={true}
				/>
				<Scene
					key="sort"
					component={ListSort}
					title="分类"
				/>
				<Scene
					key="personal"
					component={}
					title="个人中心"
				/>
			</Scene>
		</Router>
	);
};
const styles = StyleSheet.create({

})

export default App;
