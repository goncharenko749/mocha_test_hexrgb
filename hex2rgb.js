function convert(hex) {

    const rgb = [];
    
    if (!hex.startsWith('#')) {
    throw "Sorry, I don't know what to do with that value. I'm just a browser :/";
    }
    
    hex = hex.substr(1, 8);
    
    
    for (i = 0; i < 4; i++) {
    
    if (hex.length === 4) {
    rgb[i] = hex.substr(i, 1) + hex.substr(i, 1);
    } else {
    rgb[i] = hex.substr(i * 2, 2);
    }
    
    rgb[i] = parseInt(rgb[i], 16);
    }
    
    //output rgb values in a usable format
    return rgb;
    }
    
    module.exports = convert;