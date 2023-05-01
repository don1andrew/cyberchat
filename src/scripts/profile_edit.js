import tpl from '../templates/profile_edit.hbs';
import '../style/index.css';
import '../style/profile_edit.css';

document.getElementById('root').innerHTML = tpl({
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
    ]
});