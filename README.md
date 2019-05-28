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
