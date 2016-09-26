var gameObject = {
    // start date/time of game
    gameSetup: {
        startTime: null,
        dieOne: null,
        dieTwo: null,
        // array of game rounds - Each round lasts until the user wins, so one round should have the start time of that round plus the number of rolls of the dice that have occurred for that round.
        gameRounds: [],
        rollBtn: null,
        gameMessage: null,
    },

    values: {
        startTime: 0,
        dieOne: 0,
        dieTwo: 0,
        gameMessage: null
    },



    getStartTime: function() {

    var rollTime = new Date();

    var rollTimeYear = rollTime.getYear() + 1900;
    var rollTimeMonth = rollTime.getMonth() + 1;
    var rollTimeDate = rollTime.getDate();
    var rollTimeHour = rollTime.getHours();
    var rollTimeMinutes = rollTime.getMinutes();

    if (rollTimeMinutes < 10) {
      rollTimeMinutes = "0" + rollTimeMinutes;
    }

    var rollTimeString = "Game Started " + rollTimeYear + "-" + rollTimeMonth + "-" + rollTimeDate + " at " + rollTimeHour + ":" + rollTimeMinutes;

    this.values.startTime = rollTimeString;
    this.gameSetup.startTime.innerHTML = this.values.startTime;

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
        } else {
          this.values.gameMessage = "Try Again";
          this.gameSetup.gameMessage.innerHTML = this.values.gameMessage;
        }

        this.getStartTime();

    },

    // display start date/time at bottom of page when page is loaded

    defineGameSetup: function() {
        this.gameSetup.rollBtn = document.querySelector(".roll-dice-btn");
        this.gameSetup.dieOne = document.getElementById("one");
        this.gameSetup.dieTwo = document.getElementById("two");
        this.gameSetup.startTime = document.querySelector(".game-date-time");
        this.gameSetup.gameMessage = document.querySelector(".win-lose-message");
    },


    init: function() {

        this.defineGameSetup();

        this.gameSetup.rollBtn.addEventListener("click", this.rollDice.bind(this));
    }

}

gameObject.init();
