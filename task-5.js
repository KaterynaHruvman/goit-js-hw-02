function checkForSpam(str) {
  "use strict";
  // Write code under this line
  let message = str.toLowerCase();
  return message.includes("sale") || message.includes("spam");
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkFconsole.log(checkForSpam("[SPAM] How to earn fast money?")));
