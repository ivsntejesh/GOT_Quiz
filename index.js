var readlineSync = require('readline-sync'); 

var QuestionArray = {
  ques: ["The drummer for which famous band made a cameo appearance during the Red Wedding?",
  "How many episodes of Game of Thrones are there in total?",
  "Which character appears in more episodes than any other?",
  "What is the name of Jon Snow’s direwolf?",
  "Who is king of Westeros at the very start of the show?"], 

  ans: ["Coldplay", "73", "Tyrion Lannister", "Ghost", "Robert Baratheon"]
}

var score = 0;

function checkQ(Question, Answer){
  var UserAns = readlineSync.question(Question + "\n");

  if(UserAns.toLowerCase() === Answer.toLowerCase()){
    score = score + 10;
    console.log("You are right!")
  }
  else{
    console.log("You are wrong");
    console.log("The correct answer is " + Answer + "\n");
    score = score - 5;
  }

  console.log("Your score is " + score + "\n");
}

console.log("Welcome to GOT quiz" + "\n");
var name = readlineSync.question("Enter your name: ");
console.log("Welcome " + name);

console.log("For every correct answer you get 10 points" + "\n" + 
  "For every wrong answer you loose 5 points");

console.log("Let's start the game!!" + "\n" + "\n")

for(var i = 0; i < 5; i = i + 1){
  checkQ(QuestionArray.ques[i], QuestionArray.ans[i]);
}

console.log("Your final score is: " + score + "!!");