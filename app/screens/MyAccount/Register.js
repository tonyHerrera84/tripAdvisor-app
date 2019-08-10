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
            registerStruct: RegisterStruct
        }
    }

    register() {
        console.log('registro');
    }

    render() {
        const {registerOptions, registerStruct} = this.state;
        return (
            <View style={styles.viewBody}>
                <Form
                    ref="registerForm"
                    type={registerStruct}
                    options={registerOptions} />
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