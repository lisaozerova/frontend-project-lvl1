#!/usr/bin/env node
import greet from '../src/cli.js';
import playEven from '../src/games/even.js';

const name = greet();
playEven(name);
