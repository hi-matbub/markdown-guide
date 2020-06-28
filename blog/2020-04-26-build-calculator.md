---
id: how-to-build-a-calculator-using-javascript
title: How To Build A Calculator using JavaScript
author: Mat Bub
author_title: Full Stack Developer
author_url: https://github.com/hi-matbub
author_image_url: https://avatars.githubusercontent.com/hi-matbub
tags: [javascript, html, calculator, tutorial]
---

Have you ever found yourself needing to build a calculator from complete scratch? 

Unless your facing a highly technical job interview or are learning how to program a computer, you would probably never need to.

However, if the above criteria does apply to you then you have come to the right place.

<!--truncate-->

---

![img](https://i.imgur.com/kU1sYR5.jpg)

Feel free to follow along and if at any point you get stuck, you can compare your work to the [source codes](https://github.com/hi-matbub/Calculator) current branch.


---

## 1. Render the Calculator on the DOM
Before we begin with any JavaScript, and being we are working with jQuery, let's take a look at <a href='https://github.com/hi-matbub/Calculator/blob/master/index.html' target='_blank'>what's being rendered to the DOM</a>.

As you can see, we have attached the onclick event directly to the buttons and pass the string or integer equivalent of the buttons value. Also worth noting here are the classes that we will be using with jQuery in a bit.

## 2. Styling using Flex Box

Looking at our CSS, let's get some basic styling going on as well using flex box.

````css
.app{
  width: 50%;
}
.results-screen{
  height: 50px;
}
.flex-wrap{
  display: flex;
  flex-wrap: wrap;
}
button{
  width: 25%;
}
button:last-child{
  width: 100%;
}
````

## 3. The Pseudo Code

Awesome. This is not a bad start! Let's break this down into human logic before we move any further.

Looking ahead, I think we can create a function that takes any integer and move it to either the first or second value in our equation.

E.g. `const handleNum (x) => {//if first; else do second;}`
We can assume we would have separate functions for handling the operators and clear button.

And last but not least, a function that handles the math!

That was hard to picture but now we have 4 functions that we believe will give us our MVP. Let's get to coding!

## 4. Getting the onclick result

So let's get our handleNum() function established and confirm we have everything set up properly.

````javascript
const handleNum = (num) => {
  alert(num)
}
````

Assuming our user is currently only working with positive integers we can create a function that takes 1 number as a parameter and run it through an if/else.

````javascript
let a, 
    b, 
    hasOperator = false;


const handleNum = (num) => {
  if(hasOperator === false){
    a = num;
  } else {
    b = num;  
  }
}

````

Let's also add our handleOperator function.

````javascript
let op;
const handleOperator = (operator) => {
  hasOperator = true; 
  op = operator;
};
````

At this point if we were to console.log our new variables we should see something like 2 "+" 5. (depending on what you've clicked)

If you don't understand how we got here, check the HTML we created above.

## 5. Handling the math

Just like everything in development, there are countless way's to address this. we could have used several if's here. But I went with an object oriented approach.

So let's make an object to store our actual math.

````javascript
let operators = {
  "+" : (a, b) => { return a + b },
  "-" : (a, b) => { return a - b },
  "*" : (a, b) => { return a * b },
  "/" : (a, b) => { return a / b },
  "^" : (a, b) => { return a ^ b }
};
````

Now we can make our handleEquals() function that will reach into our object and grab the [ key , value ] pair accordingly.

````javascript
const handleEquals = () => {
  alert(operators[op](a, b)
}
````


Wow! We technically have our MVP here so let's take a minute to acknowledge how awesome we are before moving onto the jQuery.

## 6. Adding the response to the DOM using jQuery

Let's put our DOM elements into variables for a cleaner code base.

````javascript
let printA = $("#a"),
    printB = $("#b"),
    printOperator = $("#operator"),
    printResults = $("#results");
````
also a variable to store our result, and an arrow function to append/ replace whatever is currently on the screen. The replace part is important to avoid any unexpected results being displayed.

````javascript
let result, 
    appendContent = (x, y) => { x.html(y) };
````

We can run `appendContent(x, y)` anywhere we want, as long as _x is an html element_ and _y is a value_ we should see some magic!

Let's add this new `appendContent(x, y)` function to our handler functions.

````javascript
const handleNum = (num) => {
  if(hasOperator === false){
    a = num;  
    appendContent(printA, a);
  } else {
    b = num;  
    appendContent(printB, b);
  }
};
const handleOperator = (operator) => {
  hasOperator = true;
  op = operator;
  appendContent(printOperator, op);
};
const handleEquals = () => { 
  result = "= " + operators[op](a, b);
  appendContent(printResults, result);
};
````

## 7. Clear the slate

This one shouldn't be too hard. Let's just reset every variable!

````javascript
const handleClear = () => {
  a = 0;
  b = 0;
  hasOperator = false;
  result = " ";
  appendContent(printA, " ");
  appendContent(printB, " ");
  appendContent(printOperator, " ");
  appendContent(printResults, " ");
};
````

And that should do it! I'm sure you've found a few gotcha's like why isn't my calculator adding multiple integers?

I encourage you to dive deeper and find the solution to that question on your own. But if you get stuck, you can find the full source code [here.](https://github.com/hi-matbub/Calculator) .

Thanks for reading!
