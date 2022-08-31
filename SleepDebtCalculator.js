function getSleepHours(day) {
    if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  } else if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } 
};

function getActualSleepHours() {
  const day1 = getSleepHours('saturday');
  const day2 = getSleepHours('sunday');
  const day3 = getSleepHours('monday');
  const day4 = getSleepHours('tuesday');
  const day5 = getSleepHours('wednesday');
  const day6 = getSleepHours('thursday');
  const day7 = getSleepHours('friday');
  return day1 + day2 + day3 + day4 + day5 + day6+ day7;
};

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

const calculateSleepDebt = () => {
  if (idealSleepHours < actualSleepHours) {
    const idealDiffOver = actualSleepHours - idealSleepHours;
    console.log(`You have overslept your needed sleep hours by ${idealDiffOver} Hours`);
  } else if (idealSleepHours > actualSleepHours) {
    const idealDiffUnder = idealSleepHours - actualSleepHours;
    console.log(`You have underslept your needed sleep hours by ${idealDiffUnder}`);
  }
};

if (actualSleepHours === idealSleepHours) {
  console.log('The user got the perfect amount of sleep.');
} else if (actualSleepHours > idealSleepHours) {
  console.log('The user got more sleep than needed.');
} else if (actualSleepHours < idealSleepHours) {
  console.log('The user should get some rest.')
};

calculateSleepDebt();
