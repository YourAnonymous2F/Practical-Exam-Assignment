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