#!/usr/bin/env node
import playEven from '../src/games/even.js';
import greet from '../src/cli.js';

const userName = greet();

playEven(userName);
