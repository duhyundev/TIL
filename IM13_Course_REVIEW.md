# IM13 Course Review

## Overview

 **IM** means 'immersive'. From 190527, to 190629, we have 5 weeks to experience of Full-Stack Web development[^**MERN Stack**]. This document contains review of each Sprint, Checkpoint and other major issue with them . All Sprints have each independent objectives and contents. but, definitely, there is something connected to each others. So we can figure out why this course should be like this order, and what objective each sprint has. Below table is the order of this document.

[TOC]

## Abstract





## CheckPoint

### Introduction

 Checkpoint is about basic or intermediate knowledge of JavaScript language and other significant thing to develop web app. This may be related to Job interview or essential concept of thing about web architecture or process. So, we shoud focused on exact reason or concept of some problem and checkpoint's topic. I introduce the main things of each topics and conceptual idea.



### CheckPoint 01 : Scope

- [ ] Should distinguish the variable's name and parameter name.

- [ ] Should distinguish the variable's name in each scope.

 I am not sure, it means that JavaScript has lexical scope. I purse this conceptual things should be verified by [You Don't Know JS][You Don't Know JS Github] or other reference.



### CheckPoint 02 : Closure

- [ ] Should define exactly what is the closure.

- [ ] Should think about scripting technique using closure. (e.g [currying][currying])

 In my words, Closure is the internal function refers to external function's varbles. Largely, I think closure has exeuction context of internal function. Closure is main point of javaScript language like scope. I am not sure, closure concept is the only feature of javaScript language. 

 So we should figure out computer language paradigm. I am really interested in this field personally. Because, it is a part of human language and machine language or this is a way of thinking with marco perspective.



### CheckPoint 03 : Keyword 'this'

- [ ] Should explain what is the meaning of keyword 'this'.
- [ ] Should explain 5 patterns of 'this' binding.

'this' is an object that the invoked function points to when executing. Not depend on where the function in which it is defined. Let's explain 5 patterns of 'this' binding with some codes.

``` javascript
var foo = function () {
  console.log(this);
}

// 1. Global Reference : global object (in browser, this is window)
console.log(this);

// 2. Free Function Invocation : global object (in browser, this is window)
foo();

// 3. Functional method : To manually specify, 'bar'
foo.call(bar, ...arguments);
foo.apply(bar, arguments);

// 4. Construction Mode : a new object created for that invocation, 'foo'
new foo();

// 5. Method Invocation : object on the left of the call time dot, foo
foo.method = () => console.log(this)
foo.method();
```



### CheckPoint 04 : JS Prototypes

- [ ] Should explain javaScript is prototype language.
- [ ] Should explain prototype meaning and difference of class.
- [ ] Should know how to use object.create().
- [ ] Should know how to use new operator.



### CheckPoint 05 : Big O

- [ ] Should explain meaning of time complexity.
- [ ] Should calculate time complexity of data structures and algorithm.
- [ ] Should distinguish the worst case and average case.

| data Structure     |                      |                      |                      |                      |
| :----------------- | :------------------: | :------------------: | :------------------: | :------------------: |
|                    |        Access        |        Search        |      Insertion       |       Deletion       |
| Array              |   $${\theta(1)}$$    |   $${\theta(n)}$$    |   $${\theta(n)}$$    |   $${\theta(n)}$$    |
| Stack              |   $${\theta(n)}$$    |   $${\theta(n)}$$    |   $${\theta(1)}$$    |   $${\theta(1)}$$    |
| Queue              |   $${\theta(n)}$$    |   $${\theta(n)}$$    |   $${\theta(1)}$$    |   $${\theta(1)}$$    |
| Single-Linked List |   $${\theta(n)}$$    |   $${\theta(n)}$$    |   $${\theta(1)}$$    |   $${\theta(1)}$$    |
| Hash Table         |      $${N/A}$$       |   $${\theta(1)}$$    |   $${\theta(1)}$$    |   $${\theta(1)}$$    |
| Binary Seach Tree  | $${\theta(log(n))}$$ | $${\theta(log(n))}$$ | $${\theta(log(n))}$$ | $${\theta(log(n))}$$ |
|                    |                      |                      |                      |                      |

Advanced

- [ ] Should explain meaning of space complexity.
- [ ] Should calculate space complexity .



### CheckPoint 06 : Keyword 'new'

- [ ] sdfsd
- [ ] 



### CheckPoint 07 : Function Binding

