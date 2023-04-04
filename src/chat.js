function mockSend(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender === 'THEIRS' ? 'message-theirs' : 'message-ours');
    msg.innerText = text;

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

const allChats = document.querySelectorAll('.chatlist-item');

function searchChats(str) {
    if (str === '') {
        return allChats;
    }
    const result = [...allChats].filter((item) => {
        const username = [...item.childNodes]
            .filter(node => node.nodeType === 1)[1]
            .innerText
            .toLowerCase();
        return username.includes(str.toLowerCase());
        // console.log(username);
        // return true;
    })
    if (!result.length) {
        // const resultNode = document.createTextNode('NOT FOUND');
        const resultNode = document.createElement('div');
        resultNode.innerText = 'NOT FOUND';
        resultNode.style.textAlign = 'center';
        return [resultNode];
    }
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
        console.log(e);
        handleSend();
    }
})
document.getElementById('search').addEventListener('input', (e) => {
    const chats = document.querySelector('.chat-layout-chatlist');
    chats.replaceChildren(...searchChats(e.target.value))
})

