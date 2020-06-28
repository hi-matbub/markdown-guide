---
id: zennn
title: Asynchronous Timers
---

Easy to manage, simple asynchronous timers rendered in the terminal for presentation & host management.

[![Build Status](https://travis-ci.com/hi-matbub/zennn-cl.svg?branch=master)](https://travis-ci.com/hi-matbub/zennn-cl)
![airbnb](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg?style=flat-square)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Demo

![zen](https://i.imgur.com/mK7VfjD.gif)

### Why the terminal?

When real estate on your screen matters, the terminal is your friend. That and the _simplicity_.

## Install 

From your terminal, install Zennn as a dependency `npm i zennn`

### Use

After requiring Zennn into your project, initalizing the timer functions are a simple matter of setting timers via an _array of objects_, within the paramaters of our function.

eg.

````
var { Zennn } = require('zennn');

Zennn([
  { name: 'intro', time: '1m' },
  { name: 'warm-ups', time: '5m' },
  { name: 'code-review', time: '3m' },
]);

````

to run the timers, simply execute `node <file-name>.js` from within your terminal. 


#### Whats happening here?

Referring to the example above, Zennn will asynchronously run through the timers listed in order. So, once **intro** has reached 0, **warm-ups** will begin and so on until the array is empty.

## Paramaters

key | type
--- | ---
name | string
time | string

We only specify by minutes, eg `time: '17m'` and anything over 60 minutes will not render properly. 

If you would like to contribute, feel free to open a pull request. :thumbsup: 



