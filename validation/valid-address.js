const validAddress = address => {
  if (address !== "" && address.length > 5) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = validAddress;