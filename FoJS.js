// FUNDAMENTALS OF JAVASCRIPT



/**************************************************************************************************
**001                       DATATYPES & VERIABLES                                                **
**************************************************************************************************/

/*DATA TYPE:
    undefined,
    null,
    boolean,
    string,
    number,
    object
*/

/*VERIABLE:
    var,
    let,
    const,
*/
var verVariable = 'var variable'; // using all time
let letVariable = 'let variable'; //let use for only scope
const constVariable = 'const variable'; // cant change value


var a;            // declear
var b = 5;       // declear and assign
a = 10;
console.log(a);


/*  
03      COMPOUND ASSIGNMENT
____________________________________________*/

/*  
    a += 6;
    b -= 4;
    c *= 5;
    d /= 2;
*/


/**************************************************************************************************
**002                           STRING                                                           **
**************************************************************************************************/

var myFirstName = 'sizar';
var myLastName = 'corpse';
var doubleQuoted = 'this is "double quoted" !!'; //or
var escapeCharecter = "this is also \"double quoted\" !!!"  // escape charecter
console.log(doubleQuoted);
console.log(escapeCharecter);

/*  
    CODE    OUTPUT
    \'      single quote
    \"      double quote
    \\      backslash
    \n      new line
    \r      carriage return
    \t      tab
    \b      backspace
    \f      form feed
*/

//concatenating :
var concatenating = 'This is my ' + 'housE'; //concatenating two string and also can use += assignment
console.log(concatenating);

// with variable
var myFullName = myFirstName + ' '+ myLastName;
console.log(myFullName);

//find length
concatenatingLangth = concatenating.length
console.log(concatenatingLangth);

//bracket notation fo find character in string or nth position
concatenatingFindInString = concatenating[0] +' '+ concatenating[3];
console.log(concatenatingFindInString);
// **string cant be modify with bracket noation

//fing the last charecter
concatenatingFindLastChar = concatenating[concatenating.length-1];
console.log(concatenatingFindLastChar);


/**************************************************************************************************
**003                       ARRAY                                                                **
**************************************************************************************************/

//basic
var ourArray = ['sizar', 20];
console.log(ourArray);

//nested arrray or multi-dimensional
var nestedArray = [['corpse',27],['aurora',22]];
console.log(nestedArray);

//indexing
var ourArray2 = ['sizar',30,25,69,'aurora','javascript',69.6];
var indexing = ourArray2[5];
console.log(indexing);

//modify
var indexing = ourArray2[5] = 'edited javascript';
console.log(indexing);

//milti-dimention array indexing
                        //  0       1       2       3
var multidimentionArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
console.log(multidimentionArray);//all array
var indexing= multidimentionArray[3][0][2] = 15;
console.log(indexing);

// push - add item

ourArray.push('this is push array');
ourArray.push(['aurora','hate animal'])
console.log(ourArray);

//unshift - add item to the first
var yyy = ourArray.unshift('this is unshift array');
console.log(yyy);

// pop - remove item .. pop() remove the last items
ourArray.pop();
console.log(ourArray);

//shift - shift () remove the frist item  and return the first item
var xxx =ourArray.shift();
console.log(xxx);

//stand in Line
    //simulation of queue

function nextInLine( array, item){
array.push(item);
return array.shift(); 
}
var testArray = [1,2,3,4,5];
console.log('before : ' + JSON.stringify(testArray)); // JSON.stringify = array to a string
console.log(nextInLine(testArray,6)); // retrun shift value
console.log('after : ' + JSON.stringify(testArray));



/**************************************************************************************************
**004                       FUNCTION                                                             **
**************************************************************************************************/

//derleration
function myFunction (){
    console.log('bla bla');
}
myFunction(); //calling

//pass argument 

function myFuncArg(item1,item2){
    console.log(item1+item2);
};
myFuncArg(100,25);


//Global scope and Function

var myGlobal = 100; // global variable

