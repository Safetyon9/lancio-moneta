const moneta = document.getElementById('moneta');
const lanciaBtn = document.getElementById('lancio');
const testaInput = document.getElementById('testa');
const croceInput = document.getElementById('croce');

let score = JSON.parse(localStorage.getItem('score')) || {
    testa : 0,
    croce : 0
};
croceInput.value = score.croce;
testaInput.value = score.testa;

let timeoutLocal;

function salvataggioLocalDebounce() {
    clearTimeout(timeoutLocal);

    timeoutLocal = setTimeout(() => {
        localStorage.setItem('score',JSON.stringify(score));
    },1000);
}

lanciaBtn.addEventListener('click', () => {

    moneta.classList.remove('animata');
    void moneta.offsetWidth;

    const numeroCasuale = Math.random();
    moneta.classList.add('animata');

    if (numeroCasuale < 0.5) {
        score.testa ++;
        testaInput.value = score.testa;
        document.getElementById('testa').style.borderColor = 'red';
        document.getElementById('croce').style.borderColor = 'black';
        document.getElementById('lTesta').style.color = 'red';
        document.getElementById('lCroce').style.color = 'black';
    }
    else {
        score.croce ++;
        croceInput.value = score.croce;
        document.getElementById('croce').style.borderColor = 'red';
        document.getElementById('testa').style.borderColor = 'black';
        document.getElementById('lCroce').style.color = 'red';
        document.getElementById('lTesta').style.color = 'black';
    }

    salvataggioLocalDebounce();

    setTimeout(() => {
        moneta.classList.remove('animata');
    }, 800);

});
