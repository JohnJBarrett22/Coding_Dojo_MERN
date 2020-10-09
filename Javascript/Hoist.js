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
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

//Hoisting with ES6:
let needle = 'haystack';
function test(){
    let needle = 'magnet';
    console.log(needle);
}
test();



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
let brendan = 'super cool';
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
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food);
eat();

//Hoisting with ES6:
let food = 'chicken';
function eat(){
    let food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food);
eat();



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
var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

//Hoisting with ES6:
let mean;
mean();
console.log(food);
mean = function() {
    let food;
    food = "chicken";
    console.log(food);
    food = "fish";
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
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

//Hoisting with ES6:
let genre;
function rewind() {
    let genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);



//7.
//Given:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//After hoisting by the interpreter:
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

//Hoisting with ES6:
function learn() {
    let dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

//8.
//Given:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//After hoisting by the interpreter:
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

//Hoisting with ES6:
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));