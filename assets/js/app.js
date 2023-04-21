import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            // initolasing ths dices variables with value if 1 as placeholder
            pDice1: 1,
            pDice2: 1,
            pDice3: 1,
            dDice1: 1,
            dDice2: 1,
            dDice3: 1,
            //the roll totall
            pTotal: 0,
            dTotal: 0,
            //score for the player
            score: 200,
            //the bet
            bet: 0,
            resultMessage: '',

        }
    },
    methods: {
        //function to get random number from 1 to 6
        getRandomDice: function () {
            return Math.floor(Math.random() * (7 - 1) + 1)
        },
        //get dices numbers
        dices() {
            this.pDice1 = this.getRandomDice()
            this.pDice2 = this.getRandomDice()
            this.pDice3 = this.getRandomDice()
            this.dDice1 = this.getRandomDice()
            this.dDice2 = this.getRandomDice()
            this.dDice3 = this.getRandomDice()
        },
        //calculate total of all dice
        dicesTotal() {
            this.pTotal = this.pDice1 + this.pDice2 + this.pDice3;
            this.dTotal = this.dDice1 + this.dDice2 + this.dDice3;
        },
        //the wining and losing cenditions 
        result() {
            //losing cenditions
            if (this.pTotal > 12 || this.dTotal > this.pTotal && this.dTotal <= 12) {
                this.score -= this.bet;
                this.bet = 0;
                this.resultMessage = 'sorry you lost your bet try agin'

            }
            //wining cenditions
            else if (this.pTotal <= 12 && this.dTotal < this.pTotal || this.dTotal > 12 && this.pTotal <= 12) {
                this.score += this.bet;
                this.bet = 0;
                this.resultMessage = 'congratulations you win play more'
            }
            //draw cenditions
            else if (this.pTotal <= 12 && this.dTotal === this.pTotal) {
                this.resultMessage = 'You Draw with the dealer try agin'
            }
            else if (this.pDice1 === 4 && this.pDice2 === 4 && this.pDice3 === 4 && this.dTotal < 12) {
                this.score += this.bet * 2;
                this.bet = 0;
                this.resultMessage = 'congratulations you win double play more'
            }
            //gameover cenditions
            if (this.score === 0) {
                this.resultMessage = 'gameover you lost all your money'
            }
        },
        // the roll function 
        roll() {
            this.dices();
            this.dicesTotal();
            this.result();
        },


        //method to chang the image of the dice to the currant value
        diceImg(dN) {
            let url = ''
            switch (dN) {
                case 'p1':
                    url = `assets/img/dice-${this.pDice1}.svg`;
                    break;
                case 'p2':
                    url = `assets/img/dice-${this.pDice2}.svg`;
                    break;
                case 'p3':
                    url = `assets/img/dice-${this.pDice3}.svg`;
                    break;
                case 'd1':
                    url = `assets/img/dice-${this.dDice1}.svg`;
                    break;
                case 'd2':
                    url = `assets/img/dice-${this.dDice2}.svg`;
                    break;
                case 'd3':
                    url = `assets/img/dice-${this.dDice3}.svg`;
                    break;
            }
            return url
        }
    },
    computed: {


    }
}).mount('#app')