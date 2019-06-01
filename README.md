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
