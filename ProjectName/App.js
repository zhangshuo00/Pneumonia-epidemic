/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
  BackHandler,
  ToastAndroid,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import ListSort from './Components/ListSort'
import Service from './Components/Service';
import Center from './Components/Center';
import Login from './Components/Login'
import SwiperPage from './Components/SwiperPage'

console.disableYellowBox = true;


const App = () => {
	let [isLogin, setIsLogin] = useState(false);
	let [isInstall, setIsInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isInstall',res)
			if(res){
				setIsInstall(false)
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide()
			}
			if(user&&user.token){
				setIsLogin(true)
				SplashScreen.hide()
			}
		})
	}
	useEffect(() => {
		init()
	}, [])
	let afterInstall = ()=>{
		console.log('after install')
		setIsInstall(false)
	}
	if(isInstall){
		return (
			<View style={{flex:1}}>
				<SwiperPage afterInstall={afterInstall}/>
			</View>
		)
	}
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop()
					return true
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp()
					}else{
						ToastAndroid.show('确定要退出吗',100)
						now = new Date().getTime()
						return true
					}
				}
			}}
		>
			<Overlay>
				<Modal key="modal" hideNavBar>
					<Lightbox key="lightbox">
						<Drawer 
							key="drawer"
							contentComponent={()=><Text>drawer</Text>}
							drawerIcon={()=><Icon name="menu"/>}
							drawerWidth={400}
						>
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
						</Drawer>
					</Lightbox>
					<Scene initial={!isLogin} key="login" component={Login} />
				</Modal>
			</Overlay>
		</Router>
	);
};


export default App;
