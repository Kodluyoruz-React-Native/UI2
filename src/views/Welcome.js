import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';
import { observer } from 'mobx-react';

import { welcomeStyle } from './style';

class Welcome extends React.Component {

    render() {
        return (
            <View style={welcomeStyle.con}>
                <Text style={welcomeStyle.caption}>Hoşgeldiniz</Text>
                <Text style={welcomeStyle.desc}>Lorem ipsum dolar sit amet</Text>

                <TouchableOpacity style={welcomeStyle.nextB} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={welcomeStyle.nextBT}>Devam Et</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default observer(Welcome);
