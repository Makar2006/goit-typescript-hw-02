/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(weekDay): boolean {
  if (weekDay === Days.Saturday || weekDay === Days.Sunday) {
    return true;
  }
  return false;
  
}
