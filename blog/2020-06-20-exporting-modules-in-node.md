---
id: exporting-modules-in-node
title: How To Export Modules in Node.js
author: Mat Bub
author_title: Full Stack Developer
author_url: https://github.com/hi-matbub
author_image_url: https://avatars.githubusercontent.com/hi-matbub
tags: [javascript, node, tutorial]
---

Today we will take a quick dive into one of my favorite features of Node, _modules_. 

If your coming from vanilla JavaScript or jQuery, the concept of modules can be overwhelming and confusing, but fear not. I'm here to break it down "barney-style".

<!--truncate-->

---

### What is a module?

Modules generally exist within that massive node_modules folder you might have seen in your directories. However when working with Node.js it's common to create your own modules, which is used to pass information from one file to another.

*NOTE: modules that appear in node_modules should not need altering.*

Generally a lot of JavaScript revolves around objects. Modules are no different. Below are some basic examples to export/ require modules.

## Strings

**helpers.js**

```` js
const myString = 'Hello World';

module.exports = myString;
````

**index.js**

````js
const { myString } = require('./index');

console.log(myString);
````

## Arrays

**helpers.js**

```` js
const myArray = [1, 2, 3, 4, 5];

module.exports = myArray;
````

**index.js**
````js
const { myArray } = require('./index');

console.log(myArray);
````

## Objects

**helpers.js**

````js
const myObject = {
  firstItem : 'item one',
  secondItem : 'item two',
  thirdItem : 'item three'
}

module.exports = myObject;
````

**index.js**

````js
const { myObject } = require('./index');

console.log(myObject);
````

## Functions

**helpers.js**

````js
const myFunction = () => {
  console.log('Hello from myFunction');
};

module.exports = {
  myFunction: () => { myFunction() }
}
````

**index.js**

````js
const { myFunction } = require('./index');

console.log(myFunction);
````

---

### In conclusion

There are several ways to export modules. I've introduced you to one. This is a fairly straight forward approach that will get you up and running in no time. 
