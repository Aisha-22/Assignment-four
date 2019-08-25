// Create variables to initialize your row number, background color and lightness.
let rowNumber;
let myBackgroundcolor;
let myLightness;

// Store a variable reference to the HTML element “aTable”, we will be using this variable to insert our rows.
let aTable = document.getElementById("myTable");
let skrrt;
console.log(`The row number value is ${myLightness}`);

for(rowNumber = 1; rowNumber < 6; rowNumber++) {
    console.log("The row number value is " + rowNumber);

    if(rowNumber % 2 === 0){
        myLightness = 240;
        skrrt = 25; //my screen is not powerful enough cannot notice the change in lightness therefore I added anoher rgb value to change
    } else {
        myLightness = 255;
        skrrt = 250;
    }
    var row = aTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Row " + rowNumber; 
    cell1.style.backgroundColor = `rgb(100, ${myLightness}, 25)`;
    cell2.innerHTML =  `Aisha`;  
    cell2.style.backgroundColor = `rgb(100, ${myLightness}, ${skrrt})`;
    // "Row " + rowNumber;
}




