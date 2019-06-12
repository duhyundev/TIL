# TIL
Today I Learned
---
### 190527 (MON)
- Understanding git remote & pull
- Terminal vi 명령어
- JEST Assertion + ESlint 설치

**<checkpoint 1-2 공부>**
- Scope   복습 : 변수를 참조할 때, 상위 Scope에서 찾는다.
- Closure 복습 : 외부함수의 환경을 기억하는 내부함수. (이는 return function) 
---
### 190528 (TUE)
**<checkpoint 1-2 확인>**
- Closure 재확인 : 외부함수의 환경을 기억하는 내부함수, (기억하기 위해선 내부가 함수가 외부의 것을 참조해야만한다.)

- JEST Assertion
- underbar pair programming
  > **memoize vs once**
  
    - once : *(parameter를 필요로 하지 않는)* 함수가 한번 실행되면, 실행 여부와 실행된 결과를 **기억**하고, 
      실행 여부에 따라 실행되었던 결과를 바로 출력
    - memoize : *(parameter를 필요로 하고)* 각 parameter set에 대한 결과를 **기억**하고, 기억된 parameter에 대해서는 그 결과를 바로 출력
    
    cf> parameter set의 기억되는 형태는 아래와 같다. 각 parameter를 기억하기 위해, JSON형태로 object의 property로 기억한다.
     
      set = {
              JSON.stringify_1 : result_1 ,
              JSON.stringify_2 : result_2 ,
              ...
            };
          

- recursion pair programming
- ES 6 : ...argument ,arrow function
- execution context

**<checkpoint 3 공부>**
- this 복습 : 핵심은 this의 **위치**와 **호출시간**에 따라 어떤 문맥에 맞게 지정되는 지를 이해하는 것이다.
  > **5 pattern of binding 'this' <- 이는 this를 지정되는 모든 경우에 따른 큰 틀이다.**
  
    - global reference : global object를 this로 지정할 수 있다.
    - free function invocation : global object를 this로 지정할 수 있다.
    - functional method, call/apply : this를 내가 원하는 것으로 manual하게 지정할 수 있다.
    - constructor mode : prototype을 생성할 때, 선언된 this를, contructor mode를 통해, instance로 지정할 수 있다.
    - method invocation : method가 호출될 때, method의 상위 객체로 this가 지정된다.
    
    cf> ES6 문법(arrow function)을 통해, 의도치 않는 **위치** 정보를 생성시키지 않는다. 
---
### 190529 (WED)

- data structure : data structure를 공부하면서, 어떤 data strucutre를 설명하기 위해서 필요한 것은 아래와 같다.
  > **3 things to specify to explain data structure
  
    - what does contain data structure's node field : 어떤 node가 무엇을 담고 있는지 명시할 수 있어야한다.
    ex) graph has two types of node : vertices(=node), edge(=link, branch)
    ...
    
    - Terminology : 명시된 node가 의미하는 바를 '용어'로서 명시할 수 있어야한다.
    ex) in case of tree data structure
    > root node : top node in tree (only one)
    > depth :  the number of edges between the root and the node 
    ...
    
    - Operation : 해당 data structure가 node를 조작하는 것을 명시할 수 있어야한다. 이러한 명시는 추상적 개념을 가지고 있고, 그림으로 간단하게 표현할 수 있다.
    ex) in case of queue data structure, having basic two operation
    > enqueue(node)
    > dequeue(node)


**<checkpoint 4 공부>**
- Object.create() & protype 공부 : Object는 함수이며, invoke 될때, prototype의 속성(Object의 prototype)을 생성한다.

---
### 190530 (THU)

- OOP 에 대한 간략한 이해 -> 1시간 짜리 영상 시청 요망됨.

- data structure Sprint 1 (part 1) pair programming

  > **Stack, Queue, 의 operation을 구현한다.**
  
    - Stack : count 하나로 storage에 push, pop을 구현할 수 있다.
    - Queue : queue도 Linked list와 같이 rear(head), front(tail)을 가지므로, enqueue와 dequeue를 2개로 구한할 수 있다.
    >> **각 operation에 따른 인덱스(주소, ...)의 변화 **를 그림으로 그렸다.
      이를 위에서 말한 구체적인 정리와 같이 week 1을 정리하자.
      
  > Instantiation Pat
terns (4)의 간략한 특징만 적어보자. -> i-am-in-the-dark 에서 모든 예시 참조
    
    - Functional instantiation
      new, this, prototype을 이용하지 않고, 즉 method 자체를 내장시킨다.
      
    - Functional instantiation with shared methods
      shared methods를 참조하여, Functional instantiation과 같은 형태로 만든다.
      참조로 인해, 메모리 효율이 있다.
      
    - Prototypal instantiation
      Object.create를 이용하여, prototype을 상속시킨다. 이는 생성자 함수를 이용하는 것이 아니다.
        
    - Pseudoclassical instantiation
      생성자 함수를 이용하여, instance를 new function() 으로 invoke시킨다.
      
      