- [ ] example



### CheckPoint 08 : JavaScript Callbacks

- [ ] example



### CheckPoint 09 : value vs. Reference

- [ ] example



### CheckPoint 10 : Order of Execution

- [ ] example



### CheckPoint 11 : Recast.ly

- [ ] example



### CheckPoint 12 : Chatterbox Server

- [ ] example



### CheckPoint 13 : intro mySql

- [ ] example

## Sprint Review

### Sprint 01 : Immersive Prep

### Sprint 02 : Data Structures & OOP

### Sprint 03 : Inheritance Patterns

- [ ] Should explain the concept of Polymorphism and Inheritance in OOP.
- [ ] 
- [ ] 
- [ ] 
- [ ] 



Obtain Skill

- [ ] Try abstracting various models in real world into the object.
- [ ] Display the object model using view (e.g HTML, CSS)

Extra 

- [ ] 
- [ ] Attribute and effect in CSS
- [ ] 



### Sprint 04 : Algorithms

### Sprint 05 : Interaction with Server

### Sprint 06 : ES6 APIs and React



#### Solo Sprint  : Redux (Optional)





### Sprint 07 : Server and Node

### Sprint 08 : Server Side Techniques

### Sprint 09 : Databases

### Sprint 10 : Authenication and Full Stack Development

### Sprint 11 : Deployment and Build Tools



## Self Assessment Review

### Self Assessment 01 

### Self Assessment 02 

### Self Assessment 03 



## Hiring Assessment

### 1. Time Complexity

------

know how to measure time complexity from given algorithm code

- constant
- linear
- quadratic
- logarithmic
- exponential

### 2. Asynchronous Callback

------

- nodejs fs module
- javascript callback 
  - callback usage and error handling

### 3. Authentication & Security & Deploy

------

- how to handle & store user password
- know AWS service blocks (basics: S3, EC2) 
  - what is cloud computing?
  - what is deployment and why need it?

### 4. data structures

------

know what they are, and how to implement them

- stack
- queue
- linked list
- graph
- hash table

### 5. git

------

git commands

- know what they are
- know where we can use 
  - git init
  - git status
  - git add
  - git commit
  - git push
  - git pull
  - git remote
  - git checkout
  - git branch
  - git log
  - what is GitHub
  - GitHub Pull Request
  - GitHub Fork Repository

### 6. HTML/JS/CSS

------

- know how to connect JS & CSS with HTML
- know how to draw basic DOM with CSS

### 7. Inheritance Patterns

------

#### understand 4 ways of having Instantiation

------

- Functional
- Functional Shared
- Prototypal Instantiation
- Pseudoclassical Instantiation

#### know javascript prototype (chaining)

------

- know how to use `Object.create`
- know how to use `new` operator

### 8. module.exports vs exports

------

- know the difference between
- know how to make a module in common js

### 9. nodejs server application

------

- what is server application?
- know the basic setup of nodejs server
- know express framework and how it is helpful
- know how to implement some get or post request

### 10. ReactJS

------

- know what SPA is
- know why React is good
- know state vs props
- know ES6

### 11. recursion

------

- understand the basics of recursion, how it works
- try to find some example problems with javascript recursion problems

### 12. SQL design

------

- know how to do some basic SQL queries
- know how to do and the difference among basic inner join, left join, and right join query

### 13. javascript this

------

- what is `this` ?
- when is `this` defined?
- what are call, apply, bind and some examples for each usage?

### 14. what is REST ?

------

### 15. know basics of MVC design patterns

------





## Toy Problem Review

### 01 rockPaperScissors

### 02 firstNonRepeatedCharacter

### 03 isSubsetOf

### 04 nth Fibonacci

### 05 bubbleSort

### 06 commonCharacters

### 07 treeDFSelect

### 08 largestProductOfThree

### 09 deepEquals

### 10 htmljQueryColor

### 11 rotatedArraySearch

### 12 powerSet

### 13 treeBFSelect

### 14 compose & pipe

### 15 binarySearch

### 16 Range

### 17 Balancedprems

### 18 asyncMap

### 19 







---

Reference

[^**MERN Stack**]: Mongo DB + Express + React + Node.

[You Don't Know JS Github]: https://github.com/getify/You-Dont-Know-JS
[currying]: https://en.wikipedia.org/wiki/Currying
[ Big O cheatsheet]: http://bigocheatsheet.com/

