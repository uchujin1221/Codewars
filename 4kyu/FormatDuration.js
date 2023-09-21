// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.
// Detailed rules

// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {
  // Complete this function
  console.log(seconds);

  let input = seconds;
  let sec = seconds <= 59 ? seconds : 0;
  let min = 0;
  let hour = 0;
  let day = 0;
  let year = 0;
  let output = "";

  if (seconds === 0) return "now";

  // setup min and sec
  while (input >= 60) {
    sec = input % 60;
    input -= 60;
    min++;
  }

  // setup hour
  while (min >= 60) {
    min -= 60;
    hour++;
  }

  // setup day
  while (hour >= 24) {
    hour -= 24;
    day++;
  }

  // setup year
  while (day >= 365) {
    day -= 365;
    year++;
  }

  // Process year, if any
  output = year ? (year > 1 ? year + " years" : year + " year") : "";
  output += year && (day || hour || min || sec) ? ", " : "";

  // Process day, if any
  output += day ? (day > 1 ? day + " days" : day + " day") : "";
  output += day && (hour || min || sec) ? ", " : "";

  // Process hour, if any
  output += hour ? (hour > 1 ? hour + " hours" : hour + " hour") : "";
  output += hour && min && sec ? ", " : hour && (min || sec) ? " and " : "";

  // Process minute, if any
  output += min ? (min > 1 ? min + " minutes" : min + " minute") : "";
  output += min && sec ? " and " : "";

  // Process second, if any
  output += sec ? (sec > 1 ? sec + " seconds" : sec + " second") : "";

  console.log(`${output}`);
  return output;
}
