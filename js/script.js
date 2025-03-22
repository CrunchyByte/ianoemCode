// JavaScript to change the background color
document.getElementById("colorButton").addEventListener("click", function() {
    // Array of colors to choose from
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F5A623", "#D64541"];

    // Randomly select a color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});