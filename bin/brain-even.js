#!/usr/bin/env node

// ??? find out, how to make brain-games go first before brain-enen.js ???
// import "brain-games.js";

import { isEven } from "../src/brain-even-cli.js";

console.log('Answer "yes" if the number is even, otherwise answer "no".');

isEven();
