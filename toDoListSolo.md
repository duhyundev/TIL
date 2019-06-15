# ToDoList - Solo Sprint



### Objective

- React Process에 대해서 최대한 이해하고, anti-pattern은 지양이 아니라, 금한다.
- Lifting State up, LifeCycle API를 최대한 활용하여, react 동작으로 몸으로 익힌다.
- Web App을 만들고 있다는 사실을 인지한다.
- 좋은 UX를 제공하기 위해 노력한다.
- 유지,보수 및 component 추가를 하기 쉬운 환경을 고려한다. 



---

### React Design

```sequence
participant Search
participant Sidebar
participant App
participant ToDoList

participant ToDoListEntry

App -> Sidebar : props :{things, f2}  
Sidebar -> Search : props :{things, f2}
NOTE over Search : Event 2 (click)
Search --> App : \n

App -> ToDoList : props:{things, f1} 
ToDoList -> ToDoListEntry : props:{thing, f1}
NOTE over ToDoListEntry : Event 1 (click)

ToDoListEntry --> App : \n


```





