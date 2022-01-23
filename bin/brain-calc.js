#!/usr/bin/env node
import playCalc from '../src/games/calc.js';
import greet from '../src/cli.js';

const userName = greet();

playCalc(userName);
