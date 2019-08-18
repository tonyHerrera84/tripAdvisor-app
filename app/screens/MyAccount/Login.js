import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Image, Button} from 'react-native-elements';

import t from 'tcomb-form-native';
const Form = t.form.Form;

import {LoginStruct, LoginOptions} from '../../forms/Login';

import * as firebase from 'firebase';

import Toast, {DURATION} from 'react-native-easy-toast';
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginStruct: LoginStruct,
            loginOptions: LoginOptions,
            loginData:{
                email: '',
                password: ''
            },
            loginErrorMessage: ''
        };
    };

    login = () => {
        console.log('Haciendo login');
        console.log(this.state.loginData);
        const validate = this.refs.loginForm.getValue();
        console.log(validate);

        if (!validate) {
            console.log('Formulario incorrecto');
            this.setState({
                loginErrorMessage: 'Los datos del formulario son erroneos'
            })
        } else {
            console.log('logeando');
            this.setState({
                loginErrorMessage: ''
            })
            firebase
            .auth()
            .signInWithEmailAndPassword(validate.email, validate.password)
            .then(resolve => {
                console.log('Login correcto');
                console.log(resolve);
                this.refs.toast.show('Login correcto.', 200, () => {
                    this.props.navigation.goBack();
                });
            })
            .catch(err => {
                console.log('Error en el registro');
                console.log(err);
                this.refs.toast.show('Login incorrecto revise sus datos.', 2500);
            })
        }
    };

    onChangeFormLogin = (formValue) => {
        console.log('Cahnge form login');
        console.log(formValue);
        this.setState({
            loginData: formValue
        });
    }

    image = require('../../../assets/img/5-tenedores-letras-icono-logo.png')

    render() {
        const { loginStruct, loginOptions, loginErrorMessage } = this.state;
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
                        value={this.state.loginData}
                        onChange={(formValue) => this.onChangeFormLogin(formValue)}
                    />
                    <Button 
                        buttonStyle={styles.buttonLoginContainer} 
                        title="Login"
                        onPress={() => this.login()}/>
                    <Text style={styles.textRegister}>
                        ¿Aún no tienes una cuenta?  
                        <Text
                            style={styles.btnRegister}
                            onPress={() => this.props.navigation.navigate('Register')}>
                              Registráte</Text>
                    </Text>
                </View>

                <Text style={styles.loginErrorMessage}>{loginErrorMessage}</Text>
                <Toast
                    ref='toast'
                    position='bottom'
                    positionValue={180}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'#fff'}} />
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
    },
    loginErrorMessage: {
        color: '#f00',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color: '#00a680',
        fontWeight: 'bold',
        paddingRight: 20,
        paddingStart: 20,
        paddingLeft: 20
    }
})