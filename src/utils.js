import moment from 'moment';
import pathToRegexp from 'path-to-regexp';

export function validateEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

export function validatePassword(password) {
  return /^[a-z0-9@#$%&?!_-]+$/i.test(password);
}

export function validateIntegerNumber(number) {
  return /^\d+$/.test(number);
}

export function validateNumber(number) {
  return !isNaN(number) && number >= 0;
}

export function formatCurrency(number) {
  if (number != null) {
    const numberParts = parseFloat(number).toString().split(".");
    numberParts[0] = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numberParts.join('.');
  }
}

export function formatDate(date) {
  if (date) return moment(date).format('YYYY/MM/D');
}

export function formatTime(date) {
  if (date) return moment(date).format('HH:mm');
}

export function formatDateTime(date) {
  if (date) return moment(date).format('YYYY/MM/D HH:mm');
}

export function matchPath(patterns, path) {
  let result = false;

  for (let pattern of patterns) {
    if (pathToRegexp(pattern).exec(path)) {
      result = true;
      break;
    }
  }

  return result;
}

export function getToken() {
  return sessionStorage.getItem('token') || localStorage.getItem('token');
}

export function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}
