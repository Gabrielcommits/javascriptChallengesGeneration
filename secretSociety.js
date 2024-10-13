// Secret Society
 
// Find the name of a secret society based on the first letter of each member's name.
 
// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.

// in alphabetical order
// const arr = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];

// const findSecretSociety = (arr) => {
//   const sortedArr = arr.sort();
//   const index = 0;
//   let string = ''
//   sortedArr.forEach(
//     (element) => string = string + element.charAt(index)
//   );

//   console.log(string)
// }

// findSecretSociety(arr)