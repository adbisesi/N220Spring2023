
let randomDiv = document.getElementById("randomDiv");

// MAKE RANDOM: Onclick function
function startRandomizing() {
    let randomNumber = randomGenerator();
    randomDiv.innerHTML = randomNumber;
}

// MAKE RANDOM: function to create random number
function randomGenerator() {
    let randomNumber = Math.floor(Math.random() ,10);

    return randomNumber;
}