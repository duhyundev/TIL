/* 
 ! Hooks are a new addition in React 16.8. 
 ? They let you use state and other React features without `writing a class`.

   objective : react hooks 사용 및 HoC 개념 이용. (reference : reactjs.org/docs/hooks-intro.html)

   ? introduction hooks : https://youtu.be/dpw9EHDh2bM
*/
import React, { useState, useEffect } from 'react';

function App() {
  // * useState는 hooks이다. useState는 유사 [this.state, setState] 꼴 과 같은 pair를 return한다.
  const [count, setCount] = useState(0);
  /**
   * ? count
   *    count는 this.state 안에 있는 변수와 비슷하게 이해될 수 있다.
   * ? setCount
   *    setCount는 count 변수만을 위한 setState()와 비슷하게 이해될 수 있다.
   * ? setState(argument)
   *    setState의 argument는 local state의 값을 초기화할 수 있다. 이러한 초기 argument는 첫번째 render시에만 사용된다.
   *    또한, 하나의 component 안에서 여러개의 state 변수를 선언할 수 있다.
   */
  const [age, setAge] = useState(28);
  const [data, setDate] = useState({ year: 2019, month: 'August', day: 29 });
  // ...

  /**
   * ? useEffect
   *    useEffect는 componentsDidMount, componentsDidUpdate와 유사하다.
   */
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Button</button>
    </div>
  );
}

export default App;
