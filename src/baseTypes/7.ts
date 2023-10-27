/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
const currentDay = DayOfWeek.Saturday;
//const currentDay = DayOfWeek.Monday;

function isWeekend(day: DayOfWeek): boolean {
//  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday ) {
//   return true
//  }
//  else  return false;
return (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday);
}

const currentDayIs = isWeekend(currentDay) ? 'Current day is day off' : 'Current day is working';
console.log(currentDayIs);
