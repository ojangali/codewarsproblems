//problem 1
//
// function multiply(a, b  {
//   var product = a * b;
//   console.log(product ;
// }

//problem 2
// multiply(3,2);
// function Person(name){
//   this.name = Omid;
// }
//
//problem 3
// Person.prototype.greet = function(otherName){
//   return "Hi " + otherName + ", my name is " + this.name;
// };

//problem 4
// function calculate(num1, operation, num2){
//
// switch(operation){
//   case '+':
//     return num1 + num2;
//   case '-':
//     return num1 - num2;
//   case '*':
//     return  num1 * num2;
//   case '/':
//     return num1 / num2;
//   default:
//     return null;
//
// }
// }
//problem 5
// function Dog (breed) {
//   this.breed = breed;
// }
//
// var snoopy = new Dog("Beagle");
//
// snoopy.bark = function() {
//   return "Woof";
// };
//
// var scoobydoo = new Dog("Great Dane");
//
// scoobydoo.bark = function(){
//   return "Woof";
// };
//problem 6
function Counter(){
  var num = 0;
}
console.log();

Counter.prototype.incr = function() {
  return num + 1;
};
