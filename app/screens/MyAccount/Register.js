import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-elements';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import { RegisterOptions, RegisterStruct } from'../../forms/Register';

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
            }
        }
    }

    register() {
        const { password, passwordConfirm } = this.state.formData;

        if (password === passwordConfirm) {
            const validate = this.refs.registerForm.getValue();
            if(validate) {
                console.log('Formulario correcto')
            } else {
                console.log('Formulario inválido')
            }
        } else {
            console.log('Las contraseñas no son iguales')
        }
        // console.log(this.state.formData)
    }

    onChangeFormRegister = (formValue) => {
        this.setState({
            formData: formValue
        });
    };

    render() {
        const {registerOptions, registerStruct} = this.state;
        return (
            <View style={styles.viewBody}>
                <Form
                    ref="registerForm"
                    type={registerStruct}
                    options={registerOptions}
                    value={this.state.formData}
                    onChange={(formValue) => this.onChangeFormRegister(formValue)} />
                <Button title="Unirse" onPress={() => this.register()} />
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
    }
})