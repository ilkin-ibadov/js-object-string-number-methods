// Create Target Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// const keyValuePairs = Object.entries(person1)
// const reconstructedObj = Object.fromEntries(keyValuePairs)
// const keyValuePairs = Object.values(person1)
// const keyValuePairs = Object.keys(person1)


  // Create Source Object
  const person2 = {firstName: "Anne",lastName: "Smith"};
  
  // Assign Source to Target
 const newPerson = Object.assign(person1, person2);

 const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result = Object.groupBy(fruits, myCallback);


  const car = {
        brand: "Ford",
        year: 1967
  }

  for(let x in car){
    //console.log(car[x])
  }


  let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let length = text.length;
  const firstLetter = text.charAt(0)
//   const firstLetter = text[0]

  //console.log(firstLetter)


let fruitsStr = "Apple,Banana,Kiwi";
const exists = fruitsStr.includes("Kiwi") // string daxilinde soz axtarmaq ucun
console.log(exists)

console.log(fruitsStr.split(",")) // Stringden array duzeltmek

// let part = fruitsStr.slice(7, 13);
// let part = str.substr(7, 6);

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();


const word1 = "Hello"
console.log(word1.split("")) // sozu herflerine ayirmaq ucun

const word2 = "World"

const sentence = word1.concat(" ", word2)

// //console.log(word1 + " " +  word2)

let wordWithWhiteSpace = "      Hello World!      ";

let wordWithPadding = word1.padStart(18,"1")

wordWithPadding = wordWithPadding.padEnd(wordWithPadding.length + 4,"2")

// //console.log(word1.repeat(3))

let text12 = "Please visit Microsoft and Microsoft";
let newText = text12.replace("Microsoft", "Google"); // ancaq birinci tapdigi sozu deyisir
let newText2 = text12.replace(/Microsoft/g, "Google"); // butun uygun gelen sozleri deyisir
let allTextReplaced = text12.replaceAll("Microsoft", "Google"); // butun uygun gelen sozleri deyisir

//console.log(allTextReplaced)


const a = 7
const b = 2

console.log((a / b).toFixed(0)) // yuvarlaqlasdirma

// console.log(Number(false))