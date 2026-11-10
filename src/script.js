const begin = document.getElementById("begin")
const game = document.getElementById("game")
const startGame = document.getElementById("start-game")
const playerChoice = document.getElementById("player-choice")
const computerChoice = document.getElementById("computer-choice")
const winner = document.getElementById("who-won")

begin.onclick = () => game.hidden = false

const player = {
    _choice: '',
    _wins: false,

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

    selectMove(target) {
        this._choice = target.textContent
    }
}

const computer = {
    _choice: '',
    _wins: false,
    _random: Math.floor(Math.random() * 3),

    get choice() {
        return this._choice
    },

    get wins() {
        return this._wins
    },

    set wins(value) {
        this._wins = value
    },

    selectMove() {
        switch (this._random) {
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

}