function myfun1(){
  myGlobal_2 = 250; // make it global not using 'var'. if we use 'var' keyword that variable is scope to the fuction and not able to use in other function.
}

function myfun2(){
    var output = ' ';

    if( typeof myGlobal != 'undefined'){
        output += 'myGlobal :' + myGlobal;
    }

    if( typeof myGlobal_2 != 'undefined'){
        output += 'myGlobal_2 :' + myGlobal_2;
    }

console.log(output);
}
myfun1();
myfun2();

//lcoal scope and Function
function myLocalScope (){
    var myLocalVar = 50;
    console.log(myLocalVar);
}
myLocalScope()
//console.log(myLocalVar); // not gonna work. cant not use local variable outside of that function.

// Local vs Global scope in function
    // local variable took precedance over global variavle
var outerWare = 'T-shirt';
function myOutfit(){
    var outerWare = 'sweater';
    return outerWare;
}
console.log(myOutfit()); // local
console.log(outerWare); // global

// return and store
var changed = 0;
function change(num1, num2){
    return( (num1+ num2) / 5);
}
changed =change(10,10);
console.log(changed);



/**************************************************************************************************
**005                       CONDITIONAL STATEMENT                                                **
**************************************************************************************************/

// IF statement

function isTrueOrFalse(trueOrFalse){
    if(trueOrFalse){
        return 'this is true';
    }
    return 'no this is not';
}
console.log(isTrueOrFalse(false));

// equal operator
function isEqual(value){
    if(value == 12){
        return 'this is an equal value';
    }
    return 'no this is not an equal value';
}
console.log(isEqual(12));
/*
 '===' is strict equality oprerator..
 '==' attempt to convert both value to compear to comman type. like : 12 == '12'  is ture
 '===' dont convert so : 12 === '12' is false 
 '!=' 
 '!=='
*/

// else if
function testElse (elseValue){
    var testResult ='';
    if(elseValue > 10){
        testResult = 'bigger then 100';
    }
    else if(elseValue < 5 ){
        testResult = 'small then 5';
    }
    else{
        testResult = 'between 10 and 5';
    }
    return testResult;
}
console.log(testElse(7));



/*  
02      CONDITIONAL LOGIC  SWITCH CASE
____________________________________________*/

function switchInCase(value){
    var answer = "";
    switch(value){
        case 1:
            answer = 'Alpha';
            break;
        case 2:
            answer = 'Beta';
            break;
        case 3:
            answer = 'Gamma';
            break;
        case 4:
            answer = 'Delta';
            break;
        case 5:
            answer = 'Sigma';
            break;
        
        case 6:
        case 7:
        case 8:
            answer = 'they are same';
            break; // case 6 7 8 show the same result

        default:
            answer ='do not match';
            break;
    }
return answer;
}
console.log(switchInCase(7))


/**************************************************************************************************
**006                       OBJECT                                                               **
**************************************************************************************************/


var myHorse  = {
    name:   'dixter',
    legs:   4,
    tails:  1,
    friends: ['everyone']
};

// Accessing Object 
// DOT notation

var accessObj = myHorse.name;
console.log(accessObj);

// Bracket Notation
// when the name has space in i

var myHorseBracket  = {
    'Horse name':   'dixter',
    'Horse legs':   4,
    'Horse tails':  1,
    'Horse friends': ['everyone']
};
var accessObjBracket = myHorseBracket['Horse name'];
console.log(accessObjBracket);

//Accessing with variable

var myPlayerID  = {
    15:'sizar',
    14:'corpse',
    10:'diamond',
    'friends':'hologram'
};
var accessWithVar = 'friends'; //var accessWithVar = 10;
var myPlayerName = myPlayerID[accessWithVar];
console.log(myPlayerName);

//Update Properties

myHorse.name = 'Dixter New name';
console.log(myHorse.name);

//Add new Properties to an Object

myHorse['horse color'] = 'Black and red';
myHorse.weight = '450lb';
myHorse.bal = 'poi pi';
console.log(JSON.stringify(myHorse));

//Delete Properties
delete myHorse.bal;
console.log(JSON.stringify(myHorse));

// OBject lookup value

function lookupResult(value){
var result ='';
var lookup = {
    'alpha':'sizar',
    'bravo':'boston',
    'charlie':'chicago',
    'delta':'denver',
    'echo':'easy'
};
result = lookup[value];
return result;
}
console.log(lookupResult('bravo'));


// check OBJECT has properties or not
    // .hasOwnProperty > using for check properties

var myObj = {
    'alpha':'sizar',
    'bravo':'boston',
    'charlie':'chicago',
    'delta':'denver',
    'echo':'easy'

};
function checkMyObj(checkProp){

if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
}
else{
    return 'not found';
}
};

console.log(checkMyObj('gamma'))


//Manipulating complex object
var myMusicObj = [
    {
    'artist'        :   'Tame Impala',
    'title'         :   "I'm Changing",
    'release_year'  :   2015,
    'formet'        :   [   'CD',
                            '8T',
                            'LP'    ],
    'gold'          : true
    },
    {
    'artist'        :   'Missio',
    'title'         :   "Middle Finger in the Air",
    'release_year'  :   2019,
    'formet'        :   [   'CD',
                        '8T',
                        'ZP'    ],
    'gold'          : true
    },
];

var getMyMusicObj =myMusicObj[1]['formet'][1] ; //ans = 8T
console.log(getMyMusicObj);


//Nested Object
var myStroage = {
    'car': {
        'inside':{
            'glove box':'maps',
            'passerger':'crumbs'
        },
        'outside':{
            'trunk':'jack'

        }
    }
};
var getMyStroge = myStroage.car.inside['glove box'];
console.log(getMyStroge);



/// CODE CHALLENGE 


var collection = {

    '20001':{
    'artist'        :   'Tame Impala',
    'album'         :   "Currents",
    'release_year'  :   2015,
    'track'         :   [   'im Changing',
                            'Let it Happens',
                            'the less i know better'    ],
    'gold'          : true
    },
    
    '20002':{
    'artist'        :   'Missio',
    'album'         :   "Loner",
    'release_year'  :   2019,
    'track'        :   [   'Middle Finger in the Air',
                        'sing to me',
                        'i see you'    ],
    'gold'          : true
    },

    '20003':{
        'artist'        :   'Eden',
        'album'         :   "I think you think too much of me",
        'release_year'  :   2014,
        'track'        :   [   'Sex',
                            'Ox',
                            'drug'    ],
        'gold'          : false
        },
        
    '20004':{
        'artist'        :   'THISBiggIE',
        'album'         :   "BID D",
        'release_year'  :   2011,
        'track'         :   [  ],
        'gold'          : false
        },
};
// this 👇 is copy of original version of collection
var collectionCopy = JSON.parse(JSON.stringify(collection))

function editCollection(id,prop,value){
    if (value === ''){
        delete collection[id][prop];
    } else if(prop === 'track'){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }

    return collection;
};

console.log(editCollection(20003,'track','crash'));


/// CODE CHALLENGE 

var contacts = [
    {
        'firstName'     :   'sizar',
        'lastName'      :   'corpse',
        'number'       :   '880-1711-007-007',
        'likes'         :   ['sex','drugs','video Games','Dubstep']
    },
    {
        'firstName'     :   'aurora',
        'lastName'      :   'xayan',
        'number'       :   '880-1711-666-666',
        'likes'         :   ['indie music','books','video Games','travel']
    },
    {
        'firstName'     :   'ammonna',
        'lastName'      :   'ana',
        'number'       :   '880-1611-696-969',
        'likes'         :   ['oscean','travel','nature']
    }
]

function lookupProfile(name,prop){
    for ( var i = 0; i < contacts.length;i++){
        if (contacts[i].firstName === name){
            return contacts[i][prop] || 'no such property'
        }
    }
    return 'no such contact';
}
var data = lookupProfile('sizar','number');
console.log(JSON.stringify(data));




