const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025

// Getting required Html Element
const btn = document.getElementById("btn");  // click me button
const color = document.querySelector(".color"); // background color text


// Event listener and function to run
btn.addEventListener('click', function(){
    let hexColor = "#"; // giving our hex colour the default compulsory # (make sure hexcolor is a string)
   
    // run a loop 6 times to generate a number 6 times and add it to hexcolor #
    for (let i=0; i<6; i++) 
    {
        hexColor += hex[getRandomNumber()] // adding the generated loop number to hex color
    }

    color.textContent = hexColor; // adding the value to our html content
    document.body.style.backgroundColor = hexColor; // changing the actual body bg color to the generated value
})


// function to generate a random number between 0-15
function getRandomNumber()
{
    return Math.floor(Math.random() * hex.length);
}