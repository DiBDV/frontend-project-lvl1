#!/usr/bin/env node

import readlineSync from "readline-sync";

export const getName = () => readlineSync.question("May I have your name? ");
export const greating = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
};