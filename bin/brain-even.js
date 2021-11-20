#!/usr/bin/env node
import greet from '../src/cli.js';
import playEven from '../src/even.js';

const name = greet();
playEven(name);
