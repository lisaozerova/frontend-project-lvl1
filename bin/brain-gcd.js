#!/usr/bin/env node
import playGCD from '../src/games/gcd.js';
import greet from '../src/cli.js';

const userName = greet();

playGCD(userName);