/*  
02      LOOP
____________________________________________*/

//while Loop

var myWhileArray = [];

var i= 0;
while (i <5){

    myWhileArray.push(i);
    i++;
}
console.log(JSON.stringify(myWhileArray));


// FOR LOOP

var myForArray = [];
for (var i = 0; i < 5;i++){
    myForArray.push(i);
}
console.log(JSON.stringify(myForArray));

// nested for loop

function multiplyAll(array){
    var product = 1;

    for( var i=0; i < array.length;i++){
        for( var j=0; j<array[i].length;j++){
            product *= array[i][j];
        }
    }
    return product;
};

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);



/*  
02      RANDOM
____________________________________________*/

//Math.random()
//Math.floor(Math.random()*10000) <= whole nuber
//Math.floor(Math.random()*(max-min+1))+min <= between two number


function randomFraction( max, min){

return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(randomFraction(1,10));


/*  
02      ParseINT
____________________________________________*/


function convertToInteger(str){
    return parseInt(str)
};
function binaryToInteger(str){
    return parseInt(str,2)
};

console.log(convertToInteger('666'));
console.log(binaryToInteger('10010011',2));


/*  
02      Ternary
____________________________________________*/

// condition ? statement-if-ture : statement-if-flase

function checkEqualter(a,b){
    return a===b ? true:false;
    // return a===b;  same as upper syntex
}
console.log(checkEqualter(10,20))

function checkSignter(num){
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero'
    // return a===b;  same as upper syntex
}
console.log(checkSignter(10))


/*
 /// ES6 >>>> 

*/


/*  
02      LET and CONST
____________________________________________*/
/* different between VAR and LET 
 when var declear its global or locally but let only block statement
*/

function checkScope(){
"use strict";
    var fs = 'function scope';
    if(true){
        fs = 'block scope';
        console.log('block scope bs is :', fs);
    }
    console.log('function scope fs is :',fs);
    return fs
};
checkScope(); 
/* ans :
block scope bs is : block scope
function scope fs is : block scope
*/

// problem solve
function checkScopex(){
"use strict";
    let fss = 'function scope';
    if(true){
       let fss = 'block scope';
        console.log('block scope bs is :', fss);
    }
    console.log('function scope fs is :',fss);
    return fss
}
checkScopex(); 
/* ans :
block scope bs is : block scope
function scope fs is : function scope
*/


let myage = 30;
if (true){
    let myage= 27;
    console.log(myage)
}
myage = 29;
console.log(myage);


//-------- CONST-----------
// use capital letter to declear const

const BALL = 5
// BALL = 10
console.log(BALL);

const BALL_ARRAY = [10,26,14]
console.log(BALL_ARRAY)
BALL_ARRAY.push(26)
console.log(BALL_ARRAY)

const BALL_OBJ = {
    ball_count : 25
};
BALL_OBJ.ball_count = 32;
console.log(BALL_OBJ);


//-------- OBJECT.FREEZE ----------
/*  with this case, PI will change

function feezeeObj(){
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    try {
        MATH_CONSTANTS.PI = 3399;
    } catch(ex){
        console.log('bitch');
    }

return MATH_CONSTANTS.PI
}
const PI  = feezeeObj();
console.log(PI)

*/

function feezeeObj(){
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // using this PI wont chnage
    try {
        MATH_CONSTANTS.PI = 3399;
    } catch(ex){
        console.log(ex);
    }

return MATH_CONSTANTS.PI
}
const PI  = feezeeObj();
console.log(PI)



//------ HOISTING ------
// declear veriable before initianlize it.

function doSome(){
    hell = 100;
}
let hell;       // declaer
doSome();       //call
console.log(hell);




//--------------FAT ARROW FUNCTIN -------------
// declear

var sizar =(a,b) =>{
    return a+b;
};
console.log(sizar(5,5));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([666,777],[999,668,779]))

///------- write Higher Order Arrow Function

