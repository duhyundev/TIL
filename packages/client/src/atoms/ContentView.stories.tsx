import React from 'react';
import ContentView from './ContentView';
export default {
  title: 'Atoms|ContentView',
  component: ContentView,
};

const mock = `
# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`;

const mockTemplate = `
# Title : 30+ user research questions for dashboard desgin

## 1. Context

사내 대시보드 설계 인터뷰 준비

---

## 2. Summary

대시보드 설계시, 고객이 원하는 것을 묻는 것 만으로는 충분하지 않다. 왜 이러한 데이터가 필요하고, 데이터가 어떻게 사용되는지 이해해야만 한다. 적절한 고객 인터뷰 없이, 대시보드 설계는 정보도 없고, 실행 가능하지 않은 보기에만 좋은 그래프와 차트들을 만들 뿐이다.

대시보드 설계 프로젝트에서 내가 사용한 질문지들을 공유하면 아래 4가지 영역을 커버한다.

1. 고객의 목표
2. 사용 맥락
3. 적시성과 상호작용 요구사항
4. 도메인 지식

cf) 적시성(timeliness : 어떤 경제적 사건에 관한 정보가 너무 늦게 제공되어 의사결정에 영향을 미칠 수 있는 능력을 상실하기 전에 의사결정에 이용될 수 있도록 제공되어야 한다는 회계정보의 속성을 말한다.)

---

### 고객의 목표

대시보드의 세가지 주된 목적은 아래와 같다.

- 목표를 설정하고, 진행사항을 추적한다. (strategic)
- 실시간 퍼포먼스를 모니터링 한다. (operational)
- 기회를 식별하거나, 문제를 조사한다. (analytical)

대시보드를 이용하면서, 여러개의 목적을 찾는 고객은 드물지 않다. 고객의 목표는 데이터가 어떻게 시각화되는지 뿐 아니라, 제품의 기타 기능도 결정하게 된다.

고객의 목표를 이해하기위한 질문

#### General

- 가장 큰 목표와 우선순위는 무엇인가요?
- 이러한 수치가 당신의 목표/역할을 달성하는데 어떻게 도움이 되나요?
- 분석을 통해 수행해야하는 가장 중요한 작업은 무엇인가요?
- 왜 데이터 혹은 수치가 중요한가요?

#### Strategic

- 성공은 당신에게 어떤 모습인가요?
- 너의 성공은 어떻게 측정하나요?
- 마지막 목표를 세웠을 때, 오늘 진행 상황에 대한 평가 요청이 온다면, 당신은 어떻게 하실건가요?

#### Operational

- 어떤 결정을 자주 내려야 하나요?
- 사업에 대해 스스로 혹은 팀원에게 정기적으로 어떤 질문을 하나요?
- 하루 일과를 소개해 주세요.

#### analytical

- 개선을 위한 기회를 어떻게 식별하나요?
- 지난번, 당신이 문제를 이해하기 위해서 데이터를 사용한 것에 대해 이야기 해주세요.
- 만약 데이터를 가지고 있다고 했을때, 방지할 수 있는 실수나 놓친 기회가 있다면 무엇인가요?

---

### 사용 맥락

사용맥락은 다양한 데이터 속에서 우선순위 지정에 도움이 됩니다.

한눈에 보기위한 디자인과 심층 분석을 위한 디자인은 매우 다르다. 사용 맥락과 시나리오를 이해하지 않으면, 정보가 의미있는 결과로 이어지지 않는다.

#### General

- 마지막으로 사용한 수치를 말해주세요.
- 데이터를 보도록 어떤 것이 트리깅하나요?
- 어떤 맥락에서 대시보드를 검토하나요?
- 자주 수치들을 검토하나요?
- 보통 얼마나 수치들을 검토하는데 시간을 보내시나요?

#### Outcomes

- 특정 데이터를 보유하고 있을 때 어떤 것들을 할 것 인가요?
- 결정을 내리기위해 수치를 어떻게 사용하나요?
- 어떤 데이터를 보게되면 즉각적인 조치를 취할 수 있나요? / 조치를 취해야하는 기준은 무엇인가요?
- 만약 수치 변화에 따라서, 다음에 당신이 할 행동은 무엇인가요?

---

### 적시성과 상호작용 요구사항

비용적 측면에서, 주기적인 것과 실시간 성 데이터를 구분하는 것이 이득이다. 사용자가 적시성과 중요성을 자동 혹은 적절히 알려주지 않는 경우 추가적으로 인터뷰를 통해 알아야한다.

#### Timeliness

- 일간 기본적으로 정보가 필요한 것은 무엇 인가요?
- 특정 데이터 혹은 수치를 얼마나 자주 검토하나요?
- 경향 혹은 단일 시점 중 어떤 정보를 확인해야하나요? 왜 중요한가요?

#### Interactivity

- 특정 숫자를 또 다른 무엇과 비교하나요? (외부 동향, 평균, 산업 동향, 회사 동향 등)
- 데이터를 보고 나서 무엇을 하나요?
- 다른 사람들과 정보를 어떻게 공유하나요?

---

### 도메인 지식

사용자 특성에 따라서, 데이터 대시보드를 만드는데 유의해야합니다. 통계적 지식과 관련해서 얼마나 많은 지원과 설명이 필요한지 알아야한다. 중요한 것은 고객을 잘 이해하는 것이다.

고객을 잘이해하기 위해서는 해당 산업/분석 용어들을 잘 이해해야 합니다. (CPC 와 같은 GA 용어 등) 데이터에 대한 고객의 능숙함을 이해하기 가장 쉬운 방법은 분석도구로 행동을 관찰하고, 분석할 때의 고객의 사고 과정을 듣는 것 입니다.

#### Familiarity with data analysis

- 마지막으로 데이터로 작업한 때를 말해주세요.
- 엑셀을 자주 사용하는 용도는 무엇인가요?
- 즐겨사용하는 분석 툴과 보고서를 보여주세요. 왜 그것들을 좋아하나요?

#### Familiarity with business metrics and their implications

- 현재 어떤 지표를 추적하고 있고, 왜 중요한가요?
- 어떻게 어떤 지표를 추적할지 결정하나요?
- 동료가 사용할 다른 지표들에 대해서 알고 있나요?

#### Familiarity with industry and analytics terminologies and acronyms

- 분석을 처음 사용할 떄, 직면한 어려움은 무엇이 있나요?
- 사용자가 말하는 것을 듣는 것 만으로도 도움이 됩니다. (no-question)

---

## 3. Opinion

- 대시보드를 바라보는 관점이 3가지로 크게 나눠볼 수 있다.
- 3가지는 서로 다른 속성을 지니나, 대시보드가 한가지 특성만을 가지지 않고, 여러 복합사항을 다룰 수 있다.
- 시각적인 요소는 사용 맥락에 따라 다르며, 이를 구분하여 구현해야한다.
- 결정의 thresholds를 파악하는 것이 중요하겠다.
- 비용적 측면에서 주기적/실시간 을 구분하는 것이 역시나 중요하다.
- 한번의 인터뷰보다, 적시성/중요성의 부분에서는 특히나 재확인이 필요하다.
- 적시성에서 단일 시점과 경향을 구분해야한다.
- 공유의 측면과 대시보드 외부적인 요소들을 따질 수 있어야한다.
- 고객의 분석/수치/도메인 지식에 따라서 이를 반영할 수 있어야한다.
- 고객이 지식이 없다면, 그냥 들어라.

---

## 4. Reference

https://uxdesign.cc/30-user-research-questions-for-dashboard-design-5534abbfca79
`;

export const Content = () => <ContentView source={mock} />;
export const TranslateExample = () => <ContentView source={mockTemplate} />;
