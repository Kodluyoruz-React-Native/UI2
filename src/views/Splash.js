import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import Image from 'react-native-scalable-image';

import { splashStyle } from './style';

class Splash extends React.Component {
    render() {
        return (
            <View style={splashStyle.container}>
                <Image
                    source={require('../../assets/images/logo1.png')}
                    width={Dimensions.get('window').width * 0.6}
                />

                <TouchableOpacity>
                    <Text>kaydol</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default observer(Splash);
