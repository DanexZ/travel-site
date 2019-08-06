/* Starsza wersja
function Person(name, favColor){
    this.name = name;
    this.favColor = favColor;
    this.greet = function(){
        console.log('Hello my name is ' + this.name + ' and my favourite color is ' + this.favColor + '.');
    }
}*/

//Wersja Es6
class Person {
    constructor(name, favColor){
        this.name = name;
        this.favColor = favColor;
    }

    greet(){
        console.log('Hello my name is ' + this.name + ' and my favorite color is ' + this.favColor + '.');
    }
}

//exportowanie przez node.js
//module.exports = Person;

//exportowanie przez js (es6)
export default Person;