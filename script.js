
// Score Left

let teamLeft = document.getElementById("team-left")
let scoreLeft = 0

function addLeft1() {
    scoreLeft += 1
    teamLeft.innerHTML = scoreLeft
    console.log(scoreLeft)
    enlargeTeamAvLeft()
    colorPointsLeft()
    highlightHigherScore()
}

function addLeft2() {
    scoreLeft += 2
    teamLeft.innerHTML = scoreLeft
    console.log(scoreLeft)
    enlargeTeamAvLeft()
    colorPointsLeft()
    highlightHigherScore()
}

function addLeft3() {
    scoreLeft += 3
    teamLeft.innerHTML = scoreLeft
    console.log(scoreLeft)
    enlargeTeamAvLeft()
    colorPointsLeft()
    highlightHigherScore()
}


// Score Right

let teamRight = document.getElementById("team-right")
let scoreRight = 0

function addRight1() {
    scoreRight += 1
    teamRight.innerHTML = scoreRight
    console.log(scoreRight)
    enlargeTeamAvRight()
    colorPointsRight()
    highlightHigherScore()
}

function addRight2() {
    scoreRight += 2
    teamRight.innerHTML = scoreRight
    console.log(scoreRight)
    enlargeTeamAvRight()
    colorPointsRight()
    highlightHigherScore()
}

function addRight3() {
    scoreRight += 3
    teamRight.innerHTML = scoreRight
    console.log(scoreRight)
    enlargeTeamAvRight()
    colorPointsRight()
    highlightHigherScore()
}


//Reset

function newGame() {
    scoreLeft = 0
    scoreRight = 0
    teamLeft.innerHTML = scoreLeft
    teamRight.innerHTML = scoreRight
    highLeft.style.color = "#acacac"
    highRight.style.color = "#acacac"
}


//Avatars 

let teamAvLeft = document.getElementById("team-av-left")
let teamAvRight = document.getElementById("team-av-right")

function enlargeTeamAvLeft() {
    teamAvLeft.style.transform = `scale(1.1) translateY(${28}px)` 
    teamAvLeft.style.transition = "transform 0.3s"
    teamAvLeft.style.transformOrigin = "center"
    setTimeout(() => {
        teamAvLeft.style.transform = `scale(1) translateY(${28}px)`
    }, 150);
}

function enlargeTeamAvRight() {
    teamAvRight.style.transform = `scale(1.1) translateY(${28}px)` 
    teamAvRight.style.transition = "transform 0.3s"
    teamAvRight.style.transformOrigin = "center"
    setTimeout(() => {
        teamAvRight.style.transform = `scale(1) translateY(${28}px)`
    }, 150);
}

function colorPointsLeft() {
    teamLeft.style.backgroundColor = "#bcbcbc"
    setTimeout(() => {
        teamLeft.style.backgroundColor = "#acacac"
    }, 150);
}

function colorPointsRight() {
    teamRight.style.backgroundColor = "#bcbcbc"
    setTimeout(() => {
        teamRight.style.backgroundColor = "#acacac"
    }, 150);
}


// High Score

let highLeft = document.getElementById("high-left")
let highRight = document.getElementById("high-right")

let currentlyHighlighted = null

function highlightHigherScore() {
    highLeft.style.color = "#acacac"
    highRight.style.color = "#acacac"
    
    if (scoreLeft > scoreRight) {
        highLeft.style.color = "#B5AB3D"
    } else if (scoreRight > scoreLeft) {
        highRight.style.color = "#B5AB3D"
    } else {
        highLeft.style.color = "rgb(180, 60, 60)"
        highRight.style.color = "rgb(180, 60, 60)"
    }
}


// Background Scroll

document.body.addEventListener('mousemove', (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { offsetWidth: width, offsetHeight: height } = document.body
    const moveX = ((mouseX / width) - 0.5) * 10
    const moveY = ((mouseY / height) - 0.5) * 10
    document.body.style.backgroundPosition = `${10 + moveX}% ${10 + moveY}%`
  })
