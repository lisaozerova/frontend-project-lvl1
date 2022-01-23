#!/usr/bin/env node
import greet from '../src/cli.js';
import playPrime from '../src/games/prime.js';

const name = greet();
playPrime(name);
