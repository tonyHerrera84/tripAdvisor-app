import React from 'react';

import t from 'tcomb-form-native';
import formValidation from '../configs/Validations';

import inputTemplate from './templates/input'

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirm: formValidation.password
});

export const RegisterOptions = {
    fields: {
        name: {
            template: inputTemplate,
            config: {
                placeholder: 'Escríbe tu nombre y apellidos',
                iconType: 'material-community',
                iconName: 'account-outline'
            }
        },
        email: {
            template: inputTemplate,
            config: {
                placeholder: 'Escríbe tu correo electrónico',
                iconType: 'material-community',
                iconName: 'at'
            }
        },
        password: {
            template: inputTemplate,
            config: {
                placeholder: 'Escríbe tu contraseña',
                iconType: 'material-community',
                iconName: 'lock-outline',
                password: true,
                secureTextEntry: true
            }
        },
        passwordConfirm: {
            template: inputTemplate,
            config: {
                placeholder: 'Vuelve a escribir tu contraseña',
                iconType: 'material-community',
                iconName: 'lock-reset',
                password: true,
                secureTextEntry: true
            }
        },

    }
}