**<checkpoint 5,6 공부>**
- calculate time complexity : x회 실행했을 때, 노드의 변화되는 정도를 함수로 편하고, 이 함수의 함수를 f(x)라고 하면, 
                              n * f(x) = 1 을 만족하는 x 값의 극한값과 같은 최소 형태를 complexity로 표현한다.
                              추후, 각 data structure에 대한 정의(node, terminology, operation) 그리고,
                              각 operation에 대한 complexity를 구하는 것에 대한 구체적인 정리가 필요하다.
    

---
### 190531 (FRI)
--> i cannot sleep, so just type what i do
**<checkpoint 7,8 공부>**
- this binding
- callbacks

- data structure Sprint 1 (part2) pair programming (skipping detail)
  -  Linkled List
  -  tree
  -  Binary Search Tree

- complexity
- how to work Hash

---
### 190601 (SAT)
**<checkpoint 7 review>**
- setTimeout's process (parameter as callback or invoked function)
- IIFE function Expression, invoked function
- Remind 5 pattern of binding 'this'


- data structure Sprint bareMinimum Complete
  > remind instantiation style
  > Specify data structure's hierarchy
  > understanding basic operations
  > if possible, init this Sprint for reminding

>> thinking about reformatting TIL or graphic Wiki or Github blog....

- TIL is need to reformating for more efficient management
> 1. Be safe for vi editor (practice vi shortcut keys)
> 2. Weekly TIL summary sync to Self Assessments (to prepare)
> 3. consider git blog
> 4. thinking about graphic wiki using d3.js
> 5. replace current notion after making 4. graphic wiki

>> Graphic wiki has a network concept graph
i think data structure sprint 1 help me to use d3.js library

before, making Graphic wiki, to use miro, keep maintaining graphic relations to things i learned and searched. And TIL should be in english. it help to increasing writting ability and reading material.

+++ Shiftee's time data & TIL's date data & knowledge network interactive graph web page [it should be generated by automatically adding knowledge DB ] AUTO DAQ by shiftee's time data, TIL date data]

---
### 190602 (SUN)
- data structure sprint remind
- data strcuture pseudo code thinking & data structure's concept remind (implement , node , alogrithnm)

> sunday is important to complete this week. sprint review or reminding learned concpet. and get a rest for next week.
so, saturday should be more immversive than yesterday.
and sunday should be more focused on self-assemment test.

---
### 190603 (MON)
**<checkpoint 9,10 study in morning and 8,9,10 review>**
- 8) callback
  > understanding JS Runtime Environment (V8 JS ENGINE : HEAP, STACK , Event Loop, WEB API's, Callback Queue)
  > above this, got more unstanding setTimeout function
  > until stack is empty, in Callback Queue, anything is not executed though time is '0'

- 9) data type
  > Understanding about dynamic type allocation in JS
  > i think the address concept in JS is not helpful to understand reference type. just distinguish premitive type and reference type
  > distinguish 'Assign' vs 'Define'
  > in function scope without return, it seems that dynamic type allocation is not executed. But, having return and allocation new variable, it works. Why? i think more understanding about JS execution context.
  
- 10) order of execution 
  > the order is most important for understanding invocation.
  > when define the function, parameter > callback, i think parameter has a most piority in JS
  > this check point, having more understanding about specific order for function invoked.
  > it has a connection to setTimeout function, and check point 8,9

- Subclass Dance Party Sprint start
  > when function is define, what happen ? (__proto__, prototype, constructor) link the every thing about heritance(in Miro), it was helpful.
  > pseudoclasscial style is UGLY, but should know about what happens in JS. in fact, JS is ugly.
  > thinking about OOP (Oriented Object Programming).
  > should use practically in ES6 Class syntax ( Class, Constructor, super, method ...)
  > thinking about anti-pattern.

