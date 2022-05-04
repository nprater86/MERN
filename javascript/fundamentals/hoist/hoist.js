var example;
console.log(example);
example = "I'm the example!";

console.log(example);
let example = "I'm the example!";    

//1.
var hello;
console.log(hello); //logs undefined
hello = 'world';

//2. 
var needle;
function test(){
    var needle;
    needle = 'magnet'; 
    console.log(needle);
}
needle = 'haystack';
test(); //logs 'magnet'

//3.
var brendan;
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); //logs super cool

//4.
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food); //logs chicken
eat(); //logs half-chicken

//5.
var mean;
mean(); //error
console.log(food);//error
mean = function () {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food); //error

//6.
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre); //log undefined
genre = "disco";
rewind(); //log rock, r&b
console.log(genre); //log disco

//.7
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo); //log san jose
learn(); //log seattle, burbank
console.log(dojo); //log san jose

//8.
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students>50){
        dojo.hiring = true;
    } else if (dojo.students <=0 ){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); //logs {name:"Chicago", students:65, hiring:true}
console.log(makeDojo("Berkely",0)); //error; const dojo is an object not a string

