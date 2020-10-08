//Assignment: JavaScript Hoisting

//Objectives:
//1. Practice reading JavaScript the same way as the interpreter reads it.
//2. Run the same code as above with ES6 syntax and compare your results.

//1.
//Given:
console.log(hello);
var hello = 'world';

//After hoisting by the interpreter:
var hello;
console.log(hello);
hello = 'world';

//Hoisting with ES6:
let hello;
console.log(hello);
hello = 'world';

//2.
//Given:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//After hoisting by the interpreter:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//Hoisting with ES6:
let needle = 'haystack';
test();
function test(){
    let needle = 'magnet';
    console.log(needle);
}

//3.
//Given:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//After hoisting by the interpreter:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//Hoisting with ES6:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//4.
//Given:
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//After hoisting by the interpreter:
var food = 'chicken';
eat();
console.log(food);
function eat(){
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
}

//Hoisting with ES6:
mean();
let food = 'chicken';
eat();
console.log(food);
function eat(){
    let food = 'gone';
    food = 'half-chicken';
    console.log(food);
}

//5.
//Given:
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//After hoisting by the interpreter:
mean();
console.log(food);
var mean = function() {
    var food = "fish";
    food = "chicken";
    console.log(food);
    console.log(food);
}
console.log(food);

//Hoisting with ES6:
mean();
console.log(food);
let mean = function() {
    let food = "fish";
    food = "chicken";
    console.log(food);
    console.log(food);
}
console.log(food);


//6.
//Given:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//After hoisting by the interpreter:
var genre;
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
