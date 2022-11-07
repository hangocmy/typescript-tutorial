/*
//Optional parameters to a function

function getName(firstname: string, lastname?: string): string {
  return firstname + lastname;
}

let a = getName("John"); // will return Johnundefined.
let b = getName("John", "Harry"); // will return JohnHarry
let c = getName("John", "H", "Harry"); // error TS2554: Expected 1-2 arguments, but got 3.
*/

/*
//Assign Default Values to Params

function getName(firstname: string, lastname = "Harry"): string {
  return firstname + lastname;
}

let a = getName("John"); // will return JohnHarry
let b = getName("John", "H"); // will return JohnH
*/

//Rest Parameters
function testFunc(a: string, ...arr: string[]): string {
  return a + arr.join("");
}

let a = testFunc("Monday", "Tuesday", "Wednesday", "Thursday");
console.log(a);
// will get output as MondayTuesdayWednesdayThursday