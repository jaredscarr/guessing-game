var correct = 0;
var answer1, answer2, answer3, answer4;
var question1, question2, question3;
var years = 0;

var name = prompt('Hello, what is your name?');
alert('Hello, ' + name + '.' + '\nPlease answer the following questions with a yes or no.');

//this is where you left off! playing with a do while loop. It works!
// add with resetting the i to 0. put do {} while around the entire question for 2, 3 and 4
var i = 0;
do {

  question1 = prompt('Does Jared like camping?');
  answer1 = 'yes';
  question1 = question1.toLowerCase();

  if (question1 === 'yes' || question1 === 'y') { // this process should be a function
    question1 = 'yes';
    i = 2;
  } else if (question1 === 'no' || question1 === 'n') {
    question1 = 'no';
    i = 2;
  } else {
    alert("I'm sorry " + name + " that is not a valid input.");
    i = 0;
  }

} while (i < 1);

// end while loop. also perhaps the end of the function

//below code all works but no loops have been implemented.

/*if (question1 === answer1) {
  alert("That's right, " + name + '!');
  console.log ('The user guessed correctly.');
  correct += 1;
} else {
  alert("I'm sorry " + name + '. He loves camping.');
  console.log('the user guessed incorrectly.');
}


question2 = prompt('Does Jared have any pets?');
answer2 = 'no';
question2 = question2.toLowerCase();

if (question2 === 'yes' || question2 === 'y') {
  question2 = 'yes';
} else if (question2 === 'no' || question2 === 'n') {
  question2 = 'no';
} else {
    alert("I'm sorry " + name + " that is not a valid input.");
}

if (question2 === answer2) {
  alert("That's right, " + name + '!');
  console.log ('The user guessed correctly.');
  correct += 1;
  } else {
    alert("I'm sorry " + name + '. Jared does not have any pets yet.');
    console.log('the user guessed incorrectly.');
    }

question3 = prompt('Does Jared enjoy cooking?');
answer3 = 'yes';
question3 = question3.toLowerCase();

if (question3 === 'yes' || question3 === 'y') {
  question3 = 'yes';
} else if (question3 === 'no' || question3 === 'n') {
  question3 = 'no';
} else {
    alert("I'm sorry " + name + " that is not a valid input.");
}

if (question3 === answer3) {
  alert("That's right, " + name + '!');
  console.log ('The user guessed correctly.');
  correct += 1;
} else {
    alert("I'm sorry " + name + '. Jared actually loves to cook.');
    console.log('the user guessed incorrectly.');
}

answer4 = 12;

years = parseInt(prompt('How many years did Jared spend in the hospitality industry?'));

// if (years === NaN) {
//   alert("I'm sorry that is not valid input.");
// }

if (years === answer4) {
  alert('That is right ' + name + '! Way to go!');
  correct += 1;
} else if (years < 12) {
  alert('You guessed too low.');
} else if (years > 12) {
  alert('You guessed too high.');
}


alert('For question 1 you guessed ' + question1 + '. The correct answer was ' + answer1 + '.');
alert('For question 2 you guessed ' + question2 + '. The correct answer was ' + answer2 + '.');
alert('For question 3 you guessed ' + question3 + '. The correct answer was ' + answer3 + '.');
alert('For question 4 you guessed ' + years + '. The correct answer was ' + answer4 + '.');

alert('You got ' + correct + ' answers correct.');*/
