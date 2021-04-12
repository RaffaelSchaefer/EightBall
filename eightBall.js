let eightBallAnswers = [
    "IT IS CERTAIN",
    "IT IS DECIDEDLY SO",
    "WITHOUT A DOUBT",
    "YES – DEFINITELY",
    "YOU MAY RELY ON IT",
    "AS I SEE IT, YES",
    "MOST LIKELY",
    "OUTLOOK GOOD",
    "YES",
    "SIGNS POINT TO YES",
    "REPLY HAZY, TRY AGAIN",
    "ASK AGAIN LATER",
    "BETTER NOT TELL YOU NOW",
    "CANNOT PREDICT NOW",
    "CONCENTRATE AND ASK AGAIN",
    "DON’T COUNT ON IT",
    "MY REPLY IS NO",
    "MY SOURCES SAY NO",
    "OUTLOOK NOT SO GOOD",
    "VERY DOUBTFUL"
]
function eightBall () {
    document.getElementById("Output").innerHTML = eightBallAnswers[Math.floor(Math.random() * eightBallAnswers.length)]
}