function convert(hex) {
    
    if (isNaN(parseInt(hex.charAt(0), 16))) {
 
        hex = hex.substr(1, 8);
    }
   
    var rgb = [];
    for (i = 0; i < 4; i++) {
      
        if (hex.length == 4) {
            rgb[i] = hex.substr(i, 1) + hex.substr(i, 1);
        } else {
            rgb[i] = hex.substr(i * 2, 2);
        }
    }
    
   
    for (i = 0; i < 4; i++) {
        var x = parseInt(rgb[i], 16);
       
        if (isNaN(x)) {
            
            throw "Sorry, I don't know what to do with that value. I'm just a browser :/";
        } else {
            rgb[i] = x;
        }
    }

    //output rgb values in a usable format
    return rgb;
}
module.exports = convert;