#!/usr/bin/env node

import readlineSync from 'readline-sync';

// export const name = () => readlineSync.question('May I have your name please? \n') ;

//const hello = console.log('Hello, ' + name + '!') ;


export const getName = () => readlineSync.question('May I have your name? ');
export const greating = () => {
     const name = getName();
     console.log(`Hello ${name}`);
};


// export const greating = () => {
//     const name = readlineSync.question('May I have your name? ');
//     console.log(`Hello ${name}`);
// }