var correct = 0;

var name = prompt('Hello, what is your name?');
alert('Hello, ' + name + '.' + '\nPlease answer the following questions with a yes or no.');

function q1() {
  var i = 0;
  var ans1 = document.getElementById('answer1');
  while (i < 1) {

    var question1 = prompt('Does Jared like camping?');
    var answer1 = 'yes';
    question1 = question1.toLowerCase();

    if (question1 === 'yes' || question1 === 'y') {
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
      ans1.innerHTML = "That's right, " + name + '!';
    console.log ('The user guessed correctly.');
    document.getElementById("img1").style.display = "block";
    correct += 1;
  } else {
    ans1.innerHTML = "I'm sorry " + name + '. He loves camping.';
    console.log('the user guessed incorrectly.');
  }
}

function q2() {
  var i = 0;
  var ans2 = document.getElementById('answer2');

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
    ans2.innerHTML = "That's right, " + name + '!';
    console.log ('The user guessed correctly.');
    document.getElementById("img2").style.display = "block";
    correct += 1;
    } else {
      ans2.innerHTML = "I'm sorry " + name + '. Jared does not have any pets yet.';
      console.log('the user guessed incorrectly.');
    }
}

function q3 () {
  var i = 0;
  var ans3 = document.getElementById('answer3');

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
    ans3.innerHTML = "That's right, " + name + '!';
    console.log ('The user guessed correctly.');
    document.getElementById("img3").style.display = "block";
    correct += 1;
  } else {
    ans3.innerHTML = "I'm sorry " + name + '. Jared actually loves to cook.';
    console.log('the user guessed incorrectly.');
  }
}

function q4 () {
  var answer4 = 12;
  //working on why this worked but not in the Chrome console
  var years = parseInt(prompt('How many years did Jared spend in the hospitality industry?'));
  var ans4 = document.getElementById('answer4');

  while (isNaN(years) === true || years.length < 1) {
     alert("I'm sorry that is not valid input.");
     years = parseInt(prompt('How many years did Jared spend in the hospitality industry?'));
  }

  var i = 0;

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
      ans4.innerHTML = 'That is right ' + name + '! Way to go!';
      console.log('User guessed correctly.');
      document.getElementById("img4").style.display = "block";
      correct += 1;
      i = 1;
    }
  }
}


function q5 () {
  var i = 0;
  var ans5 = document.getElementById('answer5');

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
    ans5.innerHTML = "That's right, " + name + '!';
    console.log ('The user guessed correctly.');
    document.getElementById("img5").style.display = "block";
    correct += 1;
  } else {
      ans5.innerHTML = "I'm sorry " + name + '. Jared tries to travel as often as possible';
      console.log('the user guessed incorrectly.');
  }
}

function q6 () {
  var answer6 = 3;
  var ans6 = document.getElementById('answer6');

  var years2 = parseInt(prompt('For how many years was Jared an athletic trainer?'));
  while (isNaN(years2) === true || years2.length < 1) {
     alert("I'm sorry that is not valid input.");
     years2 = parseInt(prompt('For how many years was Jared an athletic trainer?'));
  }

  var i = 0;

  while (i === 0) {
    if (years2 < answer6) {
      alert('You guessed too low.');
      console.log('User guessed too low.');
      years2 = parseInt(prompt('For how many years was Jared an athletic trainer??'));
    } else if (years2 > answer6) {
      alert('You guessed too high.');
      console.log('User guessed too high.');
      years2 = parseInt(prompt('For how many years was Jared an athletic trainer??'));
    } else if (years2 === answer6) {
      ans6.innerHTML = 'That is right ' + name + '! Way to go!';
      console.log('User guessed correctly.');
      document.getElementById("img6").style.display = "block";
      correct += 1;
      i = 1;
    }
  }
}

q1();
q2();
q3();
q4();
q5();
q6();

