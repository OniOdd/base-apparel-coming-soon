'use strict';

const input = document.querySelector('#email');
const button = document.querySelector('#button');

const message = document.querySelector('#message');
const iconError = document.querySelector('#icon-error');

input.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkEmail();
  }
});
button.addEventListener('click', event => {
  event.preventDefault();
  checkEmail();
});

function checkEmail() {
  const EMAIL_PATTERN = /^([a-z_.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  if (EMAIL_PATTERN.test(input.value)) {
    removeClasses();

    message.textContent = 'You have successfully subscribed to the newsletter';
    message.classList.add('valid');
    input.value = '';
    input.blur();

    setTimeout(() => globalThis.location.reload(), 6000);
  } else {
    removeClasses();

    message.textContent = 'Please provide a valid email';
    message.classList.add('invalid');
    input.classList.add('invalid');
    iconError.classList.add('invalid');
    input.focus();
  }
}

function removeClasses() {
  if (
    input.classList.contains('invalid') &&
    message.classList.contains('invalid') &&
    iconError.classList.contains('invalid')
  ) {
    input.classList.remove('invalid');
    message.classList.remove('invalid');
    iconError.classList.remove('invalid');
  }

  if (message.classList.contains('valid')) message.classList.remove('valid');
}
