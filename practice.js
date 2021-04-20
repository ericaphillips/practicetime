// Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

// If you need help, here's a reference:

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function take(arr, n) {
  return arr.slice(0, n)

}

// Write function bmi that calculates body mass index (bmi = weight / height^2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

const calculateBmi = (weight, height) => {
  
    bmi = (weight * 703) / (height * height)
  
    if (bmi <= 18.5) {
      return "Underweight"
    }
    else if (bmi <= 25.0) {
      return "Normal"
    } 
  
    else if (bmi <= 30.0) {
      return "Overweight"
    }
  
    else if (bmi > 30) {
      return "Obese"
    }
  }
  
  const test = calculateBmi(200, 74)
  
  console.log(test)

  // Your function takes two arguments:

// current father's age (years)

// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

const kidAge = 5
const dadAge = 31

const twiceAsOld = (d, s) => Math.abs(d - 2 * s);

const test = twiceAsOld(31, 10)

console.log(test)