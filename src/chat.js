// just test closure
function elemCreator(type) {
    return function(text, classes) {
        const elem = document.createElement(type);
        elem.classList.add(...classes);
        elem.innerText = text;
        return elem;
    }
}
const divCreator = elemCreator('div');

function mockSend(text, sender) {
    const msg = divCreator(text, ['message', sender === 'THEIRS' ? 'message-theirs' : 'message-ours']);

    const chat = document.querySelector('.chat-layout-main');
    chat.prepend(msg);
}

function generateAnswer(text) {
    const answers = ['Серьезно?', 'Ты шутишь?', 'А это неплохо', 'Здорово!', 'Тоже так думаю'];
    return `${text}? ${answers[Math.floor(Math.random() * 5)]}`;
}
function handleSend() {
    const textArea = document.getElementById('message');
    if (textArea.value !== undefined && textArea.value !== '') {
        mockSend(textArea.value);
        const text = textArea.value;

        setTimeout(() => mockSend(generateAnswer(text), 'THEIRS'), Math.floor(Math.random() * 1000) + 500);

        textArea.value = null;
    }
    console.log(textArea.value);
}

const allChats = document.querySelectorAll('.chatlist-item:not(.add-user-item)')
const addUserItem = document.querySelector('.add-user-item');
addUserItem.remove();

const chatContainer = document.querySelector('.column-2');
const chatContent = [...chatContainer.childNodes];
const unselectedChatContent = divCreator('Select a chat to start messaging', ['chat-greeting']);

const profileName = document.querySelector('.profile-name');


let selected = undefined;


function searchChats(str) {
    if (str === '') {
        return allChats;
    }
    let result = [...allChats].filter((item) => {
        return [...item.childNodes]
            .filter(node => node.nodeType === 1)[1]
            .innerText
            .toLowerCase()
            .includes(str.toLowerCase());
        // console.log(username);
        // return true;
    })
    if (!result.length) {
        // const resultNode = document.createTextNode('NOT FOUND');
        const resultNode = document.createElement('div');
        resultNode.innerText = 'NOT FOUND';
        resultNode.style.textAlign = 'center';
        result = [resultNode];
    }
    addUserItem.querySelector('.chatlist-username').innerText = str.toUpperCase();
    result.push(addUserItem);
    return result;
}

document.getElementById('send').addEventListener('click', (e) => {
    handleSend();
})
document.getElementById('message').addEventListener('keydown', (e) => {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') &&
       !e.shiftKey && !e.repeat
    ) {
        e.preventDefault();
        handleSend();
    }
})
document.getElementById('search').addEventListener('input', (e) => {
    const chats = document.querySelector('.chat-layout-chatlist');
    chats.replaceChildren(...searchChats(e.target.value))
})
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        selected?.classList.remove('selected');
        selected = undefined;
        chatContainer.replaceChildren(unselectedChatContent);
        document.querySelector('.btn_secondary').style.display = 'none';
    }
})

allChats.forEach((chat) => {
    chat.addEventListener('click', (e) => {
        selected?.classList.remove('selected');
        selected = e.currentTarget;
        selected.classList.add('selected');
        document.querySelector('.btn_secondary').style.display = 'block';

        // console.log(e.currentTarget.querySelector('.chatlist-username').innerText);

        profileName.innerText = e.currentTarget.querySelector('.chatlist-username').innerText;

        chatContainer.replaceChildren(...chatContent);
    })
})
window.addEventListener('load', () => {
    chatContainer.replaceChildren(unselectedChatContent);
    document.querySelector('.btn_secondary').style.display = 'none';
})

