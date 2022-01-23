#!/usr/bin/env node
import playProgression from '../src/games/progression.js';
import greet from '../src/cli.js';

const userName = greet();

playProgression(userName);
