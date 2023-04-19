let suits, numbers, suitsBottom, i;
var card = {
  suits: ["&#9830", "&#9829", "&#9824", "&#9827"],
  suitsBottom: ["&#9830", "&#9829", "&#9824", "&#9827"],
  numbers: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
};

function pullNumber() {
  var theNumber = Math.floor(Math.random() * card.numbers.length);
  document.getElementById("randomNumber").innerHTML = card.numbers[theNumber];
}

function pullBothSuits() {
  var allSuits = Math.floor(Math.random() * card.suits.length);
  document.getElementById("topSuit").innerHTML = card.suits[allSuits];
  document.getElementById("bottomSuit").innerHTML = card.suits[allSuits];

  if (card.suits[allSuits] === "&#9830" || card.suits[allSuits] === "&#9829") {
    document.getElementById("aCard").classList.add("redSuit");
  } else if (
    card.suits[allSuits] === "&#9827" ||
    card.suits[allSuits] === "&#9824"
  ) {
    document.getElementById("aCard").classList.remove("redSuit");
  }
}

function startTimer(duration, display) {
  var timer = duration,
    // minutes,
    seconds;
  setInterval(function() {
    // minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    // minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = seconds;

    if (--timer < 0) {
      pullNumber();
      pullBothSuits();
      timer = duration;
    }
  }, 1000);
}

window.onload = function() {
  var fiveSeconds = 5,
    display = document.querySelector("#time");
  startTimer(fiveSeconds, display);
};

window.wholeCard = function() {
  pullNumber();
  pullBothSuits();
};
