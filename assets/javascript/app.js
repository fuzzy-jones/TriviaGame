// pseudo code
// create global variable for the game and questions
// create function to start game on click of start button
// create a function for each question so that it triggers new question after response or time up
// create an onclick for the html of each of answer choices
// build in a timer and set timeout for time limit to answer question
// display image or gif of correct answer after each question
    // have image only display for certain amount of time before it moves onto next question
// after all 8 questions are answered  display results of the game
// have start over button to restart game (not reload page)

$(document).ready(function(){

    $(".game").hide();

    var questions = [ {
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
        question: "What is the traditional Christmas meal of Japan?",
        choices: ["KFC", "Sushi", "Miso Soup", "Dried Octopus"],
        answer: "KFC",
    } , {
        // question 8
        question: "How many licks does it take to get to the tootsie roll center of a tootsie pop?",
        choices: ["1", "999", "57", "The world may never know"],
        answer: "The world may never know",
    }];
    
    var images = ["<img src=assets/images/sleepy-hollow.gif>", "<img src=assets/images/american-beauty.gif>", "<img src=assets/images/brazil.gif>", "<img src=assets/images/karachi.jpg>", "<img src=assets/images/jupiter-moons.gif>", "<img src=assets/images/peewee.gif>", "<img src=assets/images/kfc-japan.jpg>", "<img src=assets/images/tootsiepop.gif>"];

    var timer = 20;
    var intervalId;
    var answersRight = 0;
    var answersWrong = 0;
    var unanswered = 0;

    // when start is click the button with hide and the game html will show
    $(".start-button").on("click", function() {
        $(this).remove();
        $(".game").show();
        countdown();
        runTimer();
    });

    // countdown function for the question timer to run from 20 seconds down to 0
    function countdown() {
        timer--;
        $("#timer").html("Time Left: " + timer);
        if (timer == 0) {
            // change this to go to next question later
            alert("Times Up");
        }
    };
    // function to decrease the time down by 1 second, will begin to run once start is clicked
    function runTimer() {
        intervalId = setInterval(countdown, 1000);
    };

    // create a function to pick questions and run in game
    function gameQuestions() {
        for (var i = 0; i < questions.length; i++) {
        
        }
    };

    // console.log(questions[0]);


    // $(".game").html(images[7]);

});