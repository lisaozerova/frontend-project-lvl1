#!/usr/bin/env node
import playPrime from '../src/games/prime.js';
import greet from '../src/cli.js';

const userName = greet();

playPrime(userName);