- repeat Self-Assement 01 about Tree data structure
  > i think sprint is not useful, so i need to init the sprint when i am ready....
  > as time is empty, keep trying this until this week.(actually tommorrow's morning)

---
### 190604 (TUE)
- Toy-Problem1 repeat
  >thinking about 2-dimensional array in JS. or is it better form in JS ? just about method?
  >optimzied solution should be considered to solve thing. but is it necessary to me now? or just impossible to think directly ?

- Git flow
  > branch instruciton should be more trained to me by myself
  > i do this instruction until now :
    git status, commit
    git push origin(?) master or brnach (branch's status) 
    git remote add pair(name's) (remote address)
    git pull pair origin
    git branch 
    git checkout -b (branch's name)
    git clone (remote's address)

- Dance Party Sprint complete
  > it is clear that heritance is essential for re-use the statement. ironically, prototype is ugly in JS, but it is thing for not to be confused.
  > 2D animation or in web browser's animation is fun for presentng something to use simple concept of mathmatics form or equations. that is should be considered to know about exactly asychromized callback. (Event handler loop, callback queue... Web api is most important to front layer.
  > CSS needs for me just to do it something. this process is stacked in my experience, something not clear.

- Student's experience
  > not big change is happend to me. just thinking more about me. this place's people is attractive to me so much. but i don't know about something discomfort.

---
### 190605 (WED)
- Toy-Problem1 repeat + Toy-Problem2 oK
  > more trying refactoring using recursion or functional programming
  > recursion debugging is so hard to get a timing or return execution

- Git flow 
  > branch control : to make a branch, make sure where am i, and location i wanted to make the branch.
  > git stash

- N-Queens Sprint 1
  > i think N-Queens has a huge extension of case. it is hard to get form or pattern. so i decide to give a job to computer by some restriction.
  > as i expected, image is powerful to imaginate.
  > time complexity is considered. but i want to know about space complexity.
  > Tree decision is big issue.
  > thinking(navigating) and driving is seperated. in JS, driving ability is so important to me now. more like JS. but JS is ugly yet.

---
### 190606 (THU)
- today is holiday

- N-Queens Sprint 1 
  > data format for board and chess rook
  > at least, one exact solution for n = 3,4,5
  > should refactory the soultion for general n

- Git flow
  > git reset HEAD~1
  > should know more branch master forked repository ...

---
### 190607 (FRI)
- N-Queens Sprint 2
  > thinking about recursive algorithm
  > driving ability up!
  > should think how to reduce time to solve the problem
  > should refactory about i coded for productivity in readability or complexity

- Student's experience
  > thinking about software fields
  > thinking about all things what i can do from this course.

- Circle
  > in local environment, execution time is different from in vitual environment
  > check what is Circle, why do this need for me?
  > automatived test should be considered in every coding. it takes more times than i didn't consider. but it is more productive considering future i think now.
  > what kinds of Assertion or Automated test library ??? should list or should summary this after.( after,, after,, is bad.,,,,,)

---
### 190608 (SAT)
- N-Queens Sprint review
  > nothing helps me this session

- Chatterbox-Client
  > understanding the concept of client and server system
  > search in Web service concept
  > http, API, AJAX, browser... understanding the web arithecture
  > install postman 

- Toy-problem 4 : nthFibonacci alorithm without recursion
  > To determine the value of nthFibonacci, should know the value of n-1, n-2th Fibonacci value. It can handle with a temp array data type.
  > temp array should update fixed size of data. DO NOT stack this array ! i think it is so horrible as the memory is not efficieny. (i use the shift, push for maintaining 2 elements of temp array.

---
### 190609 (SUN)
- SUNDAY is be need to be rest on home. but... we need to prepare assements or other something.
- student experience preparation

- Terminal config
  > understanding concept of Shell
  > .bash_profile vs .bashrc
  > be curious about OS, process unit ...
  > be going to search about bash shell
  > git-prompt custom theme adjustify by vim in terminal

- article
  > countering the Negative image of Women in computing
  > keep going to read this article

---
### 190610 (MON)
- Toy-problem 5 : bubble-sort althorithm
  > should consider time-complexity
  > search for other althorithm

- self-assessment-01 repeat : recursive mapped tree generator

- Chatterbox-Client
  > event-listener with keyup
  > dealing select element
  > understanding concept of AJAX
  > Fetch-API : GET/POST method & response, should look at API.
  > what is XSS ? , thinking about security of client side or server side
  > 3 type of requests should be defined by myself
  > script or eval or IIFE execution by parsing to HTML. so we have to check before parsing
  > in process of GET from server, we can detect some danger by using reg-expression test in data
  > more thinking about security concept and browser's process, and protocol

- preparation self-assessment-02
  > pseudoclassical heritance
  > ES6 syntax (spread operator, class constructor(super, ...), destructing, ... . should be more normal things to me. 
  > n-queens recursion(tree decision model, back-tracking)
  > concept of server, client.
  > should be conceptual thinking in my head this issues

---
### 190611 (TUE)
- Self-assessment-02 : repeat all things last week.
  > Dance Party (Class, pseudoclassical, Prototype language JavaScript)
  > N-Queens (calculate the time complexity, how ? implement process ? )
  > chatterbox-Client (client side have to do dealing the dom and CSS and ...) 

- React Solo Sprint
  > understanding the concept of React
  > should be more focused on practical performance than principle of deep JS.
  > summary blog what i understand and think
  > curious about things below
    : redux, Babel, deep ES6, building the react, framework, vue, Angular, ...

- Sprint review Chatterbox-client
  > remind of client and server concept
  > Fetch API

---
## 190612 (WED)
- Toy-Problem 06 : CommonCharcter
  > trying to be functional script

- React recast.ly Sprint
  > understanding react power
  > understanding react's process (props, states, lifecycle)
  > know how to use API (specific Youtube API 3)
  > should focus on how react works
  > should think about design state in react of UI Logic

- prepartion of Student experience

---
