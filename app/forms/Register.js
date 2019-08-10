import React from 'react';

import t from 'tcomb-form-native';
import formValidation from '../configs/Validations';

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirm: formValidation.password
});

export const RegisterOptions = {
    fields: {
        name: {
            label: 'Nombre:',
            placeholder: 'Escríbe tu nombre y apellidos',
            error: 'Nombre inválido'
        },
        email: {
            label: 'Email:',
            placeholder: 'Escríbe tu correo electrónico',
            error: 'Email inválido'
        },
        password: {
            label: 'Contraseña:',
            placeholder: 'Escríbe tu contraseña',
            error: 'Contraseña inválida',
            password: true,
            secureTextEntry: true
        },
        passwordConfirm: {
            label: 'Repetir contraseña:',
            placeholder: 'Vuelve a escribir tu contraseña',
            error: 'La contraseña no coincide',
            password: true,
            secureTextEntry: true
        },

    }
}