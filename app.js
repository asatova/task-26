"use strict"
// 1- task
function doubleNumbers(arr){
    return arr.map(function(num) {
        return num * 2;
    });
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2- task

function capitalizeNames(arr) {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log(capitalizeNames(["xalima", "JACOB", "MuAttArxon", "gulchapchap"])); // ["Xalima", "Jacob", "Muattarxon", "Gulchapchap"]

// 3 - task

function namesOnly(arr){
    return arr.map(obj => obj.name);
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// 4 - task

function readyToPutInTheDOM(arr) {
    return arr.map(function(person) {
        return "<h1>" + person.name + "</h1><h2>" + person.age + "</h2>";
    });
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
