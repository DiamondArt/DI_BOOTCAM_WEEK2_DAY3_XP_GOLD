
/*************************************************
 *     EXERCICE XP-GOLD
 * ------------------------------------
 * @author MELISSA KOUADIO <angemelisk@gmail.com>
 * @link <https://github.com/DiamondArt>
 * 
 * ***********************************************/
/* 

/* 
|Exercise 1 : Divisible By Three
|-------------------------------
|Loop through the array above and determine whether or not each number is divisible by three.
|Each time you loop console.log true or false.
*/
    let numbers = [123, 8409, 100053, 333333333, 7];
    for(let number in numbers){
        numbers[number]%3 == 0 ? console.log(`${numbers[number]} is divisible by three`) : console.log(`${numbers[number]} is not divisible by three`)
    }

/* 
|Exercise 2 : Attendance
|-----------------------
|Prompt the student for their name.
|If the name is in the object, console.log the name of the student and the country they come from.
|For example: "Hi! I'm [name], and I'm from [country]."
|Hint: You don’t need to use a for loop, just look up the statement if ... in
|If the name is not in the object, console.log: "Hi! I'm a guest.
*/
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  let username = prompt("Hello, enter your name please ");
  for(const user in guestList) {
    username == user ? console.log(`Hi! I'm ${user}, and I'm from ${guestList[user]}`) : console.log("Hi! I'm a guest")
  }

/* 
|Exercise 3 : Playing With Numbers
|--------------------------------
|Requirements : Don’t use built-in Javascript methods to answer the following questions. 
|You have to create the logic by yourself. Use simple for loops.
|1. Console.log the sum of all the numbers in the age array.
|2. Console.log the highest age in the array.
*/
let ages = [20,5,12,43,98,55];
let sumAge = 0, highestAge = 0;
for(const age in ages) {
    
    if(highestAge > ages[age]){
        console.log(highestAge)
    }else{
        highestAge = ages[age]
    }
    sumAge+= ages[age];   
}
console.log("highest age is ",highestAge);
console.log("sum of age is ",sumAge);
