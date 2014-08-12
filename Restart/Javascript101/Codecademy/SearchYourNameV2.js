// Search Text for your name: version 2
// I added the another loop to pop out wrong names from array, so that it is not based solely on first letter of the name! Success!!!
// The first line before the code, is to allow one string go through nulti lines using '\'.

/*jshint multistr:true */
var text = "Hey, Tony and Thomas, how are you \ doing? My name is Tony, too.";
var myName = "Tony";
var hits = [];

for (var i=0; i<text.length; i++) {
    if (text[i] === 'T') {
        var k = 0;
        for (var j=i; j<myName.length+i; j++) {
          if (text[j] === myName[k]) {
            hits.push(text[j]);
            k++;
          }
          else {
            for (var l=0; l<k; l++) {
              hits.pop(myName[-1]);
            };
            j = myName.length+i;
          };
        };
    };
};

if (hits.length === 0) {
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
};