function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  const valid = login.length >= 4 && login.length <= 16;
  return valid;
}
function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  const loginUnique = allLogins.includes(login);
  if (loginUnique === true) {
    return false;
  }
  return true;
}
function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  if (isLoginValid(login) === false) {
    return (message = ERROR);
  } else if (isLoginUnique(allLogins, login) === false) {
    return (message = REFUSAL);
  }
  allLogins.push(login);
  return (message = SUCCESS);
}
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