const realNumber = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squreFunction =(array) =>{ 
    const squreIntegers = array.filter(num => Number.isInteger(num) && num > 0).map( x => x*x);
    return squreIntegers;
}
const squreIntegers = squreFunction(realNumber)
console.log(squreIntegers)


//------------ DEFAULF PERAMETER ------------
function isEqualto (number = 50,compare = 50){
    return number === compare;
};
console.log(isEqualto(50,50));



//---------------- REST OPERATOR ------------------------------

//stage 1 :
let numbers  = [1,2,3,4,5];
function sumUp(toAdd){
    let result = 0;

    for ( let i = 0; i <toAdd.length;i++){
        result+=toAdd[i];
    }
    return result;
}
console.log(sumUp(numbers));

//stage 2 : Using REST Operator
function xsumUp(...toAdd){
    console.log(toAdd);
    let xresult = 0;

    for ( let i = 0; i <toAdd.length;i++){
        xresult+=toAdd[i];
    }
    return xresult;
}
console.log(xsumUp(100,10,200));

//Ex 2
 const newSum =  (function(){
    return function newSum(...args){
        return args.reduce((a,b) => a+b,0);
    }
 })();

 console.log(newSum(10,20,30,40))


//-------------- SPREAD OPERATOR ------------------------------

let numberz = [1,2,5,41,58]
console.log(numberz); // withnout spread op
console.log(...numberz); // spread op

console.log(Math.max(...numberz));


// different betweens REST & SPREAD
// 1. rest : used in if you write your own function and list of angument is function expect
// 2. spread : split of an array into a list of values

//ex 2
//stage 1
const S1arrayWithOutSpread = ['JAN','FEB','MAR','APR','MAY'];
let S1arraySpread;
(function(){
    S1arraySpread = S1arrayWithOutSpread; // not coping, its equal to
    S1arrayWithOutSpread[0] = 'banana';
})();
console.log(S1arraySpread);

//answer : ["banana", "FEB", "MAR", "APR", "MAY"]

//stage 2 ; with spread

const arrayWithOutSpread = ['JAN','FEB','MAR','APR','MAY'];
let arraySpread;
(function(){
    arraySpread = [...arrayWithOutSpread]; //coping, not equal to
    arrayWithOutSpread[0] = 'banana';
})();
console.log(arraySpread);





//--------------- DESTRUCTURING - OBJECTS -------------------------

// stage 1 : older way

var foxel = {xan:3.6, yan:7.4,zan:6.54};
var xen = foxel.xan; // xen = 3.6
var yen = foxel.yan; // yen = 7.4
var zan = foxel.zan; // zan = 6.54

//DESTRUCTURING way
const { xan: aan, yan:ban, zan:can} = foxel;
console.log(aan,ban,can)

//ex 1:

const AVG_TEMPERATURE = {
    today : 77.5,
    tomorrow : 790
}
function getTemp4Tmrw(avgTemp){
"use strict";

    const { tomorrow : temoOfTomorrow} = avgTemp;
    return temoOfTomorrow

}
console.log(getTemp4Tmrw(AVG_TEMPERATURE))


//ex 1: nexted object

const LOCAL_FORECAST = {
    today : {min : 72, mix:83},
    tomorrow :{min: 73.5, max:84.3}
};

function getMaxOfTmrw(forecast){
"use strict"
    const {tomorrow : { max:maxOftomorrow }} = forecast;

    return maxOftomorrow
};
console.log(getMaxOfTmrw(LOCAL_FORECAST));



// DESTRUCTURING Assignment to assign variable from ARRAY -------------------------
let itsArray = [100,200,300]

let [a1,b1,c1,d1] = itsArray;

console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1); // set its undefined

let itsArray2 = [400,150,366,695,699,584,145];
let [a11,b11,c11, ,...x11] = itsArray2; 
console.log(a11,b11,c11,x11); // a11 = 400,b11=150,c11=366,x11=699 to 145
                                // , <= skip one item of arrayy


