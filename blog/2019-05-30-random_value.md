---
id: 3-slick-ways-to-get-a-random-value-in-javascript
title: 3 of the Cleanest Ways to Get a Random a/b Value in JavaScript
author: Mat Bub
author_title: Full Stack Developer
author_url: https://github.com/hi-matbub
author_image_url: https://avatars.githubusercontent.com/hi-matbub
tags: [javascript, tutorial]
---

As Developer's it's our job to automate as things. As someone who works with _reusable components_ daily, I find _reusable functions_ to be just as valuable when it comes to automating our workflow. 

Let's talk about 3 of my favorite 'coin-toss' style functions.

<!--truncate-->

![img](https://i.imgur.com/fOzJFEU.jpg)

## 1. The Boolean Approach

In the event of needing a random boolean value, we `Math.random()` is oddly enough our friend.

````javascript
const booleans = () => Math.random() >= 0.5;

console.log(booleans);
````

## 2. The Conditional Approach

Adding to our Boolean approach, we can add one more line of code that acts as an if/else statement called a <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'>conditional operator.</a> 

Our a/b code might look like this 

````javascript
const booleans = () => Math.random() >= 0.5;
const conditionals = (a, b) => booleans() ? a : b;
/* if true return a, if false return b */


/* use case */
let optionA = 'get more coffee',
  optionB = 'go for a run';

let comp = `Lisa looks tired, maybe she should ${ conditionals(optionA, optionB) }`

console.log(comp)
````

## 3. The Random Number Between Range Approach

This last one comes with more flexibility, having the ability to get a random number between a set range can be very convenient and a good start for say, making your own authentication tokens.

````javascript
let nums = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(nums(2, 25))
````

---

I hope these have been useful to you in some way, as I've found them to be pretty slick. Happy coding :thumbsup:
