const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const cardEl = document.getElementById('card')

const form = document.querySelector('#signup');

const checkUsername = () => {

    let valid = false;
    const min = 2,
        max = 10;
    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Name cannot be blank.');
        nameEl.style.borderColor = 'pink'
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `Name must be between ${min} and ${max} characters.`)
        nameEl.style.borderColor = 'pink'
    }else if (!isString(name)){
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
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
        emailEl.style.borderColor = 'pink'
    } else if (!isEmailValid(email)) {
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
    console.log(card)
    if (!isRequired(card)) {
        showError(cardEl, 'Card cannot be blank.');
        cardEl.style.borderColor = 'pink'
    }else if(!isNumber(card)){
        showError(cardEl, 'Cannot have string in credit Card')
        cardEl.style.borderColor = 'pink'
    }else {
        showSuccess(cardEl);
        cardEl.style.borderColor = 'green'
        valid = true;
    }
    return valid;
}

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isString = (name) =>{
    const re = /^[a-z]+$/;
    return re.test(name)
}

const isNumber = (card) => {
    const re = /^\d+$/;
    return re.test(card)
}

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

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
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail()

    let isFormValid = isUsernameValid && isEmailValid

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});