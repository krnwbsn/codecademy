let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 15;
if (age > 18 && (raceNumber += 1000)) {
  console.log('registered');
} else {
  console.log('not registered');
}
if (age > 18 && registeredEarly == true) {
  console.log('You will race at 9.30 am');
} else if (age > 18 && registeredEarly == false) {
  console.log('You will race at 11.00 am');
} else if (age < 19) {
  console.log('You will race at 12.30 pm');
} else {
  console.log('Not registered')
}
