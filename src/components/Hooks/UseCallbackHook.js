import { useState, useCallback } from 'react';
import ItemsList from '../ItemsList';


export function UseCallbackHook() {

  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'tomato' : 'black'
  }

  /* Так же как и useMemo предотвращает не нужный перерендер компонента,
     что в свою очередь оптимизирует компонент */
  const generatesItemsFromApi = useCallback((indexnumber) => {
    return new Array(count).fill('').map((_, i) => `Element: ${i + indexnumber}`)
    // Сразу же возвращает значения и это НЕ
    // результат то что происходит в функции, а сама функция
    // с использование useCallback мы получаем сам колбек
  }, [count])


  // useCallback нужен что бы функция не изменялась при новом рендере


  return (
    <div>
      <h1 style={styles}>Computed Value: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button onClick={() => setColored(prev => !prev)}>Change</button>
      <hr />
      <ItemsList getItems={generatesItemsFromApi} />
    </div>
  )
}