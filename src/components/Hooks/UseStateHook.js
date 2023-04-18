import { useState } from 'react';


function computeInitialCounter() {
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
}

export function UseStateHook() {


  /* Basic setState */

  // const [counter, setCounter] = useState(0);
  const [counter, setCounter] = useState(() => {
    // Нужно передать callback для дого, что бы функция повторно не вызывалась
    return computeInitialCounter();
  });

  /* setState for work with objects */
  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })


  function increment() {
    setCounter(prevCounter => prevCounter + 1)
  }

  function decrement() {
    setCounter(prevCounter => prevCounter - 1)
  }

  // Update Object State
  function updateTitle() {
    setState(prevState => {
      return {
        ...prevState,
        title: 'New Title'
      }
    })
  }


  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
      <button onClick={updateTitle}>Change title</button>
      <hr />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}