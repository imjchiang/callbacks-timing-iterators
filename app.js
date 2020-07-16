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
