var gameObject = {

    gameSetup: {
        startTime: null,
        dieOne: null,
        dieTwo: null,
        gameDuration: null,
        rollBtn: null,
        gameMessage: null,
    },

    values: {
        startTime: 0,
        // startTimeSeconds: 0,
        dieOne: 0,
        dieTwo: 0,
        gameMessage: null,
        gameDuration: null,
        gameRounds: [],
        // startDate: 0
    },


    getGameRounds: function() {

        var numLose = this.values.gameRounds.length;
        var endTime = new Date();
        var endTimeSeconds = endTime.getTime() / 1000;
        var gameDuration = Math.round(endTimeSeconds - this.values.startTimeSeconds);

        var gameDurationString = "(It took you " + numLose + " tries and " + gameDuration + " seconds)";

        this.values.gameDuration = gameDurationString;
        this.gameSetup.gameDuration.innerHTML = this.values.gameDuration;
    },


    //  Function for rolling the dice

    rollDice: function() {

        var rollOne = Math.floor(Math.random() * 6) + 1;
        var rollTwo = Math.floor(Math.random() * 6) + 1;

        this.values.dieOne = rollOne;
        this.values.dieTwo = rollTwo;
        var rollTotal = rollOne + rollTwo;

        this.gameSetup.dieOne.innerHTML = this.values.dieOne;
        this.gameSetup.dieTwo.innerHTML = this.values.dieTwo;

        if (rollTotal == 7 || rollTotal == 11) {
            this.values.gameMessage = "Winner!";
            this.gameSetup.gameMessage.innerHTML = this.values.gameMessage;
            this.values.win = true;
            this.getGameRounds();
        } else {
            this.values.gameMessage = "Try Again";
            this.gameSetup.gameMessage.innerHTML = this.values.gameMessage;
            this.values.gameRounds = gameRounds;
            this.gameSetup.gameRounds = this.values.gameRounds;
        }

    },

    // Defining HTML elements

    defineGameSetup: function() {
        this.gameSetup.rollBtn = document.querySelector(".roll-dice-btn");
        this.gameSetup.dieOne = document.getElementById("one");
        this.gameSetup.dieTwo = document.getElementById("two");
        this.gameSetup.startTime = document.querySelector(".game-date-time");
        this.gameSetup.gameMessage = document.querySelector(".win-lose-message");
        this.gameSetup.gameDuration = document.querySelector(".game-counter");
    },

    // Initiate game

    init: function() {

        this.defineGameSetup();

        this.gameSetup.rollBtn.addEventListener("click", this.rollDice.bind(this));
        this.gameSetup.rollBtn.addEventListener("click", this.getGameRounds.bind(this));

    // Start time on page load & display bottom

        this.values.startTime = new Date();
        var rollTimeYear = this.values.startTime.getYear() + 1900;
        var rollTimeMonth = this.values.startTime.getMonth() + 1;
        var rollTimeDate = this.values.startTime.getDate();
        var rollTimeHour = this.values.startTime.getHours();
        var rollTimeMinutes = this.values.startTime.getMinutes();
        var rollTimeSeconds = this.values.startTime.getTime() / 1000;

        if (rollTimeMinutes < 10) {
            rollTimeMinutes = "0" + rollTimeMinutes;
        }

        var rollTimeString = "Game Started " + rollTimeYear + "-" + rollTimeMonth + "-" + rollTimeDate + " at " + rollTimeHour + ":" + rollTimeMinutes;

        this.values.startTimeSeconds = rollTimeSeconds;
        this.values.startTime = rollTimeString;
        this.gameSetup.startTime.innerHTML = this.values.startTime;

    }

}

gameObject.init();
