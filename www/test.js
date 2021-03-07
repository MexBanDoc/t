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

// function check2(){
//     alert("selected: " + $('input[name=response]:checked').val());
// }
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

// check2()