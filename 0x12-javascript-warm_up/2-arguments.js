#!/usr/bin/node
import { argv } from 'process';

argv.forEach((val, index) => {
  if (index < 1) {
    console.log('No argument');
  } else if (index === 1) {
    console.log('Argument found');
  } else {
    console.log('Arguments found');
  }
});
