# Server

## Terminology







## Node.js





## Socket.IO

AJAX (Polling)

- 서버가 받는 부하가 심함, polling 주기동안 그냥 계속 기다림.
- 실시간성에 부적합하다. 
- 서버 부하가 상대적으로 적고(주기가 길 경우), 기존 웹백엔드 인프라 (Tomcat과 같은 미들웨어)를 그대로 활용할 수 있는 장점.



AJAX PUSH (Long Poll)

- polling과 흡사하며, 응답이 오는지 기다리는 기간이 길기 때문에 long polling이라고 함.
- 클라이언트가 request를 보낼때, 일정 시간(오랫동안) 요청을 닫지않고 기다림.
- Tomcat과 같은 WAS의 경우 Http 연결이 열려있는 경우 1개의 thread가 그 요청을 처리하기 위해 사용되기때문에, 클라이언트가 한정된다.
- 클라이언트로 푸쉬하는 내용이 적을 경우에 유리하며 실시간 채팅과 같이 푸쉬해햐하는 메시지가 많은 경우 적절하지 않다. 



AJAX PUSH (Streaming)

- 일반적인 TCP Connection처럼 클라이언트가 서버로 연결을 맺은 후 그 연결을 통해 계속 이벤트 메시지를 보내는 방식으로 재연결에 대한 부하가 없다.



WebSocket

- 위와 같은 푸쉬 로직을 ajax로 구현하다가 브라우저마다 각기 상이하므로 websocket이라는 표준이 생겼다. streaming과 유사한 방식으로 푸쉬를 지원한다.



Socket.IO

- 웹클라이언트로 푸쉬를 지원하는 모듈으로, websocket의 한계를 뛰어 넘어주는 모듈이다.





## Server HTTP

```sequence
participant Server
participant Client

NOTE over Server, Client : 하하하하하하하하 \n ㄴㅇㄴㄹㅁㄴㄹㅁ나럼ㄴ라ㅓ 
Client -> Server : request

Server --> Client : response
NOTE over Server, Client : 하하하하하하하하 \n ㄴㅇㄴㄹㅁㄴㄹㅁ나럼ㄴ라ㅓ 
```



## ChatterBox - Server Sprint





## Reference

