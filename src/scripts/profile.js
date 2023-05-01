import tpl from '../templates/profile.hbs';
import '../style/index.css';
import '../style/profile.css';

document.getElementById('root').innerHTML = tpl({
    name: 'ANDREW',
    fields: [
        { label: 'E-MAIL', value: 'HACKER9000@MAIL.COM' },
        { label: 'LOGIN', value: 'HACKER9000' },
        { label: 'NAME', value: 'ANDREW' },
        { label: 'LASTNAME', value: 'UNIXENKO' },
        { label: 'PHONE', value: '+ 232 23 323 22' },
    ]
});