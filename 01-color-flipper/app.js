const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Getting required Html Element
const btn = document.getElementById("btn");  // click me button
const color = document.querySelector(".color"); // background color text


btn.addEventListener("click", function(){
    //get random number between 0-3 colors[3]

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]; // changing the actual body bg color to the generated value
    color.textContent = colors[randomNumber]; // adding the value to our html content
});

// function to generate a random number between 0-3
function getRandomNumber()
{
    return Math.floor(Math.random()*colors.length);
}
