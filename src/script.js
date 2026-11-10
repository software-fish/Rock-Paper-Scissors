const begin = document.getElementById("begin")
const game = document.getElementById("game")
const pick = document.getElementById("pick")
const playerChoice = document.getElementById("player-choice")
const computerChoice = document.getElementById("computer-choice")
const winner = document.getElementById("who-won")

begin.onclick = () => game.hidden = false

const player = {
    _choice: '',
    _wins: false,
    have_played: false,

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
    }
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

const determineWinner = ({ target }) => {
    if (target.id === "pick") return
    if (player.have_played) return winner.textContent = "You have already played."

    player.selectMove(target.textContent)
    computer.selectMove()

    playerChoice.textContent = `Player selected ${player.choice}`
    computerChoice.textContent = `The Computer selected ${computer.choice}`

    if (player.choice === "Rock" && computer.choice === "Scissors") {
        player.wins = true  
    } else if(player.choice === "Scissors" && computer.choice === "Paper") {
        player.wins = true  
    } else if(player.choice === "Paper" && computer.choice === "Rock") {
        player.wins = true
    } else if (player.choice === computer.choice) {
        winner.textContent = "Draw!"

        return;
    }
    
    player.wins ? winner.textContent = "Player wins!" : winner.textContent = "Computer wins!"
    player.have_played = true
}

pick.addEventListener("click", determineWinner)