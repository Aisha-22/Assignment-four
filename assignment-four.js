// Create variables to initialize your row number, background color and lightness.
var rowNumber;
let myBackgroundcolor;
let myLightness;

// Store a variable reference to the HTML element “aTable”, we will be using this variable to insert our rows.
let aTable = document.getElementById("myTable");


let rgbtochange;
let skrrt;
console.log(`The row number value is ${rgbtochange}`);

for(rowNumber = 1; rowNumber < 6; rowNumber++) {
    console.log("The row number value is " + rowNumber);

    if(rowNumber % 2 === 0){
        rgbtochange = 240;
        skrrt = 25; //my screen is not powerful enough cannot notice the change in lightness therefore I added anoher rgb value to change
    } else {
        rgbtochange = 255;
        skrrt = 240;
    }
    var row = aTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Aisha";
    cell1.style.backgroundColor = `rgb(100, ${rgbtochange}, ${skrrt})`;
    cell2.innerHTML = "Row " + rowNumber;
}