// removig frist two item from array

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFristTwo(list){

    const [ , , ...arr] = list;
    return arr;
}
 const newArr = removeFristTwo(source);
 console.log(source);
 console.log(newArr);


// use DESTRUCTURING ASSIGNMENT to pass an OBJECT  as a fuction PERAMETERS

const state = {
    max : 89,
    standard_deviation :4.45,
    median:34.36,
    mode:42.36,
    min:-1.58,
    avergae:36.21
};
// 1st way to declear function
const half = (function(){
    return function half({max,min}){
    return (max+min)/2.0;}

})();
console.log(state);
console.log(half(state));

//2nd way : old way
function half2({max,min}){
return (max+min)/2.0
}
console.log(half2(state));

//3rd way : fat arrow way
const half3 = ({max,min})=>{return(max+min)/2.0}
console.log(half3(state));


//---------------- TEMPLATE LITERALS -------------------------

// ex1:
let yourname = 'sizar';
let descriptions = `
hi this is unfinite.
im nam ${yourname +'!!!'}.
shut the fuck out.
`// multiline + vaule (like f' string in python)
console.log(descriptions)


//ex2:
const imSizar ={
    name:'sizar corpse',
    age:27
}
const greeting = `hi my name is ${imSizar.name}
and im ${imSizar.age} old;
`
console.log(greeting)




//---- write CONCISE OBJECT LITERAL  declaration using simple fields

//old way:

const createPersion = ( name,age,gender) =>{
    return {
        name: name,
        age:age,
        gender:gender
    }
}
console.log(createPersion('sizar corpse',27,'male'))

// new way
const newCreatePersion = (name,age,gender)=>({name,age,gender})
console.log(newCreatePersion('aurora xayan',22,'female'))



//---- write CONCISE Declarative Function
//old way:

const bicycle ={
    gear :2,
    setGear: function(newGear){
        this.gear = newGear;
    }
};

//new way:

const newBicycle ={
    gear: 2,
    setGear(newGear){
        this.gear=newGear;
    }
};
bicycle.setGear(4);
console.log(bicycle.gear);


//----------CLASS --------------

//approach 1
class SpaceShutter{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zero = new SpaceShutter('jupiter');
var one =  new SpaceShutter('earth')
console.log(zero.targetPlanet)
console.log(one.targetPlanet)


//approach 2

function makeClass(){
    class Vegetable{
        constructor(name){
            this.name = name
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name)




//----------GETTERS and SETTER  ----------------






// ----------different between import and require
    // import { function Or Classname} from './filename'

   // export const foo ='foo';
   // export const bar ='bar';

// import * as name from "./filename"; <== import everything


//----------Object Literal Extensionss --------------

//stage 1:

let xobject = {
    xname : 'sizars',
    xage : 27
};
console.log(xobject);

//stage 2:

let yname = 'aurora';
let yage = 22;

let yobject = {
    yname : 'xayan', // overwrite yname
    yage,
    greet(){
        console.log(this.yname+' , '+this.yage);
    }
};
console.log(yobject);
yobject.greet();

// object automatic looking for variable which declear before.

//stage 3:

let zname = 'sentry';
let zage = 205;

let zobject = {
    "zname" : 'antimonitor', // varibale name as string or function name
    zage,
    "zgreet me"(){
        console.log(this.zname+' , '+this.zage);
    }
};
zobject['zgreet me'](); // accessing string variable or function + white space


//stage 4:

let wname = 'this is hell';
let wage = 500;

let wageField = 'wage';

let wobject = {
    "wname" : 'no this is beyond hell', // varibale name as string or function name
    [wageField]:10000,
    "wgreet me"(){
        console.log(this.wname+' , '+this.wage);
    }
};
console.log(wobject);
console.log(wobject['wage']);
console.log(wobject[wageField]);
wobject['wgreet me']();








//------------------ THE FOR-OF-LOOP -------------------------------

let someNumebr = [10.5,56.8,66,98,100.25]

for (let item of someNumebr){
    console.log(item);
}





