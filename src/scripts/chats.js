import tpl from '../templates/chats.hbs';
import '../style/index.css';
import '../style/chats.css';

document.getElementById('root').innerHTML = tpl({
    chatlist: [
        { username: 'ANDREW', preview: 'Message preview', counter: '99+'},
        { username: 'VASILY', preview: 'YOU: Message preview', counter: '12'},
        { username: 'ПЕНТАГОН', preview: 'Хватит нас взламывать!', counter: '5'},
        { username: 'TAKEMURA', preview: 'Ohayou', counter: ''},
        { username: 'САНЁК', preview: 'Здарова', counter: ''},
        { username: 'UNKNOWN USER', preview: '', counter: ''},
        { username: 'UNKNOWN USER', preview: '', counter: ''},
        { username: 'UNKNOWN USER', preview: '', counter: ''},
    ],
    chat: [
        {
            type: 'theirs',
            timestamp: '2023-04-09_19:23:90',
            message: 'В чате есть фейковая отправка и поиск',
        },
        {
            type: 'ours',
            timestamp: '2023-04-09_19:23:90',
            message: 'A?',
        },
        {
            type: 'theirs',
            timestamp: '2023-04-09_19:23:90',
            message: 'message',
        },
        {
            type: 'theirs',
            timestamp: '2023-04-09_19:23:90',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            type: 'ours',
            timestamp: '2023-04-09_19:23:90',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            type: 'theirs',
            timestamp: '2023-04-09_19:23:90',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
    ]
});