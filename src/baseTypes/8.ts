/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

// type Gender = {
//   [key: string]: string;
// };

// const myGender: Gender = {
//   male: 'male',
//   female: 'female',
// };

// OR

type Gender = 'male' | 'female';

let myGender: Gender = 'male';

export {};
