//a simplistic score module

let scoreElem = document.createElement("div");
scoreElem.id = 'score'
document.body.appendChild(scoreElem);

let score = 0;
let scorePerSecond = 1;

// Display the score and update it every second
setInterval(function() {
  score += scorePerSecond;
  document.getElementById("score").innerHTML = score;
}, 1000);

// Add a button to increase the score
let button = document.createElement("button");
button.innerHTML = "Click me to increase score";
button.onclick = function() {
  score++;
  document.getElementById("score").innerHTML = score;
};
document.body.appendChild(button);
