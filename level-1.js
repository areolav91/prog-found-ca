// Question 1
var person = "boy";
// Question 2
var person = {
  gender : "boy",
  name : "are",
};
// Question 3
var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}
//Question 4

var numbers = [1,2,3,4,5];
for (var i = 0; i < numbers.length; i++)
console.log(numbers[i])

//Question 5
for(var i = 15; i <= 25; i++) {
    console.log(i);
}
//Question 6
for (var i=15; i<=25; i++){
    if (i === 20){
        console.log(i);
    }
}
//Question 7 -
var persons = [
    {
        gender: "boy",
        age: 28,
        alive: true
    },
    {
      gender: "girl",
      age: 98,
      alive: false
    }
];
for (var i = 0; i < persons.length; i++){
console.log(persons[i].age)
console.log(persons[i].alive)
}

//Question 8

function whatIDontLike(Mondays){
  console.log("I don't like " + Mondays)

}
whatIDontLike("Mondays");

//Question 9

function subtracting (a, b){
    var total = a - b;
    console.log(total);
}
subtracting (8, 4)

//Question 10
var foodArray = [];

function myFavoriteFood(dish) {
foodArray.push(dish);
}
myFavoriteFood("Lasagna");
console.log(foodArray[0]) // added output to verify result
