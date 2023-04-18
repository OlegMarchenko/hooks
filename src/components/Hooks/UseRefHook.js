import { useState, useEffect, useRef } from 'react';


export function UseRefHook() {

  const [value, setValue] = useState('');

  /* Если мы хотим сохранить что то между рендерами,
     то мы используем useRef и при этом, еслм мы НЕ хоти это перерисовывать */
  // Если мы хотим что либо перерисовывать, то мы используем useState
  const renderCount = useRef(1);

  // Так же мы можем получать ссылки на какието дом елементы
  const inputRef = useRef(null);


  // С помощью useRef можно получить предыдущее стостояние
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
  })


  useEffect(() => {
    prevValue.current = value;
  }, [value])

  const focus = () => inputRef.current.focus();


  return (
    <div>
      <h1>Renders count: {renderCount.current}</h1>
      <h2>Prev count: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={focus}>Focus</button>
    </div>
  )
}