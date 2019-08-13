import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-elements';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import { RegisterOptions, RegisterStruct } from'../../forms/Register';

import * as firebase from 'firebase';

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
                    })
                    .catch(err => {
                        console.log('Error en el registro');
                        console.log(err); 
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

    render() {
        const {registerOptions, registerStruct, formErrorMessage} = this.state;
        return (
            <View style={styles.viewBody}>
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
    }
})