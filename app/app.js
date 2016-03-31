let words = document.querySelector(".content").textContent.split(" ").length;
let wpm = words / 230;


// Math.round

let wordText = document.createTextNode(`${Math.round(wpm)} minutes`);

document.querySelector("#words").appendChild(wordText);
