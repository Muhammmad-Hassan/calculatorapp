const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearinput() {
    display.value = '';
}

function equal() {
    const result = eval(display.value);
    display.value = isNaN(result) ? 'Error' : result;
}

