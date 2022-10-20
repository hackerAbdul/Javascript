const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const cardEl = document.getElementById('card');

const form = document.getElementById('signup');

const checkName = () => {

    let valid = false;
    const min = 2,
        max = 10;
    const name = nameEl.value.trim();
    if (isRequired(name) === false) {
        showError(nameEl, 'Name cannot be blank.');
        nameEl.style.borderColor = 'pink'
    } else if (isBetween(name.length, min, max) === false) {
        showError(nameEl, `Name must be between ${min} and ${max} characters.`)
        nameEl.style.borderColor = 'pink'
    }else if (isString(name) === false){
        showError(nameEl, `Name must contain letters only`)
        nameEl.style.borderColor = 'pink'
    }else {
        showSuccess(nameEl);
        nameEl.style.borderColor = 'green'
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (isRequired(email) === false) {
        showError(emailEl, 'Email cannot be blank.');
        emailEl.style.borderColor = 'pink'
    } else if (isEmailValid(email) === false) {
        showError(emailEl, 'Email is not valid.')
        emailEl.style.borderColor = 'pink'
    } else {
        showSuccess(emailEl);
        emailEl.style.borderColor = 'green'
        valid = true;
    }
    return valid;
}

const checkCard = () => {
    let valid = false
    const card = cardEl.value.trim();
    const min = 16,
        max = 16;
    if (isRequired(card) === false) {
        showError(cardEl, 'Card cannot be blank.');
        cardEl.style.borderColor = 'pink'
    }else if(isNumber(card) === false){
        showError(cardEl, 'Card cannot have string')
        cardEl.style.borderColor = 'pink'
    }else if (isBetween(card.length, min, max) === false) {
        showError(cardEl, `Card must have 16 digits`)
        cardEl.style.borderColor = 'pink'
    }else {
        luhnAlgorithm = encryptCard(card);
    }

    if (luhnAlgorithm === true){
        valid = true;
    }
    return valid;
}

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    //regex for email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isString = (name) =>{
    //regex for string
    const re = /^[a-zA-Z]+$/;
    return re.test(name)
}

const isNumber = (card) => {
    //regex for numbers
    const re = /^[0-9]+$/;
    return re.test(card)
}

const encryptCard = (number) =>{
    let arr = (number + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let luhnAlgorithm = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    luhnAlgorithm += lastDigit;
    if(luhnAlgorithm % 10 === 0){
        showSuccess(cardEl);
        cardEl.style.borderColor = 'green'
        return true
    }else{
        //show error case to display invalid card info
        showError(cardEl, "That is not a valid card")
        cardEl.style.borderColor = 'pink'
    }
}

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
    form.style.height = '175px'
    form.style.width = '390px'

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};


const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isUsernameValid = checkName(),
        isEmailValid = checkEmail(),
        isCardValid = checkCard()

    let isFormValid = isUsernameValid && isEmailValid && isCardValid

    // submit to the server if the form is valid
    if (isFormValid) {
        alert("That has all been submitted thank you & an email has been sent to test@dn-uk.com")
    }
});