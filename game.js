var correct = 0;
/*
var name = prompt('Hello, what is your name?');
alert('Hello, ' + name + '.' + '\nPlease answer the following questions with a yes or no.');

var i = 0;
while (i < 1) {

  var question1 = prompt('Does Jared like camping?');
  var answer1 = 'yes';
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
}

if (question1 === answer1) {
  alert("That's right, " + name + '!');
  console.log ('The user guessed correctly.');
  correct += 1;
} else {
  alert("I'm sorry " + name + '. He loves camping.');
  console.log('the user guessed incorrectly.');
}

i = 0;
while (i < 1) {

  var question2 = prompt('Does Jared have any pets?');
  var answer2 = 'no';
  question2 = question2.toLowerCase();

  if (question2 === 'yes' || question2 === 'y') {
    question2 = 'yes';
    i = 2;
  } else if (question2 === 'no' || question2 === 'n') {
    question2 = 'no';
    i = 2;
  } else {
      alert("I'm sorry " + name + " that is not a valid input.");
  }
}

if (question2 === answer2) {
  alert("That's right, " + name + '!');
  console.log ('The user guessed correctly.');
  correct += 1;
  } else {
    alert("I'm sorry " + name + '. Jared does not have any pets yet.');
    console.log('the user guessed incorrectly.');
    }

i = 0;
while (i < 1) {
  var question3 = prompt('Does Jared enjoy cooking?');
  var answer3 = 'yes';
  question3 = question3.toLowerCase();

  if (question3 === 'yes' || question3 === 'y') {
    question3 = 'yes';
    i = 2;
  } else if (question3 === 'no' || question3 === 'n') {
    question3 = 'no';
    i = 2;
  } else {
      alert("I'm sorry " + name + " that is not a valid input.");
  }
}

if (question3 === answer3) {
  alert("That's right, " + name + '!');
  console.log ('The user guessed correctly.');
  correct += 1;
} else {
    alert("I'm sorry " + name + '. Jared actually loves to cook.');
    console.log('the user guessed incorrectly.');
}

var answer4 = 12;
var years = '';

years = parseInt(prompt('How many years did Jared spend in the hospitality industry?'));
while (years === NaN) {
  if (years === NaN) {
   alert("I'm sorry that is not valid input.");
   years = parseInt(prompt('How many years did Jared spend in the hospitality industry?'));
 }
}

i = 0;

while (i === 0) {
  if (years < answer4) {
    alert('You guessed too low.');
    console.log('User guessed too low.');
    years = parseInt(prompt('How many years did Jared spend in the hospitality industry?'));
  } else if (years > answer4) {
    alert('You guessed too high.');
    console.log('User guessed too high.');
    years = parseInt(prompt('How many years did Jared spend in the hospitality industry?'));
  } else if (years === answer4) {
    alert('That is right ' + name + '! Way to go!');
    console.log('User guessed correctly.');
    correct += 1;
    i = 1;
  }
}


i = 0;
while (i < 1) {
  var question5 = prompt('Does Jared enjoy travel?');
  var answer5 = 'yes';
  question5 = question5.toLowerCase();

  if (question5 === 'yes' || question5 === 'y') {
    question5 = 'yes';
    i = 2;
  } else if (question5 === 'no' || question5 === 'n') {
    question5 = 'no';
    i = 2;
  } else {
      alert("I'm sorry " + name + " that is not a valid input.");
  }
}

if (question5 === answer5) {
  alert("That's right, " + name + '!');
  console.log ('The user guessed correctly.');
  correct += 1;
} else {
    alert("I'm sorry " + name + '. Jared actually loves to cook.');
    console.log('the user guessed incorrectly.');
}

*/

// question 6 working on now

var answer6 = 3;
years = '';

years = parseInt(prompt('For how many years was Jared an athletic trainer?'));
while (years === NaN) {
  if (years === NaN) {
   alert("I'm sorry that is not valid input.");
   years = parseInt(prompt('For how many years was Jared an athletic trainer?'));
 }
}

i = 0;

while (i === 0) {
  if (years < answer6) {
    alert('You guessed too low.');
    console.log('User guessed too low.');
    years = parseInt(prompt('For how many years was Jared an athletic trainer??'));
  } else if (years > answer6) {
    alert('You guessed too high.');
    console.log('User guessed too high.');
    years = parseInt(prompt('For how many years was Jared an athletic trainer??'));
  } else if (years === answer6) {
    alert('That is right ' + name + '! Way to go!');
    console.log('User guessed correctly.');
    correct += 1;
    i = 1;
  }
}

// alert('For question 1 you guessed ' + question1 + '. The correct answer was ' + answer1 + '.');
// alert('For question 2 you guessed ' + question2 + '. The correct answer was ' + answer2 + '.');
// alert('For question 3 you guessed ' + question3 + '. The correct answer was ' + answer3 + '.');
// alert('For question 4 you guessed ' + years + '. The correct answer was ' + answer4 + '.');

// alert('You got ' + correct + ' answers correct.');
