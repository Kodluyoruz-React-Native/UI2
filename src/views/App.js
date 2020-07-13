import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { observable, action, decorate } from 'mobx';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Splash';
import Welcome from './Welcome';

import { appStyle } from './style';

import appC from '../controllers/appC';
import Login from './Login';

const stack = createStackNavigator();

class App extends React.Component {
    componentDidMount() {
        appC.splashKapat();
    }

    navigasyon() {
        return (
            <NavigationContainer>
                <stack.Navigator screenOptions={{ headerShown: false }}>
                    <stack.Screen name={'Welcome'} component={Welcome} />
                    <stack.Screen name={'Login'} component={Login} />
                </stack.Navigator>
            </NavigationContainer>
        );
    }

    render() {
        //if (appC.splashRender) return <Splash />


        return (
            <>
                <View></View>

                <View style={appStyle.navContainer}>{this.navigasyon()}</View>

                <View></View>
            </>
        );
    }
}

export default observer(App);
