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

        }
    },
    methods: {
        //function to get random number from 1 to 6
        getRandomDice: function () {
            return Math.floor(Math.random() * (7 - 1) + 1)
        },
        // the roll function to make the dice random numbers
        roll() {
            this.pDice1 = this.getRandomDice()
            this.pDice2 = this.getRandomDice()
            this.pDice3 = this.getRandomDice()
            this.dDice1 = this.getRandomDice()
            this.dDice2 = this.getRandomDice()
            this.dDice3 = this.getRandomDice()
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