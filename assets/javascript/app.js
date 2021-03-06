// pseudo code
// create global variable for the game and questions
// create function to start game on click of start button
// create an onclick for the html of each of answer choices
// build in a timer and set timeout for time limit to answer question
// display image or gif of correct answer after each question
    // have image only display for certain amount of time before it moves onto next question
// after all 8 questions are answered display results of the game
// have a start over reset button to restart game (not reload page)

$(document).ready(function(){

    // hide game page, image page, and end game page before start button is hit
    $(".game").hide();
    $(".image-page").hide();
    $(".end-game").hide();

    // All the questions, choices, and answers built into a variable array
    var questionArray = [ {
        // question 1
        question: "Which of the following is NOT a Tim Burton Movie?",
        choices: ["Edward Scissorhands", "Big Fish", "Sleepy Hollow 2", "Beetlejuice"],
        answer: "Sleepy Hollow 2",
    } , {
        // question 2
        question: "Which movie won the academy award for best picture in the year 2000?",
        choices: ["The Green Mile", "American Beauty", "The Cider House Rules", "The Sixth Sense"],
        answer: "American Beauty",
    } , {
        // question 3
        question: "Which country has the most soccer world cup wins?",
        choices: ["Brazil", "Argentina", "Italy", "Germany"],
        answer: "Brazil",
    } , {
        // question 4
        question: "Of these 4 cities, which has the highest population?",
        choices: ["Tokyo", "New York City", "London", "Karachi"],
        answer: "Karachi",
    } , {
        // question 5
        question: "How many known moons does Jupiter have?",
        choices: ["7", "69", "14", "51"],
        answer: "69",
    } , {
        // question 6
        question: "What kind of Adventure did Pee Wee go on?",
        choices: ["Really Small", "Wild", "Big", "Intergalactic"],
        answer: "Big",
    } , {
        // question 7
        question: "What is the most popular Christmas meal of Japan?",
        choices: ["KFC", "Sushi", "Miso Soup", "Dried Octopus"],
        answer: "KFC",
    } , {
        // question 8
        question: "How many licks does it take to get to the tootsie roll center of a tootsie pop?",
        choices: ["1", "999", "57", "The world may never know"],
        answer: "The world may never know",
    }];
    
    // image array and result response array
    var imageArray = ["<img class='img-responsive' src=assets/images/sleepy-hollow.gif>", "<img class='img-responsive' src=assets/images/american-beauty.gif>", "<img class='img-responsive' src=assets/images/brazil.gif>", "<img class='img-responsive' src=assets/images/karachi.jpg>", "<img class='img-responsive' src=assets/images/jupiter-moons.gif>", "<img class='img-responsive' src=assets/images/peewee.gif>", "<img class='img-responsive' src=assets/images/kfc-japan.jpg>", "<img class='img-responsive' src=assets/images/tootsiepop.gif>"];
    var result = ["That is Correct!", "Whoops That's Incorrect!", "Why no Answer???"];

    // global variables
    var timer = 20;
    var intervalId;
    var answersRight = 0;
    var answersWrong = 0;
    var unanswered = 0;
    var questionCounter = 0;
    var imageCounter = 0;


    // when start is clicked the button will remove, and the game html will show
    $(".start-button").on("click", function() {
        $(this).remove();
        $(".game").show();
        $(".image-page").hide();
        countdown();
        runTimer();
        gameQuestions();
    });

    // Function to pick questions and run in game from on click above, and assign counter to question array
    function gameQuestions() {
        $("#question").html(questionArray[questionCounter].question);
        $("#choice1").html(questionArray[questionCounter].choices[0]);
        $("#choice2").html(questionArray[questionCounter].choices[1]);
        $("#choice3").html(questionArray[questionCounter].choices[2]);
        $("#choice4").html(questionArray[questionCounter].choices[3]);
    };

    // functions to present the next question after image and correct answer is displayed
    function newQuestion() {
        if (questionCounter < 7) {
            questionCounter++;
            imageCounter++;
            $(".game").show();
            gameQuestions();
            $(".image-page").hide();
            timer = 20;
        } else {
            questionCounter++;
        }
    };

    // Image page if user picks right answer
    function imageRight() {
        $(".game").hide();
        $(".image-page").show();
        $("#result").html(result[0]);
        $("#image").html(imageArray[imageCounter]);
        timer = 24;
        setTimeout(newQuestion, 4000);
        setTimeout(endGame, 4000);        
    };

    // Image page if user picks wrong answer
    function imageWrong() {
        $(".game").hide();
        $(".image-page").show();
        $("#result").html(result[1] + "<br>" + "Correct Answer is: " + questionArray[questionCounter].answer);
        $("#image").html(imageArray[imageCounter]);
        timer = 24;
        setTimeout(newQuestion, 4000);
        setTimeout(endGame, 4000);  
    };

    // Image page is timer runs out with no answer selected
    function imageNoAnswer() {
        $(".game").hide();
        $(".image-page").show();
        $("#result").html(result[2] + "<br>" + "Correct Answer is: " + questionArray[questionCounter].answer);        
        $("#image").html(imageArray[imageCounter]);
        timer = 24;
        setTimeout(newQuestion, 4000);
        setTimeout(endGame, 4000);  
    };

       
    // create on click for each of the 4 answer choice buttons, store results, and run image page functions
    $("#choice1").on("click", function() {
        if (questionArray[questionCounter].choices[0] === questionArray[questionCounter].answer) {
            answersRight++;
            imageRight();
        } else {
            answersWrong++;
            imageWrong();
        };
    });

    $("#choice2").on("click", function() {
        if (questionArray[questionCounter].choices[1] === questionArray[questionCounter].answer) {
            answersRight++;
            imageRight();
        } else {
            answersWrong++;
            imageWrong();
        }
    });

    $("#choice3").on("click", function() {
        if (questionArray[questionCounter].choices[2] === questionArray[questionCounter].answer) {
            answersRight++;
            imageRight();
        } else {
            answersWrong++;
            imageWrong();
        }
    });

    $("#choice4").on("click", function() {
        if (questionArray[questionCounter].choices[3] === questionArray[questionCounter].answer) {
            answersRight++;
            imageRight();
        } else {
            answersWrong++;
            imageWrong();
        }
    });

    // final results of the game, will show after timeout of final image page
    function endGame() {
        if (questionCounter > 7) {
            $(".game").hide();
            $(".image-page").hide();
            $(".end-game").show();
            $("#score").html("Correct Answers: " + answersRight + "<br>" + "Incorrect Answers: " + answersWrong + "<br>" + "Unanswered: " + unanswered);
            // couldnt get timer to return and stop on endgame, so I set an excessively long timer to avoid weirdness happening until game is restarted #cheapfix
            timer = 1000;
        }
    };

    // reset button to start game over on the end game page
    $("#reset").on("click", function() {
        $(".game").show();
        $(".end-game").hide();
        timer = 20;
        answersRight = 0;
        answersWrong = 0;
        unanswered = 0;
        questionCounter = 0;
        imageCounter = 0;
        countdown();
        gameQuestions();
    });


    // countdown function for the question timer to run from 20 seconds down to 0
    function countdown() {
        timer--;
        $("#timer").html("Time Left: " + timer);
        if (timer == 0) {
            unanswered++;
            imageNoAnswer();
        }
    };

    // function to decrease the time down by 1 second, will begin to run once start is clicked
    function runTimer() {
        intervalId = setInterval(countdown, 1000);
    };


});