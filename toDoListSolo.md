# ToDoList - Solo Sprint



### Date

190615(SAT) ~ 190617(MON)

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

NOTE over App : local State
App -> Sidebar : things, \n currentGroup, \n f_setCurrentGroup

NOTE over Sidebar : Event 2 (click) \n f_setCurrentGroup
Sidebar --> App : currentGroup

NOTE over Sidebar : Event 6 (click) \n ????
Sidebar --> App : ????


Sidebar -> Search : f_setCurrentGroup
NOTE over Search : Event 3 (click)
Search --> App : currentGroup
App -> ToDoList : things,\n currentGroup,\n isNew,\n f_makeThing,\n f_updateIsNew
NOTE over ToDoList : Event 4 (click)\n onClickToRenderNew
ToDoList --> App : isNew
NOTE over ToDoList : Event 5 (keyup)\n onKeyUpToMakeThing
ToDoList --> App : isNew,\n things 

ToDoList -> ToDoListEntry : thing,\n f_updateThings
NOTE over ToDoListEntry : Event 1 (click)
ToDoListEntry --> App : things

```





