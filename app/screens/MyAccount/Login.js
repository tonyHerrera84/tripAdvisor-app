import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Image, Button} from 'react-native-elements';

import t from 'tcomb-form-native';
const Form = t.form.Form;

import {LoginStruct, LoginOptions} from '../../forms/Login';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginStruct: LoginStruct,
            loginOptions: LoginOptions
        };
    }
    image = require('../../../assets/img/5-tenedores-letras-icono-logo.png')

    render() {
        const { loginStruct, loginOptions } = this.state;
        return(
            <View style={styles.viewBody}>
                <Image
                    source={this.image}
                    style={styles.logo}
                    containerStyle={styles.containerLogo}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode="contain"
                />
                <View style={styles.viewForm}>
                    <Form
                        ref="loginForm"
                        type={loginStruct}
                        options={loginOptions}
                    />
                    <Button buttonStyle={styles.buttonLoginContainer} title="Login"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    containerLogo: {
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
    viewForm: {
        marginTop: 50
    },
    buttonLoginContainer: {
        backgroundColor: '#00a680',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    }
})