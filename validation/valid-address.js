const validAddress = address => {
  if (address !== "") {
    return true;
  }
  else {
    return false;
  }
}

module.exports = validAddress;