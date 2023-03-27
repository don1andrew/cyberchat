const btnOk = document.getElementById('btn-ok');
const popOver = document.querySelector('.pop-over');
const pic = document.querySelector('.profile-pic');

btnOk.addEventListener('click', () => {
    popOver.style.display = 'none';
});

pic.addEventListener('click', () => {
    popOver.style.display = 'initial';
})