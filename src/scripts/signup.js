import tpl from '../templates/signup.hbs';
import '../style/index.css';
import '../style/signup.css';

document.getElementById('root').innerHTML = tpl({
    title: 'REGISTRATION',
    fields: [
        {
            label: 'EMAIL',
            name: 'email',
            placeholder: 'EMAIL',
            type: 'text',
            errorMessage: 'INVALID EMAIL',
        },
        {
            label: 'LOGIN',
            name: 'login',
            placeholder: 'LOGIN',
            type: 'text',
            errorMessage: 'USER ALREADY EXISTS',
        },
        {
            label: 'NAME',
            name: 'name',
            placeholder: 'NAME',
            type: 'text',
            errorMessage: 'INVALID NAME',
        },
        {
            label: 'LAST NAME',
            name: 'last_name',
            placeholder: 'LAST NAME',
            type: 'text',
            errorMessage: 'INVALID LASTNAME',
        },
        {
            label: 'PHONE',
            name: 'phone',
            placeholder: 'PHONE',
            type: 'text',
            errorMessage: 'INVALID PHONE',
        },
        {
            label: 'PASSWORD',
            name: 'password',
            placeholder: 'PASSWORD',
            type: 'password',
            errorMessage: 'PASSWORD DOESN\'T MEET THE REQUIREMENTS',
        },
        {
            label: 'CONFIRM',
            name: 'confirm_password',
            placeholder: 'CONFIRM',
            type: 'password',
            errorMessage: 'PASSWORDS DON\'T MATCH',
        },
    ]
});