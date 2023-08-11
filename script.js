var score = 0;
let clicked;
function makeBubble() {
    let clutter = "";
    let tl = gsap.timeline();
    tl.to("#pbtm",{
    y:0,
    duration: .5,
    ease: Expo.easeInOut
});

    for (let i = 1; i <= 102; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
    let timer = 60;
    let timeInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
        } else {
            clearInterval(timeInterval);
            document.querySelector("#pbtm").innerHTML = `<h1 onclick="reset()" id = "timeOver">Your Final Score = ${score}.<br> Time's Up !</h1>`;
        }
        let time = document.querySelector("#timerVal");
        time.innerHTML = `${timer}`;
    }, 1000);
}
function makeNewHit() {
    document.querySelector("#hit").textContent = `${Math.floor(Math.random()*10)}`;
    console.log(document.querySelector("#hit").textContent);
}
console.log("hit= " + hit);
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").innerHTML = `${score}`;
}
document.querySelector("#pbtm")
.addEventListener("click", function (details) {
    clicked = Number(details.target.textContent);
    let hit = Number(document.querySelector("#hit").textContent);
  if (clicked === hit) {
    increaseScore();
    makeNewHit();
    makeBubble();
    gsap.from("#pbtm",{
        y:'-100',
        opacity:0,
        duration: .2,
        ease: Expo.easeInOut
    });
  } else {
    console.log(hit,clicked)
    makeNewHit();
    makeBubble();
    gsap.from("#pbtm",{
        y:'-100',
        opacity:0,
        duration: .2,
        ease: Expo.easeInOut
    });
  }
});

function reset() {
    score = 0;
    document.querySelector("#scoreVal").textContent = score;
    makeBubble();
    gsap.from("#pbtm",{
        y:'1000',
        duration: .2,
        ease: Expo.easeInOut
    });
    makeNewHit();
    runTimer();
}

makeNewHit();
makeBubble();
runTimer();
