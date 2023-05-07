const throttle = require('lodash.throttle');

const emailMessItem = document.querySelector('form');
const emailItem = document.querySelector('input[name="email"]');
const messageItem = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const data = {
  email: '',
  message: '',
};

const getData = () => {
  data.email = emailItem.value;
  data.message = messageItem.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

const updateOutput = () => {
  const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (parsedData) {
    emailItem.value = parsedData.email;
    messageItem.value = parsedData.message;
    data.email = parsedData.email;
    data.message = parsedData.message;
  } else {
    emailItem.value = '';
    messageItem.value = '';
  }
};

const resetData = e => {
  e.preventDefault();
  console.log(data);
  emailMessItem.reset();
  localStorage.clear();
};

updateOutput();
emailMessItem.addEventListener('input', throttle(getData, 500));
emailMessItem.addEventListener('submit', resetData);
