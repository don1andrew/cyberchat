import tpl from '../templates/password_edit.hbs';
import '../style/index.css';
import '../style/password_edit.css';

document.getElementById('root').innerHTML = tpl({
    fields: [
        {
            label: 'OLD PASSWORD',
            name: 'old_password',
            placeholder: 'OLD PASSWORD',
            type: 'password',
            errorMessage:'INVALID PASSWORD',
        },
        {
            label: 'NEW PASSWORD',
            name: 'new_password',
            placeholder: 'NEW PASSWORD',
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