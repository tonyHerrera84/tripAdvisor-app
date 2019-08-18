import React, {Component} from 'react';
import { StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import { Button, Image } from 'react-native-elements';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import { RegisterOptions, RegisterStruct } from'../../forms/Register';

import * as firebase from 'firebase';

import Toast, {DURATION} from 'react-native-easy-toast';

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            registerOptions: RegisterOptions,
            registerStruct: RegisterStruct,
            formData: {
                user: '',
                email: '',
                password: '',
                passwordConfirm: ''
            },
            formErrorMessage: ''
        }
    }

    register() {


        const { password, passwordConfirm } = this.state.formData;

        if (password === passwordConfirm) {
            const validate = this.refs.registerForm.getValue();
            if(validate) {
                this.setState({
                    formErrorMessage: ''
                });
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(validate.email, validate.password)
                    .then(resolve => {
                        console.log('Registro correcto');
                        console.log(resolve);
                        this.refs.toast.show('Registro correcto.', 200, () => {
                            this.props.navigation.navigate('MyAccount');
                        });
                    })
                    .catch(err => {
                        console.log('Error en el registro');
                        console.log(err);
                        this.refs.toast.show('El email ya está en uso.', 2500);
                    })
            } else {
                this.setState({
                    formErrorMessage: 'Formularío inválido'
                })
            }
        } else {
            this.setState({
                formErrorMessage: 'Las contraseñas no son iguales'
            })
        }
        // console.log(this.state.formData)
    }

    onChangeFormRegister = (formValue) => {
        this.setState({
            formData: formValue
        });
    };
    
    image = require('../../../assets/img/5-tenedores-letras-icono-logo.png')

    render() {
        const {registerOptions, registerStruct, formErrorMessage} = this.state;
        return (
            <View style={styles.viewBody}>
                <Image
                    source={this.image}
                    style={styles.logo}
                    containerStyle={styles.containerLogo}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode="contain"
                />
                <Form
                    ref="registerForm"
                    type={registerStruct}
                    options={registerOptions}
                    value={this.state.formData}
                    onChange={(formValue) => this.onChangeFormRegister(formValue)} />
                <Button
                    buttonStyle={styles.buttonRegisterContainer}
                    title="Unirse" 
                    onPress={() => this.register()} />

                <Text style={styles.formErrorMessage}>{formErrorMessage}</Text>

                <Toast
                    ref='toast'
                    position='bottom'
                    positionValue={180}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'#fff'}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    buttonRegisterContainer: {
        backgroundColor: '#00a680',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    formErrorMessage: {
        color: '#f00',
        textAlign: 'center',
        marginTop: 30
    },
    containerLogo: {
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
})