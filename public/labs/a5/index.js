/**
 *  Cesar Guerrero
 *  10/10/22
 *  Assignment A5 - Lab Section
 */

//alert('Hello World!');
console.log('Hello World!');

//Lab 2.4
console.log("Variables and Constants");

global1 = 10;
var functionScoped = 2;
let blockScoped = 5;

const constant1 = global1 + functionScoped - blockScoped;

console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);
console.log('');

//Lab 2.4.1
console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);
console.log('');

//Lab 2.4.2
console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1
let notTrue = '1' === 1

console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log('');

//Lab 2.5

console.log("If else");
if (true1) {
    console.log(true);
}

if (!false1) {
    console.log("!false1");
} else {
    console.log("false1");
}
console.log('');

//NOTE: This is the shorthand way to run a simple 'if'
console.log("Ternary Conditional Operator");
const LoggedIn = true;
const greeting = LoggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);
console.log('');

//Lab 2.6
console.log('Legacy ES5 function')
function add(a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);
console.log('');

console.log('New ES6 functions')
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);
console.log('');

console.log("Implied Return");
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);
console.log('');

console.log("Parenthesis and Parameters");
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);
console.log('');

console.log("Arrays");
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);
console.log('');

const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log("Array Index and Length");
console.log(length1);
console.log(index1);
console.log('');


//Adding and Removing Data to/from arrays
//Adding new items
numberArray1.push(6);
stringArray1.push('string3');

//Remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
//Remove 1 item atart on 2nd spot
stringArray1.splice(1, 1);
console.log("Add and Remove Data to Arrays");
console.log(numberArray1);
console.log(stringArray1);
console.log('');

//For Loops
console.log("For Loops")
for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}
console.log('');

//Map Function
//In this case we are applying the square function to each number in the numberArray1
const squares = numberArray1.map(square);
//In this case we are applying a new function to each number in the numberArray1
const cubes = numberArray1.map(a => a * a * a);
console.log("Map Function");
console.log(squares);
console.log(cubes);
console.log('');

//Find Function
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log("Find Function");
console.log(four);
console.log(string3);
console.log('');

//Find Index Function
const fourIndex = numberArray1.findIndex(a => a === 4);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log("Find Index")
console.log(fourIndex);
console.log(string3Index);
console.log('');

//Filter Function
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
console.log("Filter Function");
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);
console.log('');

//Template Strings
console.log("Template Strings");
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)
console.log('');

//JQuery Tasks
const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */
    const bindById = $('#bind-by-id'); //This is finding the tag with the following ID
    const bindByClass = $('.bind-by-class'); //This is finding the tag(s) with the following CLASS
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);
    console.log('');

    //2.12
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    //2.13
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);
    //This first getter is getting the tag with the given ID
    const setClassAttr = $("#set-class-attr");
    //For the given tag we are giving it a class! 
    setClassAttr.attr('class', 'class-0');

    //2.14
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');
    
    //2.15
    const hideMe = $("#hide-me");
    hideMe.hide();
    const showMe = $("#show-me");
    showMe.show();

    //2.16
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    //2.17
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    //2.18
    const removeLi =$("#remove-this");
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    //2.19
    const changeThisText = $("#change-this-text");
    const changeThisHtml = $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`
        <li>Line item A</li>
        <li>Line item B</li>
        <li>Line item C</li>
    `);

    //2.20 and further code!
    const child2 = $("#child-2");
    const parent1 = child2.parents("#parent");
    parent1.css('background-color', 'red').css('color', 'white');

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    //You can make anything clickable!
    const handleClick = () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target).css('background-color', 'blue').css('color', 'white');
    };

    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    //2.23
    //This is shorthand to create multiple variables
    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);

    //Lab 2.24
     
}

$(init);

