프로젝트 하기전에 살펴볼 항목들을 정리해 보았다.

[TOC]



## project 시작하기

- [x] version의 의미를 알아보자. ex) ver 1.0.0

  ```javascript
  major.minor[.build[.revision]]  (example: 1.2.12.102)
  or
  major.minor[.maintenance[.build]]  (example: 1.4.3.5249)
  ```

  Some schemes use a zero in the first sequence to designate [alpha](https://en.wikipedia.org/wiki/Alpha_test) or [beta](https://en.wikipedia.org/wiki/Betaware) status for releases that are not stable enough for general or practical deployment and are intended for testing or internal use only.

  It can be used in the third position:

  - 0 for alpha (status)
  - 1 for beta (status)
  - 2 for release candidate
  - 3 for (final) release

  For instance:

  - 1.2.0.1 instead of 1.2-a1
  - 1.2.1.2 instead of 1.2-b2 (beta with some bug fixes)
  - 1.2.2.3 instead of 1.2-rc3 (release candidate)
  - 1.2.3.0 instead of 1.2-r (commercial distribution)
  - 1.2.3.5 instead of 1.2-r5 (commercial distribution with many bug fixes)



- [ ] commit의 규칙에 대해 정리해보자
- [ ] README.md 파일의 convention에 대해 정리해보자.
- [ ] Issue 기반의 branch + pull request flow를 이해한다. 
- [ ] Project automated kanban table을 이용하여 backlog를 관리한다.
- [ ] project 기획서 정리를 해본다.
- [ ] web arithecture 구체화 하기 (server/ client / airtable(db) / git hook 받아쓰기 ,
- [ ] deployment 구체화하기 (라즈베리 or e2c / s3 / airtable) 



## project setting하기

- [ ] typescript / react(CRA를 사용하지 않는다.) / babel /  d3 / linter, eslintrc.json / prettier setting하기
- [ ] folder directory를 구상하기. (src/server, src/client, data/ , airTable/ , helper/file.js .. )



## project 기능 구현 정리하기

- [ ] github login
- [ ] statstic graph & relative graph with d3 (좀더 세부 기획필요)
- [ ] scraping / migration / snapshot / info / url



## project design iteration flow

- [ ] 사용자 기준 - 나 -> 나+CSE -> codestates 스텝-> codestates 스텝 + 수강생
- [ ] 사용량 기준 - local ->  ec2 -> further , handing logic refactor or ghq/apollo
- [ ] 기능 기준 - 사용자 기준 front로 업데이트 -> codestates만의 질문게시판으로 개편 및 data 축척
- [ ] 디자인, interface 기준 - 기능위주 구현 -> ux/ui 고려 시점 fix -> admin page
- [ ] 