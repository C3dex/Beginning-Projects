let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (registeredEarly && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}, and you will be racing at 9:30 AM.`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}, and you will be racing at 11:00 AM`); 
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}, and you will be racing at 12:30 PM`);
} else (runnerAge === 18) 
  console.log(`Go to the registration desk to get your race number!`);

