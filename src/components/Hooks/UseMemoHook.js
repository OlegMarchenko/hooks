import { useState, useMemo, useEffect } from 'react';


function complexCompute(num) {
  console.log('compute')
  let i = 0;
  while (i < 1000000000) i++
  return num * 2
}

export function UseMemoHook() {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);


  /* Кеширует вычисление другой функции, при этом НЕ вызывается
  рендер компонента при измении другого стейта */
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  const styles = useMemo(() => ({
    color: colored ? 'tomato' : 'black'
  }),[colored])

  useEffect(() => {
    console.log('styles changed!')
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Computed Value: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Remove</button>
      <button onClick={() => setColored(prev => !prev)}>Change</button>
    </div>
  )
}