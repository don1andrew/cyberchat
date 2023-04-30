import tpl from '../templates/error.hbs';
import '../style/index.css';
import '../style/fallback.css';

document.getElementById('root').innerHTML = tpl({
    code: 404,
    message: 'NOT_FOUND',
});