import tpl from '../templates/index.hbs';
import '../style/index.css';

document.getElementById('root').innerHTML = tpl({
    title: 'AUTHORIZATION',
    fields: [
        {
            label: 'LOGIN',
            name: 'login',
            placeholder: 'LOGIN',
            type: 'text',
            errorMessage: 'INVALID LOGIN',
        },
        {
            label: 'PASSWORD',
            name: 'password',
            placeholder: 'PASSWORD',
            type: 'password',
            errorMessage: 'INVALID PASSWORD',
        },
    ]
});