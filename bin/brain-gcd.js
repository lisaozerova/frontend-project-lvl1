#!/usr/bin/env node
import greet from '../src/cli.js';
import playGCD from '../src/games/gcd.js';

const name = greet();
playGCD(name);
