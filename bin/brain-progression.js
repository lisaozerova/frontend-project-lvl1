#!/usr/bin/env node
import greet from '../src/cli.js';
import playProgression from '../src/games/progression.js';

const name = greet();
playProgression(name);
