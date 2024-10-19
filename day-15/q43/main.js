var magicians = ["Alice", "David", "Chris"];
function makeGreat(magicians) {
    var greatMagicians = []; // Explicitly typed as string[]
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var greatMagicians = makeGreat(magicians); // Creates a new modified array
console.log("Original magicians:");
showMagicians(magicians); // Shows original names
console.log("Great magicians:");
showMagicians(greatMagicians); // Shows modified names
