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
    switch (unlockBtn) {
        case 'btn1':
            page = '1-kerk-heide';
            break;
        case 'btn2':
            page = '2-station-heide';
            break;
        case 'btn3':
            page = '3-hotel-de-zwaan';
            break;
        case 'btn4':
            page = '4-felice-en-helena';
            break;
        case 'btn5':
            page = '5-synagoge';
            break;
        case 'btn6':
            page = '6-kinderwelzijnstraat';
            break;
        case 'btn7':
            page = '7-nieuwstraat';
            break;
        case 'btn8':
            page = '8-bospadje-de-vroente';
            break;
        case 'btn9':
            page = '9-kalmthoutse-heide';
            break;
        case 'btn10':
            page = '10-keienhof';
            break;
    }

    window.location.href = '/home/wandeling/' + page;
}

function resetButtonStates() {
    if (confirm('Dit verwijdert alle opgeslagen voortgang. Weet je zeker dat je dit wilt doen?')) {
        localStorage.removeItem('buttonStates');
        location.reload();
    }
}