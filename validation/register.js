
const Validator = require('validator');
const validText = require('./valid-text');
const validAddress = require('./valid-address');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  data.address = validAddress(data.address) ? data.address : '';


  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (Validator.isEmpty(data.address)){
    errors.address = 'Please enter full address';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};

