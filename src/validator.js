class Validator {
  validateUsername(username) {
    const validator = require('../src/validateUsername');
    return validator(username);
  }
}

module.exports = Validator;
