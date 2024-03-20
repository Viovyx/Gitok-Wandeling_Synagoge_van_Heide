const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const unlockBtn64 = urlParams.get('unlock');
const unlockBtn = atob(unlockBtn64);

const allButtons = Array.from(document.querySelector('.button-group').children);
let buttonStates = {};

if (localStorage.getItem('buttonStates') !== null) {
    // The 'buttonStates' key exists in local storage => load the button states from local storage and apply to buttons.
    buttonStates = JSON.parse(localStorage.getItem('buttonStates'));
} else {
    // The 'buttonStates' key does not exist in local storage => create it (default to 'lock' for all).
    for (let button of allButtons) {
        toggleButtonLock(button, 'lock');
    }
}

for (let button of allButtons) {
    if (unlockBtn === button.id) {
        toggleButtonLock(button, 'unlock');
    }
    if (buttonStates[button.id] === false) {
        toggleButtonLock(button, 'lock');
    } else {
        toggleButtonLock(button, 'unlock');
    }
}

function toggleButtonLock(button, action) {
    if (action === 'lock') {
        if (button.classList.contains('unlock')) {
            button.classList.remove('unlock');
        }
        else if (button.classList.contains('lock')) {
            buttonStates[button.id] = false;
            return;
        }
        button.classList.add('lock');
        buttonStates[button.id] = false;

    }
    else if (action === 'unlock') {
        if (button.classList.contains('lock')) {
            button.classList.remove('lock');
        }
        else if (button.classList.contains('unlock')) {
            buttonStates[button.id] = true;
            return;
        }
        button.classList.add('unlock');
        buttonStates[button.id] = true;
    }
}
localStorage.setItem('buttonStates', JSON.stringify(buttonStates));
if (unlockBtn64 !== null) {
    window.location.href = '/home/wandeling/';
}

function resetButtonStates() {
    if (confirm('Dit verwijdert alle opgeslagen voortgang. Weet je zeker dat je dit wilt doen?')) {
        localStorage.removeItem('buttonStates');
        location.reload();
    }
}