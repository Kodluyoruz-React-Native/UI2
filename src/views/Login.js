import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Image from 'react-native-scalable-image';
import { observer } from 'mobx-react';

import { welcomeStyle } from './style';
import loginC from '../controllers/loginC';

class Login extends React.Component {

    render() {
        return (
            <View style={welcomeStyle.con}>
                <Text style={welcomeStyle.caption}>Hoşgeldiniz Login</Text>
                <Text style={welcomeStyle.desc}>Lorem ipsum dolar sit amet</Text>

                <TextInput
                    style={welcomeStyle.input}
                    placeholder={'Adını yaz'}
                    value={loginC.isim}
                    onChangeText={d => loginC.set('isim', d)}
                />
                <TextInput
                    style={welcomeStyle.input}
                    placeholder={'Şifreni yaz'}
                    value={loginC.sifre}
                    secureTextEntry
                    maxLength={8}
                    keyboardType={'number-pad'}
                    keyboardAppearance={'dark'}
                    onChangeText={d => loginC.set('sifre', d)}
                />

                <TouchableOpacity style={welcomeStyle.nextB}>
                    <Text style={welcomeStyle.nextBT}>Devam Et</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default observer(Login);
