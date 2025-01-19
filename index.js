// Challange 1
function challenge1(width, height) {
  let rectangleString = "";
  // Your code
  for (let i = 0; i < width; i++) {
    rectangleString += "*";
  }
  let old_rect = rectangleString;
  for (let i = 0; i < height - 1; i++) {
    rectangleString = rectangleString + "\n" + old_rect;
  }
  return rectangleString;
}

let result = "Challenge 1: \n" + challenge1(4, 4);
console.log(result);

// Challange 2
function challenge2(array) {
  let temp_array = [];
  for (let i = 0; i < array.length; i++) {
    temp_array[i] = array[array.length - (i + 1)];
  }
  return temp_array;
}

let array_c2 = [1, 2, 3, 4];
array = challenge2(array_c2);
console.log("\nChallenge 2:\n");
console.log(array);

//Challange 3
function challange3(students) {
  let average = 0;
  for (let i = 0; i < students.length; i++) {
    average += students[i];
  }
  return average / students.length;
}

let array_c3 = [55, 91, 77, 100];
array_c3 = challange3(array_c3);
console.log("\nChallenge 3:\n");
console.log(array_c3);

//Challange 4
function challange4(text, char) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (char == text[i]) {
      count++;
    }
  }
  return count;
}

let text = "Hello Everyone";
let char = "o";
let result4 = challange4(text, char);
console.log("\nChallenge 4:\n");
console.log(result4);

//Challenge 5
function challenge5(text) {
  let count = 1;
  for (let i = 0; i < text.length - 1; i++) {
    if (text[i] == " " && text[i + 1] != " ") {
      count++;
    }
  }
  return count;
}

let sentence = "Hello Wolrd ?";
console.log("\nChallenge 5:\n");
console.log(challenge5(sentence));

//Challenge 6
function challenge6(votes) {
  let a = 0;
  let b = 0;
  let c = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] == "A") {
      a++;
    } else if (votes[i] == "B") {
      b++;
    } else if (votes[i] == "C") {
      c++;
    }
  }
  if (a > b && a > c) {
    return "A is the winner.";
  } else if (c > a && c > b) {
    return "C is the winner.";
  } else {
    if (a == b && a == c) {
      return "This vote results in a Draw.";
    } else if (a == b && a > c) {
      return "A and B are both the winners.";
    } else if (a == c && a > b) {
      return "A and C are both the winners.";
    } else if (c == b && c > a) {
      return "C and B are both the winners.";
    } else {
      return "B is the winner.";
    }
  }
}

let votes = ["A", "A", "B", "B", "C", "C"];
console.log("\nChallenge 6:\n" + challenge6(votes));
