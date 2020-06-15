const validZip = zip => {
  regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

  if (regexp.test(zip)) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = validZip;