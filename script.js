const email = document.querySelector('form input#mail');
const phone = document.querySelector('form input#phone');
const password = document.querySelector('form input#password');
const repassword = document.querySelector('form input#password2');

const lengthSmall = document.querySelector('small#value-length');
const upperCaseSmall = document.querySelector('small#value-upperCase');
const numSmall = document.querySelector('small#value-number');
const symbolSmall = document.querySelector('small#value-symbol');

var numReg = /[0-9]/;
var upperCaseReg = /[A-Z]/;
var symbolReg = /[-!$%^&*()@_+|~=`{}\[\]:";'<>?,.\/]/;
var emailReg = /^[^@]+@[^@]+\.[^@]+$/;

email.addEventListener('focusout', checkEmail);
function checkEmail() {
  if (!emailReg.test(email.value)) {
    document.querySelector('.fas.fa-exclamation-circle').style.visibility =
      'visible';
    document.querySelector('.fas.fa-exclamation-circle').style.color = 'red';
    document.querySelector('#value-email').style.color = 'red';
    document.querySelector('#value-email').style.visibility = 'visible';
    document.querySelector('input#mail').style.borderColor = 'rgb(247,74,74)';
  } else {
    document.querySelector('.fas.fa-exclamation-circle').style.visibility =
      'hidden';
    document.querySelector('#value-email').style.visibility = 'hidden';
    document.querySelector('input#mail').style.borderColor = 'green';
  }
}

phone.addEventListener('focusout', checkPhone);
function checkPhone() {
  /^[0-9]+$/.test(phone.value)
    ? (phone.style.borderColor = 'green')
    : (phone.style.borderColor = 'orange');
}

password.addEventListener('input', checkPassword);
function checkPassword() {
  let value = password.value;
  document.querySelector('fieldset').classList.add('active');
  document.querySelector('div.re-password').classList.add('active');
  // document.querySelector('div.re-password').style.display='block';
  numReg.test(value)
    ? (numSmall.style.color = 'green')
    : (numSmall.style.color = 'red');
  upperCaseReg.test(value)
    ? (upperCaseSmall.style.color = 'green')
    : (upperCaseSmall.style.color = 'red');
  symbolReg.test(value)
    ? (symbolSmall.style.color = 'green')
    : (symbolSmall.style.color = 'red');
  value.length >= 8
    ? (lengthSmall.style.color = 'green')
    : (lengthSmall.style.color = 'red');
  if (
    numReg.test(value) &&
    upperCaseReg.test(value) &&
    symbolReg.test(value) &&
    value.length >= 8
  ) {
    document.querySelector('form .fas.fa-lock-open').style.visibility =
      'hidden';
    document.querySelector('form .fas.fa-lock').style.color = 'green';
    document.querySelector('form .fas.fa-lock').style.visibility = 'visible';
    password.style.borderColor = 'green';
  } else {
    document.querySelector('form .fas.fa-lock').style.visibility = 'hidden';
    document.querySelector('form .fas.fa-lock-open').style.color = 'red';
    document.querySelector('form .fas.fa-lock-open').style.visibility =
      'visible';
    password.style.borderColor = 'rgb(247,74,74)';
  }
}

repassword.addEventListener('focusout', checkRepassword);
function checkRepassword() {
  let passValue = password.value;
  let repassValue = repassword.value;
  const smallSelector = document.querySelector('small#value-repassword');
  console.log(smallSelector);
  if (Object.is(passValue, repassValue) && repassValue.length > 0) {
    repassword.style.borderColor = 'green';
    smallSelector.style.visibility = 'hidden';
  } else {
    repassword.style.borderColor = 'rgb(247,74,74)';
    smallSelector.style.color = 'red';
    smallSelector.style.visibility = 'visible';
  }
}

const submit = document.querySelector("button[type='submit']");
submit.addEventListener('click', checkAll);
function checkAll(e) {
  e.preventDefault();
  checkEmail();
  checkPhone();
  checkPassword();
  checkRepassword();
}
