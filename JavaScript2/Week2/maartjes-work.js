'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  
  // Map the tasks to durations in hours.
  const mappedDuration = tasks.map((tasks) => tasks.duration / 60);
  console.log(mappedDuration);

  // Filter out everything that took less than two hours (i.e., remove from the collection)
  const filteredTasks = mappedDuration.filter((hours) => hours >= 2);
  console.log(filteredTasks);

  // Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.  
  const totalEarnings = filteredTasks.reduce(
    (accumulator, hours) =>
    accumulator + (hours * hourlyRate), 
    0,
  );
  return totalEarnings
};

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// Add code to convert `earnings` to a string rounded to two decimals (euro cents)
console.log(`Maartje has earned €${earnings.toFixed(2)}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
