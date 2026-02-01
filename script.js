// 1. Variable Scope Exploration
for (let i = 1; i <= 5; i++) {
  console.log(i)
}
// console.log(i)
// The above code is commented because it will give us error and our code will stop to run
// When I tried to access the counter outside the loop, it displays an error message of i not defined which means the i is scoped/defined inside the for loop only

// To make the counter accessible after the loop, we have to declare i first before the for loop
let i;
for (i = 1; i <= 5; i++) {
  console.log(i)
}
console.log("Final Value:", i)
// The value the loop has as the final value when the loop finishes is 6

// 2. Logical Operators Challenge
function canEnterVenue(age, hasID, hasParentConsent) {
  if (age >= 18 && hasID) {
    return "You can enter because you are above the age limit and has an ID.";
  } 
  else if (age >= 13 && age <= 17 && hasID && hasParentConsent) {
    return "You can enter because you have parent consent and an ID.";
  } 
  else if (age < 13) {
    return "You cannot enter because you are not least 13 years old.";
  } 
  else {
    return "You cannot enter because you do not meet the entry requirements.";
  }
}


console.log(canEnterVenue(25, true, false))
console.log(canEnterVenue(16, true, true))
console.log(canEnterVenue(16, true, false))
console.log(canEnterVenue(10, true, true))
console.log(canEnterVenue(20, false, false))
console.log(canEnterVenue(15, false, false))

// 3. Array Modification Practice
const shoppingCart = ["apple", "bread", "milk"]
console.log(shoppingCart)
shoppingCart.push("eggs")
shoppingCart.push("cheese")
console.log(shoppingCart)
shoppingCart.pop()
console.log(shoppingCart)
shoppingCart[0] = "orange"
console.log(shoppingCart)
// shoppingCart = ["new", "array"] 
// The above code is commented because it will give us error and our code will stop to run
console.log(shoppingCart) 
// Operations that work with const are values that will not change or be reassigned
// The operation that led to an error is the shoppingCart = ["new", "array"] because we already declare shoppingCart as a const which means the value is not changing and we are trying to reassign it to another value again which is giving us the error
// Modifying the contents of the array is adding, removing or changing the value of an array to another item with push, pop and so on while Reassigning here in the exercise given is completely changing the value of the array and assigning another value to it

// 4. Function Return Values Lab
function calculateTax(price, taxRate) {
  return price + taxRate;
}
function formatPrice(amount) {
 return `$${amount}`
}
function processOrder(price, quantity, taxRate) {
  let subTotal = price * quantity;
  let addTax = calculateTax(subTotal, taxRate);
  let formattedPrice = formatPrice(addTax)
  return formattedPrice;
}
console.log(calculateTax(4.90, 2))
console.log(formatPrice(45.99))
const orderTotal = processOrder(25.99, 3, 0.08)
console.log("Your total is:", orderTotal)
// If the return statement is excluded or forgotten we will have undefined which will give us Your total is: undefined as the result.

// 5. Array Loop Analysis Challenge
const scores = [85, 45, 92, 67, 55, 78, 34, 88, 91, 50, 73, 62]; 
let passingCount = 0;
let failingCount = 0;
let highest = scores[0];
let lowest = scores[0];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  const score = scores[i];

  if (score >= 60) {
    passingCount++;
  } else {
    failingCount++;
  }

  if (score > highest) {
    highest = score;
  }

  if (score < lowest){
    lowest = score;
  }

  total += score;
}

const average = total / scores.length;
console.log("Passing:", passingCount); 
console.log("Failing:", failingCount); 
console.log("Highest:", highest); 
console.log("Lowest:", lowest); 
console.log("Average:", average);