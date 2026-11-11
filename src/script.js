const begin = document.getElementById("begin")
const game = document.getElementById("game")
const pick = document.getElementById("pick")
const retry = document.getElementById("retry")
const after = document.getElementById("after")
const playerChoice = document.getElementById("player-choice")
const computerChoice = document.getElementById("computer-choice")
const winner = document.getElementById("who-won")
const play = document.getElementById("play")

begin.onclick = () => {
    game.hidden = false; 
    begin.hidden = true;
}

const player = {
    _choice: '',
    _wins: false,
    have_played: false,
    /* 
    a method is used here because the value of a property when you
    create an object is initialized as soon as the object is created

    By creating a method i can ensure that the object is only created when the method
    is called, so the properties doesn't outright evaluate straight to false
    */
    wonWith() {
        return {
            rock: this._choice === "Rock" && computer.choice === "Scissors",
            paper: this._choice === "Paper" && computer.choice === "Rock",
            scissors: this._choice === "Scissors" && computer.choice === "Paper",
        }
    },

    get choice() {
        return this._choice
    },

    set choice(value) {
        this._choice = value
    },

    get wins() {
        return this._wins
    },

    set wins(value) {
        this._wins = value
    },

    selectMove(selected) {
        this._choice = selected
    },
}

const computer = {
    _choice: '',

    get choice() {
        return this._choice
    },

    selectMove() {
        const random = Math.floor(Math.random() * 3)

        switch (random) {
            case 0:
                this._choice = 'Rock'
            break

            case 1:
                this._choice = "Paper"
            break

            case 2:
                this._choice = "Scissors"
            break
        }
    }
}

const setMoves = ({ target }) => {
    if (target.id === "pick" || player.have_played) return

    play.hidden = false
    player.selectMove(target.textContent)
}

const determineWinner = () => {
    if (player.have_played) return winner.textContent = "You have already played."

    computer.selectMove()

    playerChoice.textContent = `Player selected ${player.choice}`
    computerChoice.textContent = `The Computer selected ${computer.choice}`
        
    if(player.wonWith().rock || player.wonWith().paper || player.wonWith().scissors) {
        player.wins = true
    } else if (player.choice === computer.choice) {
        winner.textContent = "Draw!"
        player.have_played = true
        after.hidden = false

        return;
    }
    
    player.wins ? winner.textContent = "Player wins!" : winner.textContent = "Computer wins!"
    player.have_played = true
    after.hidden = false
}

const resetGame = () => {
    player.choice = ""
    player.have_played = false
    player.wins = false

    playerChoice.textContent = ''
    computerChoice.textContent = ''
    winner.textContent = ''

    after.hidden = true
    play.hidden = true
}

pick.addEventListener("click", setMoves)
play.addEventListener("click", determineWinner)
retry.addEventListener("click", resetGame)