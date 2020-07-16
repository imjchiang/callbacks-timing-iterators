function greeting(name, callback)
{
    let sentence = "Hello, my name is " + name;

    let otherSentence = callback();

    return sentence + ". \n" + otherSentence;
}

let myName = "Josh";

function anotherGreeting()
{
    let sentence = "I forgot my last name";

    return sentence;
}

console.log(greeting(myName, anotherGreeting));

function printArray(array, callback)
{
    for (let i = 0; i < array.length; i++)
    {
        let number = array[i];
        console.log(number);
    }
    callback(array);
}

function printArrayAgain(array)
{
    for (let i = 0; i < array.length; i++)
    {
        let number = array[i];
        console.log(number);
    }
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

printArray(numbersArray, printArrayAgain);


function calculator(num1, num2, callbackOne, callbackTwo)
{
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2);

    return result;
}

function addNumbers(num1, num2)
{
    let result = num1 + num2;
    return result;
}

function subtractNumbers(num1, num2)
{
    let result = num1 - num2;
    return result;
}

console.log(calculator(5, 77, addNumbers, subtractNumbers));

function superHero(callbackOne, callbackTwo)
{
    let superPowers = "The super hero has the superpowers " + callbackOne() + " and " + callbackTwo();
    return superPowers;
}

function superPowerOne()
{
    return "Mind Reading";
}

function superPowerTwo()
{
    return "Invisibility";
}

console.log(superHero(superPowerOne, superPowerTwo));


function blastOff()
{
    let num = 0;

    for (let i = 10; i >= num; i--)
    {
        console.log(i);
    }
    console.log("BLAST OFF!!");
}

//setTimeout(blastOff, 5000);

function printName(name)
{
    //name = "Josh";
    console.log(name);
}

//setTimeout(function(){printName("Josh");}, 5000);

//Iterators
const collectables = ["Bomag", "CMI Corp", "Wirtgen", "Catepillar"];

collectables.forEach(function(element){
    console.log(element);
} );

collectables.forEach(element => {
    if (element.length > 6)
    {
        console.log(element);
    }
} );

//map
const someNumbers = [24, 65, 347, 34];

const addFive = someNumbers.map(element => {
    return element + 5;
} );

console.log(addFive);

//filter
const filteredNums = someNumbers.filter(element => {
    if (element > 50)
    {
        return element;
    }
});

console.log(filteredNums);