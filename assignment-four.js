// Create variables to initialize your row number, background color and lightness.
var rowNumber;
let myBackgroundcolor;
let myLightness;

// Store a variable reference to the HTML element “aTable”, we will be using this variable to insert our rows.
let aTable = document.getElementById("myTable");





for(rowNumber = 1; rowNumber < 6; rowNumber++) {
    console.log("The row number value is " + rowNumber);
    var row = aTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Aisha";
    cell2.innerHTML = "Row " + rowNumber;
}



