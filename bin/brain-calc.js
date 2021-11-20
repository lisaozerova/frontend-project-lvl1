#!/usr/bin/env node
import greet from '../src/cli.js';
import playCalc from '../src/games/calc.js';

const name = greet();
playCalc(name);
