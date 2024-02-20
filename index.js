
const score = document.querySelector('.score span');
const states = document.querySelectorAll('.state');
const playBtn = document.querySelector('.buttons .play');
const stopBtn = document.querySelector('.buttons .stop');
let usedStates = [];
let gameOver = false;
let state; 
let imagePlant; 
let imageVolume; 
let imageTrump;

playBtn.addEventListener("click", () => {
    playBtn.style.display = "none";
    stopBtn.style.display = "inline-block";

    let randomState;
    let points = 0;

    function endofGame() {
        if (score > 25) {
            alert("You won! Trump doesn't convince enough people to build the coal plants!");
        } else if (usedStates.length ===  88) {
            alert("You lost! Trump convinced Americans to build coal plants across the country!");
        }
    }

    const startGame = setInterval(() => {
        do {
            randomState = Math.floor(Math.random() * 88);
        } while (usedStates.includes(randomState));
        usedStates.push(randomState);
        state = states[randomState];

        let imageTrump = document.createElement("img");
        imageTrump.setAttribute("src", "images/trump.png");
        imageTrump.setAttribute("class", "trump");
        state.appendChild(imageTrump);

        setTimeout(() => {
            state.removeChild(imageTrump);
            let imagePlant = document.createElement("img");
            imagePlant.setAttribute("src", "images/plant.png");
            imagePlant.setAttribute("class", "plant");
            state.appendChild(imagePlant);
                }, 1100);

        window.addEventListener("click", (e) => {
            if (e.target.classList.contains("trump")) {
                score.innerText = ++points;
                let imageVolume = document.createElement("img");
                imageVolume.setAttribute("src", "images/volumeoff.png");
                imageVolume.setAttribute("class", "volumeoff");
                state.appendChild(imageVolume);
            }
        });

        endofGame();

    }, 1200);

    stopBtn.addEventListener("click", () => {
        clearInterval(startGame);
        stopBtn.style.display = "none";
        playBtn.style.display = "inline-block";
        score.innerText = 0;
    });
}