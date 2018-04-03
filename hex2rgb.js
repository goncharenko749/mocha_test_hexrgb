function convert(hexInput) {
  const rgb = [];
  if (!hexInput.startsWith('#')) {
    throw Error;
  }
  const hex = hexInput.substr(1, 8);
  for (let i = 0; i < 4; i += 1) {
    if (hex.length === 4) {
      rgb[i] = hex.substr(i, 1) + hex.substr(i, 1);
    } else {
      rgb[i] = hex.substr(i * 2, 2);
    }

    rgb[i] = hex.length === 4 ?
      parseInt(hex.substr(i, 1) + hex.substr(i, 1), 16) :
      parseInt(hex.substr(i * 2, 2), 16);
  }
  return rgb;
}

module.exports = convert;
