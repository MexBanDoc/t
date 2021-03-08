function getValue() {
    let res = document.getElementById('wrapper')
        .querySelectorAll("#response-form input[name=\"response\"]");

    for (let i = 0; i < res.length; i++) {
        if (res[i].checked) {
            return res[i].value;
        }
    }
    return -1;
}

document.getElementById('noLink1').addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(alert("Еще не реализовано :("), 1000);
});

document.getElementById('noLink2').addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(alert("Еще не реализовано :("), 1000);
});

document.getElementById('but2').addEventListener("click", (e) => {
    let ans = getValue();
    if (ans === -1) {
        e.preventDefault();
        alert("Выберите ответ!")
    }
});

let arr = ['Совмести приятное с полезным',
    'Лови комплимент, красотка',
    ' Давно мечтаешь об отпуске? Это твой шанс!',
    'Не грусти, крошка! Лови букетик для настроения',
    'Тебе выпал приз! Поездка в Турцию на двоих с',
    'Знай, что ты',
    ' Ты знала, что женщины тоже служат?',
    'А шо с лицом?',
    'Тебе нужен массаж. А ему нужна ты',
    ' Вы прошли тест на беременность. Поздравляем, вы будущая мать!',
    'Думаешь, ты тут навеселе? После чая с малинкой ещё не то бывает)'
];


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('q').innerHTML = getRandom(0, 148);

let res = getRandom(1, 11);
let ans = ('<img src="memes/' + res + '.png"  alt="" />');
document.getElementById('pic').innerHTML = ans;
document.getElementById('tekst').innerHTML = ('<label>' + arr[res-1] + '</label>');